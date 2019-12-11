console.log("Hello, this is a test, if you see JS works.")

function setBackground() {
    let background = document.createElement("img")
    background.src = '/static/images/level_1_streetview.jpg'
    background.classList.add("first-level-bg")
    document.querySelector('body').appendChild(background)
}

function addCharacter(file_name) {

    let bandit = document.createElement("img")
    bandit.src = `/static/images/${file_name}.png`
    bandit.classList.add(`${file_name}`)
    bandit.addEventListener('click', deleteAfterShoot)
    document.querySelector('body').appendChild(bandit)
}


function deleteAfterShoot(event) {
    console.log(event);
    event.preventDefault();
    ;
}


setBackground()
addCharacter("bandit01")
addCharacter("bandit02")
addCharacter("bandit03")
addCharacter("bandit04")
addCharacter("citizen01")
addCharacter("citizen02")
addCharacter("citizen03")