'use strict';

class Stock {
    constructor(color, clothType, gender, clothSize) {
        this.color = color
        this.clothType = clothType
        this.gender = gender
        this.clothSize = clothSize
    }
}
const stocks = [
    new Stock('pink', 'tee', 'female', 'large'),
    new Stock('blue', 'pants', 'man', 'small'),
    new Stock('yellow', 'pants', 'man', 'large'),
    new Stock('yellow', 'skirt', 'man', 'large'),
    new Stock('blue', 'skirt', 'female', 'small'),
    new Stock('blue', 'tee', 'male', 'large'),
    new Stock('yellow', 'tee', 'male', 'large'),
    new Stock('pink', 'pants', 'female', 'small'),
    new Stock('pink', 'tee', 'female', 'large'),
    new Stock('blue', 'pants', 'male', 'small'),
    new Stock('yellow', 'pants', 'male', 'large'),
    new Stock('yellow', 'skirt', 'man', 'large'),
    new Stock('blue', 'skirt', 'female', 'small'),
    new Stock('blue', 'tee', 'male', 'large')
]

function selectedColor(selectColor) {
    console.log(selectColor)
    
    const result = stocks
        .map((stock, index) => `${stock.color}, ${index}`)
        // .filter(color => color === selectColor)
    console.log(result)

    // console.log(result)
    // const list = document.querySelector("#clothesList")
    // if(color === 'pink') {
    //     list.innerHTML += "<li class='item'><img src='img/pink_p.png' alt='pink pants' width='20' height='20'/><p>"+{}+"</p></li>"
    // }
}

function selectedclothType(clothType) {
    if(clothType !== null) {
        const result = stocks.filter((stock) => stock.clothType)
    } 
    const list = document.querySelector("#clothesList")
    if(clothType === 'tee') {
        list.innerHTML += "<li class='item'><img src='img/pink_p.png' alt='pink pants' width='20' height='20'/><p>"+{}+"</p></li>"
    }
}
selectedColor('pink')