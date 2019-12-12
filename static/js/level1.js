console.log("Hello, this is a test, if you see JS works.");

function setBackground() {
    let background = document.createElement("img");
    background.src = '/static/images/level1.jpg';
    background.classList.add("background");
    document.querySelector('body').appendChild(background)
}

function addCharacter(file_name) {

    let bandit = document.createElement("img");
    bandit.src = `/static/images/${file_name}.png`;
    bandit.classList.add(`${file_name}`);
    bandit.addEventListener('click', deleteAfterShoot);
    document.querySelector('body').appendChild(bandit);
}


function deleteAfterShoot(event) {
    console.log(event);
    event.preventDefault();
    event.toElement.remove();
}

function showCharacter(fileName, showTime, gameLength) {
    let startTime = new Date().getTime();
    let interval = setInterval(function () {
        if (new Date().getTime() - startTime > `${gameLength}`) {
            clearInterval(interval);
            return;
        }
        addCharacter(`${fileName}`)
    }, `${showTime}`);
}

function addEnemies(gameLength) {
    showCharacter('bandit01', 2000, `${gameLength}`);
    showCharacter('bandit02', 2000, `${gameLength}`);
    showCharacter('bandit03', 2000, `${gameLength}`);
    showCharacter('bandit04', 2000, `${gameLength}`);
    showCharacter('citizen01', 2000, `${gameLength}`);
    showCharacter('citizen02', 2000, `${gameLength}`);
    showCharacter('citizen03', 2000, `${gameLength}`);
}

function addSoundIcon() {

    let soundicon = document.createElement("img");
    soundicon.src = `/static/images/sound.png`;
    soundicon.classList.add(`sound-icon`);
    document.querySelector('.div-for-sound').appendChild(soundicon);
    soundicon.addEventListener('click', changeSoundOnOff);
}

function changeSoundOnOff(event) {
    let audio = document.querySelector(".bg-sound");
    console.log(event);
    event.preventDefault();
    console.log(this.src.split("/").pop().split(".")[0]);
    if (this.src.split("/").pop().split(".")[0] === "sound"){
        this.setAttribute("src", "/static/images/nosound.png");
        audio.pause();
    }
    else {
        this.setAttribute("src", "/static/images/sound.png");
        audio.play();
    }
}

function main() {
    const gameLength = 10000;
    setBackground();
    addEnemies(gameLength);
    addSoundIcon();
}

main();