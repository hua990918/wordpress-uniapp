export default {
    // 请求地址
    // #ifdef H5
    UNI_APP_API_DEFAULT: '/api_default',
    // #endif

    // #ifndef H5
    UNI_APP_API_DEFAULT: 'https://yyink.cn', // 生产环境
    // #endif

    // 启用请求加密
    UNI_APP_ENABLE_REQUEST_ENCRYPT: false,

    // 启用 mock
    UNI_APP_ENABLE_MOCK: false,

    // Debug
    UNI_APP_ENABLE_DEBUG: false,
}
