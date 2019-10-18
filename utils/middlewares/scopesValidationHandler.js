const boom = require('@hapi/boom')

function scopesValidationHandler(allowedScopes) {
    return function(req, res, next) {
        if (!req.user || (req.user && !req.user.scopes)) {
            next(boom.unauthorized('Missing scopes'))
        }

        const permisions = allowedScopes
            .map(allowedScope => req.user.scopes.includes(allowedScope))

        const hasAccess = !permisions.includes(false)

        if(hasAccess){
            next()
        }else{
            next(boom.unauthorized('Insuficents Scopes'))
        }
    }
}

module.exports = scopesValidationHandler