require('dotenv').config()

const {types, logger} = require("./logger")

logger(types.emergency, `${types.emergency} message!`)
logger(types.alert, `${types.alert} message!`)
logger(types.critical, `${types.critical} message!`)
logger(types.error, `${types.error} message!`)
logger(types.warning, `${types.warning} message!`)
logger(types.notice, `${types.notice} message!`)
logger(types.informational, `${types.informational} message!`)
logger(types.debug, `${types.debug} message!`)

try {
    throw new Error('Error!')
} catch(err) {
    logger(types.error, err.message) 
}
