// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); 
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); 

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than 
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than 
console.log(10 >= 6); // greater than or equal 

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value => 앞에서부터 true값을 찾고 멈춘다.
// || (or)을 연산할 경우, value가 simple한 순서대로 나열한다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null) {
//     nullableObject.somethig;
// }

function check() {
    for(let i = 0; i<10; i++) {
        //wasting time
        console.log('🧐');
    }
    return true;
}

// ! (not)
console.log(!value1)

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive)
console.log(stringFive != numberFive)

// === strict equality, no type conversion
console.log(stringFive === numberFive)
console.log(stringFive !== numberFive)

// object equality by reference
const ellie1 = {name: 'ellie'}
const ellie2 = {name : 'ellie'}
const ellie3 = ellie1
console.log(ellie1 == ellie2)
console.log(ellie1 === ellie2)
console.log(ellie1 === ellie3)

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie'
if(name === 'ellie') {
    console.log('Welcome Ellie!')
} else if(name === 'coder') {
    console.log('You are amazing coder')
} else {
    console.log('unknown')
}

// 9. Ternary operator: ? => 간단할 때만 사용할것, 여러 개를 쓰면 가독성이 떨어짐
// condition ? value1 : value2
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch Statement
// use for nultiple if checks
// use for enum-like value ckeck
// use for ultiple type checks in TS
const browser = 'IE'
switch(browser) {
    case 'IE':
        console.log('go away!')
        break
    case 'Chrome':
    case 'Firefox':
        console.log('love you!')
        break
    default:
        console.log('same all!')
        break
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed
let i = 3
while(i > 0) {
    console.log(`while: ${i}`)
    i--
}

// do while loop, body code is executed first, then check the condition.
do {
    console.log(`do-while: ${i}`)
    i--
} while(i > 0)

// for loop, for(begin; condition; step)
for(i = 3; i>0; i--) {
    console.log(`for: ${i}`)
}

for(let i = 3; i>0; i=i-2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`)
}

// nested loops
for(let i = 0; i<10; i++) {
    for(let j = 0; j<10; j++) {
        console.log(`i: ${i}, j: ${j}`)
    }
}