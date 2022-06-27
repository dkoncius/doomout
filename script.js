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

// Waitlist
var waitList = document.getElementById("waitlist")
var waitListBtn = document.getElementsByClassName("waitListBtn")
var website = document.getElementById("website")
var escape = document.getElementById("escape")
var form = document.querySelector("form")
var inputs = document.querySelectorAll("input")

for(var x of waitListBtn){
    x.addEventListener("click", function(){
        waitList.style.display = "flex"
        website.style.display = "none"
    })
}


escape.addEventListener("click", function(){
    website.style.display = "block"
    waitList.style.display = "none"
})

form.addEventListener("submit", function(e){
    e.preventDefault()
    website.style.display = "block"
    waitList.style.display = "none"

    for(var x of inputs){
        x.value = ""
    }

})
