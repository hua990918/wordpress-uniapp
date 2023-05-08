import request from '@/utils/request/index.js'

//获取默认10偏文章
export const getArticle = () => request.wpuni.get('/posts')
// 配置文件，首页幻灯与导航
export const getSetting = () => request.wpuni.get('/options/homeconfig')
