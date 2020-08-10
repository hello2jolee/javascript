'use strict';

// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name
        this.age = age
    }

    // methods
    speak() {
        console.log(`${this.name} : hello!`)
    }
}

const ellie = new Person('ellie', 20)
console.log(ellie.name)
console.log(ellie.age)
ellie.speak()

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    get age() {
        return this._age
    }

    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative')
        // }
        this._age = value < 0 ? 0 : value
    }
}

const user1 = new User('Steve', 'Job', -1)
console.log(user1.age)

// 3. Fields (public, private)
// Too soon! (지원되는 브라우저가 아직 없음..)
class Experiment {
    publicField = 2
    #privateField = 0 // 클래스 내부에서만 접근, 읽음, 변경 가능
}

const experiment = new Experiment()
console.log(experiment.publicField)
console.log(experiment.privateField)

// 4. Static properties and methods
// Too soon!
// Object(들어오는 데이터)와 상관없이 공통적으로 클래스에서 사용할 수 있는 것 -> 메모리 사용을 줄일 수 있음!
class Article {
    static publisher = 'Dream Coding'
    constructor(articleNumber) {
        this.articleNumber = articleNumber
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}
const article1 = new Article(1)
console.log(Article.publisher)
Article.printPublisher()

// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }
    draw() {
        console.log(`drawing ${this.color} color!`)
    }

    getArea() {
        return this.width * this.height
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw()
        console.log('🔺')
    }
    getArea() {
        return this.width * this.height / 2
    }
    toString() {
        return `Triangle: color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()
console.log(rectangle.getArea())
const triangle = new Triangle(20, 20, 'red')
triangle.draw()
console.log(triangle.getArea())

// 6. Class checking: instanceOf 
// 좌측에 있는 object가 우측에 있는 Class를 사용해서 만들었는지 여부를 true/ false로 반환
console.log(rectangle instanceof Rectangle)
console.log(triangle instanceof Rectangle)
console.log(triangle instanceof Triangle)
console.log(triangle instanceof Shape)
console.log(triangle instanceof Object)
console.log(triangle.toString())