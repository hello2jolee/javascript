'use strict'

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body ... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCaredAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello')
}
printHello()

function log(message) {
    console.log(message);
}
log('Hello@')
log(1234)

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder'
}
const ellie = {name: 'ellie'};
changeName(ellie)
console.log(ellie)

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('Hi!')

// 4. Rest parameters (added in ES6)
function printAll(... args) { // 배열 형태로 전달 받음
    for(let i = 0; i<args.length; i++) {
        console.log(args[i])
    }

    for(const arg of args) {
        console.log(arg)
    }

    args.forEach((arg) => console.log(arg))
}
printAll('dream', 'coding', 'ellie')

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
let globalMessage = 'global' // global variable
function printMessage() {
    let message = 'hello'
    console.log(message)
    console.log(globalMessage)
    function printAnother() {
        console.log(message)
        let childMessage = 'hello'
    }
    // console.log(childMessage) // error
    // return undefined // return이 생략되어 있음
}
printMessage()

// 6. Return a value
function sum(a, b) {
    return a + b
}
const result = sum(1,2)
console.log(`sum: ${sum(1, 2)}`)

// 7. Early return ,early exit
// bad
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic...
    }
}
// good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// First-class function
// functions are treaded like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reches it.
const print = function () { // anonymous function
    console.log('print')
}
print()
const printAgain = print;
printAgain()
const sumAgain = sum
console.log(sumAgain(1, 3))

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes()
    } else {
        printNo()
    }
}
// anonymous function
const printYes = function() {
    console.log('yes')
}

// named function
// better debuggin in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!')
}
randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

// Arrow function
// always anonymous
// const simplePrint = function() {
//     console.log('simplePrint')
// }
const simplePrint = () => console.log('simplePrint')
const add = (a, b) => a + b
const simpleMultiply = (a,b) => {
    // do something more
    return a * b
}

// IIFE: Immediately Invoked Function Expression => 함수를 바로 실행하고 싶을 때 사용(요즘 자주 사용X)
(function hello() {
    console.log('IIFE')
})()

// QUIZ
function calculate(command, a, b) {
    if(command === 'add') {
        return a + b
    } else if(command === 'substract') {
        return a - b
    } else if(command === 'divide') {
        return a / b
    } else if(command === 'multiply') {
        return a * b
    } else if(command === 'remainder') {
        return a % b
    } else {
        console.log('add, substract, divide, multiply, remainder 중에 입력해주세요')
    }
}
console.log(calculate('remainder', 2, 3))

// QUIZ 권장 답안 
// 정해진 데이터를 처리할 경우에는 IF문보다는 SWITCH문을 사용하는 것이 더 좋음
function calculateAnswer(command, a, b) {
    switch(command) {
        case 'add':
            return a + b
        case 'substract':
            return a - b
        case 'divide':
            return a / b
        case 'multiply':
            return a * b
        case 'remainder':
            return a % b
        default:
            throw Error('unknown command')
    }
}
console.log(calculateAnswer('substract', 2, 3))