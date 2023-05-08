import { mergeDeep } from '../index'

import { encrypt, decrypt } from '@/utils/index.js'
import { envConfig } from '@/env.js'
import { isString } from '@/utils/is.js'

// #ifdef H5
import Fly from 'flyio/dist/npm/fly.js'
// #endif

// #ifdef MP-WEIXIN
import Fly from 'flyio/dist/npm/wx.js'
// #endif

// #ifdef APP
import Fly from 'flyio/dist/npm/wx.js'
// #endif

const instance = new Fly()

// 请求拦截器
instance.interceptors.request.use((req) => {
    const body = req.body
    const hasBody = !!Object.keys(body).length
    const encryptBody = encrypt(JSON.stringify(body))

    // req.headers['Content-Type'] = 'application/json'
    // req.headers['token'] = token

    switch (req.method.toLowerCase()) {
        case 'get':
        case 'delete':
            if (envConfig('ENABLE_REQUEST_ENCRYPT')) {
                req.body = hasBody ? { req: encryptBody } : {}
            } else {
                req.body = hasBody ? { req: JSON.stringify(body) } : {}
            }
            break
        case 'put':
        case 'post':
            if (envConfig('ENABLE_REQUEST_ENCRYPT')) {
                req.body = hasBody ? { req: encryptBody } : {}
            }
            break
    }

    if (envConfig('ENABLE_DEBUG')) {
        console.group('req')
        console.log('[api]', `${req.baseURL}${req.url}`)
        console.log('[body]', body)
        console.log('[body-string]', JSON.stringify(body))
        console.log('[encrypt-body]', body)
        console.log('[token]', token)
        console.groupEnd()
    }

    return req
})

// 响应拦截器
instance.interceptors.response.use(
    (res) => {
        // if (![0].includes(res?.data?.code)) {
        //     setTimeout(() => {
        //         uni.showToast({
        //             // title: `${res?.data?.msg ?? '网络错误'}[${res?.data?.code ?? 100}]`, 携带错误码1
        //             title: `${res?.data?.msg ?? '网络错误'}`,
        //             icon: 'none',
        //         })
        //     }, 100)
        // }

        return isString(res.data) ? JSON.parse(res.data) : res.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

class Http {
    constructor(options = {}) {
        this.options = mergeDeep(
            {
                timeout: 0,
            },
            options
        )
    }

    /**
     * 请求
     * @param options
     * @returns {Promise<unknown>}
     */
    request(url, data, options = {}) {
        return new Promise((resolve, reject) => {
            instance
                .request(url, data, {
                    ...this.options,
                    ...options,
                })
                .then(
                    (res) => {
                        resolve(typeof res === 'string' ? JSON.parse(res) : res)
                    },
                    (err) => {
                        reject(err)
                    }
                )
                .catch((err) => {
                    reject(err)
                })
        })
    }

    /**
     * get
     * @param url
     * @param data
     * @param options
     * @returns {Promise<unknown>}
     */
    get(url = '', data = {}, options = {}) {
        return this.request(url, data, {
            method: 'get',
            ...options,
        })
    }

    /**
     * post
     */
    post(url = '', data = {}, options = {}) {
        return this.request(url, data, {
            method: 'post',
            ...options,
        })
    }

    /**
     * put
     */
    put(url = '', data = {}, options = {}) {
        return this.request(url, data, {
            method: 'put',
            ...options,
        })
    }

    /**
     * delete
     */
    delete(url = '', data = {}, options = {}) {
        return this.request(url, data, {
            method: 'delete',
            ...options,
        })
    }

    /**
     * 文件上传
     */
    upload(url = '', formData = {}) {
        return new Promise((resolve, reject) => {
            uni.uploadFile({
                url: `${this.options.baseURL}${url}`,
                ...formData,
                success: (res) => {
                    resolve(isString(res.data) ? JSON.parse(res.data) : res.data)
                },
                error: () => {
                    reject()
                },
            })
        })
    }
}

export default Http
