console.log("Hello, this is a test, if you see JS works.")

function setBackground() {
    let background = document.createElement("img")
    background.src = '/static/images/level_1_streetview.jpg'
    background.classList.add("first-level-bg")
    document.querySelector('body').appendChild(background)
}

setBackground()