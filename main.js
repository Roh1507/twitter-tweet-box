import './style.css'

const editableInput = document.querySelector(".editable")
let readInput = document.querySelector(".readonly")
let placeholder = document.querySelector(".placeholder")
let counter = document.querySelector(".counter")
let button = document.querySelector("button")

editableInput.onkeyup = (e) => {
    let element = e.target
    checkInput(element)
}

editableInput.onkeypress = (e) => {
    let element = e.target
    checkInput(element)
    placeholder.style.display="none"
}

function checkInput(element){
    let maxLength=100
    let currentLength = element.innerText.length
    let textTag=element.innerHTML

    if (currentLength <= 0) {
        placeholder.style.display = "block"
        counter.style.display = "none"
        button.classList.remove("active")
    } else {
        placeholder.style.display = "none"
        counter.style.display = "block"
        button.classList.add("active")
    }

    counter.innerText=maxLength-currentLength

    if(currentLength > maxLength){
        let overText=element.innerText.substr(maxLength)
        overText=`<span class="highlight">${overText}</span>`
        textTag=element.innerText.substr(0,maxLength)+overText
        readInput.style.zIndex="1"
        counter.style.color="darkred"
        button.classList.remove("active")
    }else{
        readInput.style.zIndex="-1"
        counter.style.color="#333"
    }
    readInput.innerHTML=textTag;
}