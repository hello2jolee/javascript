'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌']
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[fruits.length -1])

console.clear()
// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i])
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit)
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit))

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍑', '🍒')
console.log(fruits)

// pop: remove an item from the end 
fruits.pop()
fruits.pop()
console.log(fruits)

// unshift: add an item to the beginning
fruits.unshift('🍇', '🥝')
console.log(fruits)

// shift: remove an aitem to the beginning
fruits.shift()
fruits.shift()
console.log(fruits)

// note!! shift, unsift are shlower than pop, push
// splice : remove an item by index position
fruits.push('🍑', '🍒', '🥝')
console.log(fruits)
fruits.splice(1) // [1] 위치에 있는 item을 지운다 
fruits.splice(1,1) // [1] 위치에 있는 item 부터 1개를 지운다
console.log(fruits)
fruits.splice(1, 1, '🥭', '🍍') // 지우고 그 위치에 새로운 item을 추가하다
console.log(fruits)

// combine two arrays
const fruits2 = ['🍓', '🍈']
const newFruits = fruits.concat(fruits2)
console.log(newFruits)

// 5. Searching
// indexOf: find the index
console.clear()
console.log(fruits)
console.log(fruits.indexOf('🍎'))
console.log(fruits.indexOf('🍈')) // 배열에 해당 item이 없을 경우 -1이 출력

// includes
console.log(fruits.includes('🍈'))

// lastIndexOf
console.clear()
fruits.push('🍎')
console.log(fruits)
console.log(fruits.indexOf('🍎')) // 첫번째 사과가 있는 위치 출력 
console.log(fruits.lastIndexOf('🍎')) // 마지막 사과가 있는 위치 출력 