import request from '@/utils/request/index.js'

//获取默认10偏文章
export const getArticle = () => request.wpuni.get('/posts')
