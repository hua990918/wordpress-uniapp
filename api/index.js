import request from '@/utils/request/index.js'

//获取默认10偏最新文章
export const getArticle = () => request.wpuni.get('/posts')
//获取配置文件，首页幻灯与导航
export const getSetting = () => request.wpuni.get('/options/homeconfig')
//获取分类信息
export const getCate = (size) => request.wp.get(`/categories?per_page=${size}`)
