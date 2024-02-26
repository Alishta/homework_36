const types = {
    emergency: "Emergency", 
    alert: "Alert",
    critical: "Critical", 
    error: "Error",
    warning: "Warning",
    notice: "Notice", 
    informational: "Informational",
    debug: "Debug"
}

const env = process.env['NODE_ENV']
console.log(`Messages from ${env} environment: `)

const logger = (type, msg, ...args) => {
    if (!Object.values(types).includes(type)) 
    return;

    // console.log(type);

    if (env === 'local') {
        console.log(msg)
    } else if (env === 'development' && [types.emergency, types.alert, types.critical, types.error, types.warning, types.notice].includes(type)) {
        console.log(msg)
    } else if (env === 'production' && [types.emergency, types.alert, types.critical, types.error].includes(type)) {
        console.error(msg)
    }
};


module.exports = {
    types,
    logger
}