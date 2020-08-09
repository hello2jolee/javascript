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

const list = document.querySelector('#clothesList')

function selectedColor(selectColor) {
    let result = stocks.filter(stock => stock.color === selectColor)
    
    result.map(r => list.innerHTML += `<li class='item'><img src='img/${r.color}_${r.clothType}.png' alt='pink pants' width='20' height='20'/><p class='description'>${r.gender}, ${r.clothSize}</p></li>`)
} 
function selectedClothType(selectCloth) {
    let result = stocks.filter(stock => stock.clothType === selectCloth)
    result.map(r => list.innerHTML += `<li class='item'><img src='img/${r.color}_${r.clothType}.png' alt='pink pants' width='20' height='20'/><p class='description'>${r.gender}, ${r.clothSize}</p></li>`)
}

function resetPage() {
    list.innerHTML = ''
}

window.onload = function() {
    document.getElementById('reset').onclick = function() {
        resetPage()
    }
    document.getElementById('tee_item').onclick = function() {
        selectedClothType('tee')
    }
    document.getElementById('pants_item').onclick = function() {
        selectedClothType('pants')
    }
    document.getElementById('skirt_item').onclick = function() {
        selectedClothType('skirt')
    }
    document.getElementById('blue_item').onclick = function() {
        selectedColor('blue')
    }
    document.getElementById('yellow_item').onclick = function() {
        selectedColor('yellow')
    }
    document.getElementById('pink_item').onclick = function() {
        selectedColor('pink')
    }
}