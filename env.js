import dev from './env.dev.js'
import prod from './env.prod.js'

const env = 'production' === process.env.NODE_ENV ? prod : dev

console.log('哈哈哈', process.env.NODE_ENV)

const envConfig = (name, def = '') => {
    const key = name.startsWith('UNI_APP_') ? name : `UNI_APP_${name}`
    return env[key] || def
}

export { envConfig }

export default env
