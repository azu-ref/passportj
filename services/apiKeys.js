const mongoLib = require('../lib/mongo')
const apiKeyModel = require('../models/apyKey')

class ApiKeysService {
    constructor() {
        this.collection = apiKeyModel
    }

    async getApiKeys({ token }) {
        const [ apiKey ] = await mongoLib.getAll(this.collection, { token })

        return apiKey 
    }
}

module.exports = ApiKeysService