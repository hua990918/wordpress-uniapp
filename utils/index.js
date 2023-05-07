import { CRYPT_KEY, CRYPT_IV } from '@/config/index.js'

import CryptoJS from 'crypto-js'

import dayjs from 'dayjs'

/**
 * 数据映射
 * @param {array} list 数据源
 * @param {object} structure 新结构
 *          {
 *              新字段名称: 对应数据中的字段名 || function(item, index, array){}
 *          }
 * @param {object} expand 拓展数据
 * @param {string} treeField 子节点，如果是树型结构，传入树型结构的子节点对应的字典名
 * @returns {[]}
 */
export const mapping = (list, structure = {}, expand = {}, treeField) => {
    let result = []
    if (!Array.isArray(list)) return []
    if (!structure) return list
    list.forEach((item, index, array) => {
        let temp = {},
            record,
            structureValue
        for (let key in structure) {
            structureValue = structure[key]
            record = item[structureValue]
            if (structureValue === treeField) {
                // 树结构
                if (record && record.length) {
                    const child = mapping(item[treeField], structure, expand, treeField)
                    if (child && child.length) {
                        temp[key] = child
                    }
                }
            } else if (structureValue instanceof Function) {
                // 函数
                temp[key] = structureValue(item, index, array)
            } else {
                temp[key] = typeof record !== 'undefined' && record !== '' ? record : ''
            }
        }
        temp = expand ? { ...temp, ...expand } : temp
        result.push(temp)
    })
    return result
}

/**
 * 深度合并
 * @param object
 * @param sources
 * @return {*}
 */
export const mergeDeep = (object, sources) => {
    let key
    for (key in sources) {
        object[key] = object[key] && object[key].toString() === '[object Object]' ? mergeDeep(object[key], sources[key]) : (object[key] = sources[key])
    }
    return object
}

/**
 * AES 加密
 */
export const encrypt = (data, keyStr = CRYPT_KEY, ivStr = CRYPT_IV) => {
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const iv = CryptoJS.enc.Utf8.parse(ivStr)
    const encrypted = CryptoJS.AES.encrypt(data, key, { iv })
    return encrypted.toString().slice(0, -2)
}

/**
 * AES 解密
 */
export const decrypt = (data, keyStr = CRYPT_KEY, ivStr = CRYPT_IV) => {
    let key = CryptoJS.enc.Utf8.parse(keyStr)
    let iv = CryptoJS.enc.Utf8.parse(ivStr)
    let decrypted = CryptoJS.AES.decrypt(data, key, { iv })
    return decrypted.toString(CryptoJS.enc.Utf8)
}

/**
 * 乘法运算
 */
export const numMulti = (num1, num2) => {
    var baseNum = 0
    baseNum += num1.toString().split('.')?.[1]?.length || 0
    baseNum += num2.toString().split('.')?.[1]?.length || 0
    return (Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', ''))) / Math.pow(10, baseNum)
}
