/**
 * 作用域
*/
// 全局作用域
// 函数作用域
// 块级作用域


/**
 * 自由变量
*/
// 一个变量在当前作用域没有定义，但被使用了
// 向上级作用域，一层一层一次寻找，直至找到为止
// 如果到全局作用域都没找到，则报错 xx is not defined

/**
 * 闭包
 */

// 函数作为返回值
function fn1() {
    const a = 100;
    return function () {
        console.log(a)
    }
}

const f1 = fn1()
const a = 200
f1() // 100

// 函数作为参数传递
function fn2(fn) {
    const a = 200
    fn()
}
const a = 100
function fn3() {
    console.log(a)
}
fn2(fn3) // 100
// 所有的自由变量的查找，是在函数定义的地方，向上级作用域查找。不是在执行的地方！！！！