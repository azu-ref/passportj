// set DEBUG=app:* && node scripts/mongo/seedApiKeys.js

const chalk = require('chalk')
const crypto = require('crypto')
const debug = require('debug')('app:scripts:api-keys')
const MongoLib = require('../../lib/mongo')
const ApiKey = require('../../models/apyKey')

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'create:movies',
  'update:movies',
  'delete:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
]

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
]

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes
  }
]

function generateRandomToken() {
  const buffer = crypto.randomBytes(32)
  return buffer.toString('hex')
}

async function seedApiKeys() {
  try {
    const promises = apiKeys.map(async apiKey => {
      await MongoLib.create(ApiKey, apiKey)
    })

    await Promise.all(promises)
    console.log(chalk.green(`${promises.length} api-keys have been generated succesfully`))
    return process.exit(0)
  } catch (error) {
    console.log(chalk.red(error))
    process.exit(1)
  }
}

seedApiKeys()