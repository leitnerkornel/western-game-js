console.log("Hello, this is a test, if you see JS works.")

function setBackground() {
    let background = document.createElement("img")
    background.src = '/static/images/desert_menu.jpg'
    background.classList.add("index-bg")
    document.querySelector('body').appendChild(background)
}

setBackground()