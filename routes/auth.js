const express = require('express')
const passport = require('passport')
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const ApiKeysService = require('../services/apiKeys')
const UsersService = require('../services/users')
const validationHandler = require('../utils/middlewares/validationHandler')
const joi = require('@hapi/joi')

const { createUserSchema, createProviderUserSchema } = require('../utils/schemas/users')

const { config } = require('../config/index')

// Basic Strategy
require('../utils/auth/strategies/basic')

// Agregamos las variables de timpo en segundos
const THIRTY_DAYS_IN_SEC = 2592000
const TWO_HOURS_IN_SEC = 7200

function authApi(app) {
    const router = express.Router()
    app.use('/api/auth', router)

    const apiKeysService = new ApiKeysService()
    const userService = new UsersService()

    // ruta para la utenticacion y autorizacion de usuarios
    router.post('/sign-in', async function(req, res, next) {
        const { apiKeyToken, remenberMe } = req.body

        if(!apiKeyToken) {
            next(boom.unauthorized('apiKeyToken is required'))
        }

        passport.authenticate('basic', function(error, user) {
            try {
                if(error || !user ) {
                    next(boom.unauthorized('hola3'))
                }
                // console.log(user)

                req.login(user, { session: false }, async function(error){
                    if(error){
                        next(error)
                    }

                    const apiKey = await apiKeysService.getApiKeys({ token: apiKeyToken })

                    if(!apiKey) {
                        next(boom.unauthorized())
                    }

                    const { _id: id, name, email } = user

                    const payload = {
                        sub: id,
                        name,
                        email, 
                        scopes: apiKey.scopes
                    }

                    
                    const token = jwt.sign(payload, config.authJwtSecret, {
                        expiresIn: '15m'
                    })

                    // Si el atributo rememberMe es verdadero la expiración será en 30 dias
                    // de lo contrario la expiración será en 2 horas
                    res.cookie("token", token, {
                        httpOnly: !config.dev,
                        secure: !config.dev,
                        maxAge: remenberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC
                    })
    
                    return res.status(200).json({ token, user: { id, name, email }})
                })

                
            }catch(error) {
                next(error)
            }
        })(req, res, next)
    })

    router.post('/sign-up',
    validationHandler(joi.object(createUserSchema)),
    async function(req, res, next) {
      const { body: user } = req

      try {
        const createdUserId = await userService.createUser(user)

        res.status(201).json({
          data: createdUserId,
          message: 'User created'
        })
      } catch (error) {
        next(error)
      }
    })

    router.post('/sign-provider',
    validationHandler(joi.object(createProviderUserSchema)),
    async function(req, res, next) {
        const { body } = req;

      const { apiKeyToken, ...user } = body;

      if (!apiKeyToken) {
        next(boom.unauthorized('apiKeyToken is required'));
      }

      try {
        const queriedUser = await userService.getOrCreateUser(user);
        const apiKey = await apiKeysService.getApiKeys({ token: apiKeyToken });

        if (!apiKey) {
          next(boom.unauthorized());
        }

        const { _id: id, name, email } = queriedUser;

        const payload = {
          sub: id,
          name,
          email,
          scopes: apiKey.scopes
        };

        const token = jwt.sign(payload, config.authJwtSecret, {
          expiresIn: '15m'
        });

        return res.status(200).json({ token, user: { id, name, email } });
      } catch (error) {
        next(error);
      }
    })
}

module.exports = authApi

