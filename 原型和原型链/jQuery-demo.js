/**
 * 简易的 jQuery
 */
class jQuery {
    constructor(selector) {
        const result = document.querySelector(selector)
        this.selector = selector
        this.length = result.length
        for (let i = 0; i < this.length; i++) {
            this[i] = result[i]
        }
    }
    get(index) {
        return this[index]
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
}

// const $p = new jQuery('p')
// $p.get(1)
// $p.each((elem) => console.log(elem))
// $p.on('click', () => console.log('click'))

/**
 * 插件
 * 往 jQuery 的 原型上加方法
 */

jQuery.prototype.dialog = (info) => console.log(info)

/**
 * 造轮子
 */

class myjQuery extends jQuery {
    constructor(selector) {
        super(selector)
    }
    // 扩展自己的方法
    addClass(className) { }
    style(data) { }
}