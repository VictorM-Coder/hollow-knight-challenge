const btnFontIncrement = document.getElementById("btn-font-increment")
const btnFontNormal = document.getElementById("btn-font-normal")
const btnFontDecrement = document.getElementById("btn-font-decrement")

const html = document.getElementsByTagName('html')[0]
const normalSize = 16
let currentSize = 16

btnFontIncrement.addEventListener('click', incrementFontSize)
btnFontDecrement.addEventListener('click', decrementFontSize)
btnFontNormal.addEventListener('click', resetFontSize)


function incrementFontSize(){
    if(currentSize < 22){
        currentSize += 2
        setCurrentSize(currentSize)
    }
}

function decrementFontSize(){
    if(currentSize > 10){
        currentSize -= 2
        setCurrentSize(currentSize)
    }
}

function resetFontSize(){
    currentSize = normalSize
    setCurrentSize(currentSize)
}

function setCurrentSize(currentSize){
    html.style.fontSize = `${currentSize}px`
}