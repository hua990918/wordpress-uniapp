import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
    plugins: [uni()],
    server: {
        proxy: {
            '/api_default': {
                target: 'https://yyink.cn', //开发环境
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace('/api_default', ''),
            },
        },
    },
})
