const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom =  require('@hapi/boom')
const bcrypt = require('bcrypt')

const UserServices = require('../../../services/users')

passport.use(new BasicStrategy(async function(email, password, cb) {
    const userService = new UserServices()

    try {
        const user = await userService.getUser({ email })
        console.log(user)
        if(!user) {
            return cb(boom.unauthorized('hola1'), false)
        }

        if(!(await bcrypt.compare(password, user.password))) {
            return cb(boom.unauthorized('hola2'), false)
        }

        delete user.password

        return cb(null, user)
    } catch (error) {
        return cb(error)
    }
}))