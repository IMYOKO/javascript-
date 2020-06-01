/**
 * 深拷贝
 */
function deepClone(obj = {}) {
    // obj 是 null，或者不是对象或者数组，直接返回
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 递归
            return result[key] = deepClone(obj[key])
        }
    }
    return result
}