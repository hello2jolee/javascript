'use strict';

// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
    // do network request in 10 secs...
    return 'ellie'
}

const user = fetchUser()
user.then(console.log)
console.log(user)

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

 async function getApple() {
     await delay(2000)
     return '🍎'
 }

 async function getBanana() {
     await delay(1000)
     return '🍌'
 }

//  function getBanana() {
//      return delay(3000)
//      .then(() => '🍌')
//  }

// callback 지옥 발생 
// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`)
//     })
// }

async function pickFruits() {
    const applePromise = getApple() // 1. 병렬적으로 getApple과 getBanana를 따서 
    const bananaPromise = getBanana()
    const apple = await applePromise // 2. 여기서 apple과 banana 기다림 
    const banana = await bananaPromise
    return `${apple} + ${banana}` // 3. 같이 출력 
}

pickFruits().then(console.log)

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '))
}
pickFruits().then(console.log)

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log)