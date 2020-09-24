import Hello from "./components/Hello"
function Person(name,age) {
    // 实例属性
    this.name = name
    this.age = age
}

// 挂在到原型的构造函数里是静态属性，直接点赋值的是静态的
Person.gender = "man"
// 实例属性
const p1 = new Person('大黄',18)
// 实例方法，挂在到原型内部，与constructor平级
Person.prototype.say = function () {
    console.log("这是person的实例方法")
    console.log("say Hello")
}
// 静态方法
Person.show = function () {
    console.log("这是person的静态方法")
}

 console.log(Person)
 console.log(p1)
console.log(Person.show()) // ok 
// console.log(Person.say())//wrong
console.log(p1.say()) // ok
// console.log(p1.show()) // wrong


console.log("---------class 分割线------------")

class Animal {
  // 实例属性，每当new这个类时，构造函数就会优先执行
    constructor(name,age) {
        this.name = name
        this.age = age
    }
// 静态属性
    static info = "eeee"
//  静态方法 
    static jiao() {
        console.log("Animal的静态方法")
    }
//  实例方法
show() {
    console.log("Animal的实例方法")
}

}
// 实例属性
const a1 = new Animal('大黄',18)
console.log(a1)
console.log(Animal)
// 静态方法可以点出来，实例方法可通过实例点出来
console.log(Animal.info) 
console.log(Animal.jiao()) 
console.log(a1.show())

console.log("--------- extends分割线------------")

class Chinese extends Person {
}

const c1 = new Chinese('rock',12)
console.log(c1)
console.log(c1.say())

class American  extends Animal {

}

const am1 = new American('kindy',17)

console.log(am1)
console.log(am1.show())

console.log("---------super 分割线------------")

class Japanese extends Animal {
    constructor(name,age){
        // 1 super 要调用 extends的父类构造器，2 super传参过去给父类
        super(name,age)
    }
}

const j1 = new Japanese("院子",12)
console.log(j1)

console.log("---------独有特性挂载分割线------------")

class Cat extends Animal {
    constructor(name,age,eat){
        super(name,age)
        // this只能放在super 后面
        this.eat = eat
    }
}
const cat  = new Cat('miao',2,'fish')
console.log(cat)



