import { envConfig } from '@/env.js'

import Http from './http.js'

class Default extends Http {
    constructor(baseURL) {
        super({
            baseURL,
        })
    }
}

export default {
    // 默认
    default: new Default(`${envConfig('API_DEFAULT')}`),
    // WORDPRESS_REST_API_URL
    wp: new Default(`${envConfig('API_DEFAULT')}/wp-json/wp/v2`),
    // PLUGIN_REST_API_URL
    wpuni: new Default(`${envConfig('API_DEFAULT')}/wp-json/uni-app-rest-enhanced/v1`),
}
