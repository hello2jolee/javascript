'use strict';

// object
// one of the JavaScript's data types
// a collection of related data and/or functionally.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }

// 1. Literals and properties
const obj1 = {} // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax
function print(person) {
    console.log(person.name)
    console.log(person.age)
}

const ellie = {name: 'ellie', age: 4}
print(ellie)

ellie.hasJob = true
console.log(ellie.hasJob)

delete ellie.hasJob
console.log(ellie.hasJob)

// 2. Computed properties (e.g. ellie['name'])
// key should be always string
// 동적으로 key값을 받아와야 할 때 유용 
console.log(ellie.name) // key에 해당되는 값을 받아오고 싶을 때 사용 -> 코딩할 때는 이 방법을 사용하는 것이 맞음
console.log(ellie['name']) // 정확하게 어떤 key가 필요한지 모를 때 사용 -> run time 내에서 결정될 때 사용
ellie['hasJob'] = true
console.log(ellie.hasJob)

function printValue(obj, key) {
    console.log(obj[key])
}
printValue(ellie, 'name')
printValue(ellie, 'age')

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2}
const person2 = { name: 'steve', age: 3}
const person3 = { name: 'dave', age: 4}
const person4 = new Person('ellie', 30)
console.log(person4)

// 4. Constructor function
function Person(name, age) { // 다른 계산을 하지 않고 오로지 object 생성만 할 경우 대.문.자.로 시작하도록 함수를 만듦
    // return {
    //     name, // 자바스크립트에서는 name: name 일 경우 앞에 있는 name은 생략 가능 
    //     age
    // }

    // this = {}
    this.name = name; // 다른 계산을 하지 않고 오로지 object 생성만 할 경우 return 보다는 this를 사용
    this.age = age;
    // return this
}

// 5. in operator: property existance check (key in obj)
console.log('name' in ellie)
console.log('age' in ellie)
console.log('random' in ellie)
console.log(ellie.random)

// 6. for ..in vs for..of
// for (key in obj)
console.clear() // 이전 로그 지우기
for (let key in ellie) {
    console.log(key)
}

// for (value of iterable)
const array = [1, 2, 4, 5]
for(let value of array) {
    console.log(value)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'}
const user2 = user
user2.name = 'coder'
console.log(user)

// old way
const user3 = {}
for(let key in user) {
    user3[key] = user[key]
}
console.clear()
console.log(user3)

const user4 = Object.assign({}, user)
console.log(user4)

// another example
const fruit1 = {color: 'red'}
const fruit2 = {color: 'blue', size: 'big'}
const mixed = Object.assign({}, fruit1, fruit2) // 뒤에 있을수록 값을 덮어씀
console.log(mixed.color)
console.log(mixed.size)