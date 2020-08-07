'use strict';

const stocks = [
    {color: 'pink', clothType: 'tee', gender: 'female', clothSize: 'large'},
    {color: 'blue', clothType: 'pants', gender: 'man', clothSize: 'small'},
    {color: 'yellow', clothType: 'pants', gender: 'man', clothSize: 'large'},
    {color: 'yellow', clothType: 'skirt', gender: 'man', clothSize: 'large'},
    {color: 'blue', clothType: 'skirt', gender: 'female', clothSize: 'small'},
    {color: 'blue', clothType: 'tee', gender: 'male', clothSize: 'large'},
    {color: 'yellow', clothType: 'tee', gender: 'male', clothSize: 'large'},
    {color: 'pink', clothType: 'pants', gender: 'female', clothSize: 'small'},
    {color: 'pink', clothType: 'tee', gender: 'female', clothSize: 'large'},
    {color: 'blue', clothType: 'pants', gender: 'male', clothSize: 'small'},
    {color: 'yellow', clothType: 'pants', gender: 'male', clothSize: 'large'},
    {color: 'yellow', clothType: 'skirt', gender: 'man', clothSize: 'large'},
    {color: 'blue', clothType: 'skirt', gender: 'female', clothSize: 'small'},
    {color: 'blue', clothType: 'tee', gender: 'male', clothSize: 'large'}
]

function selectedColor(color) {
    console.log(color)
    const result = ''
    if(color !== null) {
        result = stocks.filter((stock) => stock.color)
    } 
    console.log(result)
    const list = document.querySelector("#clothesList")
    if(color === 'pink') {
        list.innerHTML += "<li class='item'><img src='img/pink_p.png' alt='pink pants' width='20' height='20'/><p>"+{}+"</p></li>"
    }
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