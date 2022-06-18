var words = document.querySelectorAll(".word")
var wordShift = document.querySelector(".word-shift")
var number = 0
var changed = false

function changeWord(){
    for(var x of words){
        x.classList.remove("visible")
    }
    if(number < words.length - 1){
        number++
        words[number].classList.add("visible")
    } else {
        number = 0
        words[number].classList.add("visible")
    }
}

function changeWidth(){
    if(!changed){
        wordShift.style.width = 0;
        changed = true
    } else {
        changeWord()
        var currentWord = document.querySelector(".visible")
        var currentWordWidth = currentWord.clientWidth + 10
        wordShift.style.width = currentWordWidth + "px"
        changed = false
    } 
}

setInterval(changeWidth, 2000)
