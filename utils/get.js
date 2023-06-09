import dayjs from 'dayjs'

/**
 * 获取当前页面实例
 */
export const getCurrentPage = () => {
    const pages = getCurrentPages()
    return pages[pages.length - 1]
}

/**
 * 获取页面标题
 */
export const getTitle = () => {
    return getCurrentPage()?.$page?.meta?.navigationBar?.titleText
}

/**
 * 获取数据类型
 */
export const getType = (val) => Object.prototype.toString.call(val).slice(8, -1).toLowerCase()

/**
 * 格式化当前时间
 */

export const getTime = (val) => dayjs(val).format('YYYY-MM-DD')
/**
 * 获取当前星期几
 * 0(星期日)到6(星期六)的数字
 */
export const getWeek = () => {
    return dayjs().day()
}
