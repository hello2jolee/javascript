'use strict';

// Promise is a JavaScript object for asynchronous operation
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically!! 
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files)
    console.log('doing somethig...')

    setTimeout(() => {
        resolve('ellie')
        // reject(new Error('no network'))
    }, 2000)
})

// 2. Consumers: then, catch, finally
// then(resolve 케이스): promise가 정상적으로 수행돼서 마지막에 최종으로 resolve라는 callback 함수를 통해서 전달한 값이 parameter(value)로 전달되어서 들어옴
// than(reject 케이스): than을 사용해서 성공적인 케이스만 다뤘기 때문에 'Uncaught' Error가 출력됨 
// finally: 마지막에 무조건 실행하고 싶은 것!
promise
.then((value) => { 
    console.log(value)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('finally')
})

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

fetchNumber
.then(num => num * 2) // num: 2
.then(num => num * 3) // num: 6
.then(num => { // num: 6
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000) // num: 5
    })
})
.then(num => console.log(num)) // num: 5, num: 5

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000)
    })
const getEgg = hen => 
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000)
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000)
    })
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000)
    })


getHen()
// .then(hen => getEgg(hen)) // callback함수를 전달할 때 받아오는 value를 바로 다른 함수로 호출하는 경우 앞 뒤 value값 생략 가능 -> 자동적으로 than에서 받아오는 value를 바로 getEgg라는 함수에 전달해서 암묵적으로 호출 
    .then(getEgg)
    .catch(error => {
        return '🥖'
    })
    .then(cook)
    .then(console.log)
    .catch(console.log)