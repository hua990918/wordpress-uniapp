// import { REG_MOBILE } from '@/config/index.js'
import { getType } from './get.js'

// 是否 number
export const isNumber = (val) => 'number' === getType(val)

// 是否 object
export const isObject = (val) => 'object' === getType(val)

// 是否 array
export const isArray = (val) => 'array' === getType(val)

// 是否 string
export const isString = (val) => 'string' === getType(val)

// 是否 undefined
export const isUndefined = (val) => 'undefined' === getType(val)

// 是否为空
export const isEmpty = (val) => isUndefined(val) || '' === val

// 是否手机号
// export const isMobile = (val) => REG_MOBILE.test(val)

// 是否微信浏览器
export const isWx = () => /micromessenger/i.test(navigator.userAgent.toLowerCase())
