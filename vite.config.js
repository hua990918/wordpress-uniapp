import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
    plugins: [uni()],
    server: {
        proxy: {
            '/api_default': {
                //target: 'https://app.ruixiaowan.com', //生产环境
                //////////////////////////////////////////////////
                target: 'https://wtt.ruixiaowan.com', //开发环境
                //target: 'http://192.168.0.110:8033', //本地环境
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace('/api_default', ''),
            },
        },
    },
})
