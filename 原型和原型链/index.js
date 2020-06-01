/**
 * class 和 继承
*/

class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        `${this.name} eat something`
    }
}

class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number;
    }
    sayHi() {
        `姓名：${this.name} 学号：${this.number}`
    }
}

const yoko = new Student('YOKO', 11061)

/**
 * 原型关系
*/
// 每个 class 都有显示原型 prototype
// 每个实例都有隐式原型 __proto__
// 实例的 __proto__ 指向对应 class 的 prototype

console.log(yoko.__proto__ === Student.prototype) // true
console.log(Student.prototype.__proto__ === People.prototype) // true
console.log(People.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true