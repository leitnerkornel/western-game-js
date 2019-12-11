console.log("Hello, this is a test, if you see JS works.")

function setBackground() {
    let background = document.createElement("img")
    background.src = '/static/images/level_1_streetview.jpg'
    background.classList.add("first-level-bg")
    document.querySelector('body').appendChild(background)
}

function addBandit() {

    /*let div = document.createElement("div")
    div.classList.add("bandit-div")
    document.querySelector('body').appendChild(div)*/
    let bandit = document.createElement("img")
    bandit.src = '/static/images/bandit04.png'
    bandit.classList.add("bandit")
    document.querySelector('body').appendChild(bandit)
}


setBackground()
addBandit()
