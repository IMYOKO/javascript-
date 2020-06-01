/**
 * 常见的值类型
 */
let a  // undefined
const str = 'abc'  // string
const n = 132  // number
const b = true  // boolen
const s = Symbol('s')  // Symbol


/**
 * 常见的引用类型
 */
const obj = { x: 100 } // Object
const arr = [1, 2, 3] // Object Array

const n = null  // 特殊引用类型，指针指向为空的地址

// 特殊引用类型，但不用于存储数据，所以没有“拷贝、复制函数”这一说
function fn() { }


/**
 * typeof运算符
 */
// 1.识别所有的值类型
typeof a     // undefined
typeof str   // string
typeof n     // number
typeof b     // boolen
typeof s     // Symbol

// 2.识别函数
typeof console.log // function
typeof function fn() { } // function

// 3.能识别引用类型（不能再继续识别）
typeof null  // 'object'
typeof [1, 2, 3]   // 'object'
typeof { x: 100 }  // 'object'

/**
 * == 运算符
 */

// 除了 == null 之外，其他一律都用 === ，例如：

const obj = { x: 100 }
if (obj.a == null) { }

// 相当于：
// if (obj.a ===  null || obj.a ===  undefined) { }

/**
 * if 运算符
 */
// truely 变量： !!n === true
// falsely 变量： !!n === false
// 以下是 falsely 变量。除此之外都是 truely 变量
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false