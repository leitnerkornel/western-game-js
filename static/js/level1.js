console.log("Hello, this is a test, if you see JS works.");

function setBackground() {
    let background = document.createElement("img");
    background.src = '/static/images/level1.jpg';
    background.classList.add("background");
    document.querySelector('body').appendChild(background)
}

function addCharacter(file_name, point) {
    let character = document.createElement("img");
    character.src = `/static/images/${file_name}.png`;
    character.classList.add(`${file_name}`);
    character.addEventListener('click', countPoints);
    character.addEventListener('click', deleteAfterShoot);
    document.querySelector('body').appendChild(character);
}

function countPoints() {
    let currentCharacter = this.src.split("/").pop().split(".")[0];
    let points = getPoints('points');
    let bandits = ["bandit01", "bandit02", "bandit03", "bandit04"];
    if (bandits.includes(currentCharacter)) {
        points += 1000;
        setPoints('points', points);
    } else {
        points -= 2000;
        setPoints('points', points);
    }
    showPoints(points);
    winCheck(points, 20000);
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
    showCharacter('bandit02', 3000, `${gameLength}`);
    showCharacter('bandit03', 5000, `${gameLength}`);
    showCharacter('bandit04', 7000, `${gameLength}`);
    showCharacter('citizen01', 4000, `${gameLength}`);
    showCharacter('citizen02', 5000, `${gameLength}`);
    showCharacter('citizen03', 9000, `${gameLength}`);
}

function setPoints(json_name, point) {
    return localStorage.setItem(json_name, JSON.stringify(point));
}

function getPoints(json_name) {
    return JSON.parse((localStorage.getItem(json_name)));
}

function showPoints(points) {
    let currentPoints = document.getElementById('points');
    currentPoints.innerText = `Points: ${points}`;
}

function winCheck(points, nextLevelPoints) {
    if (points > `${nextLevelPoints}`) {
        alert("You won. Reached level 2.")
        window.location.href = "http://127.0.0.1:5000/level2"
    }
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
    setPoints('points', 0);
    const gameLength = 60000;
    setBackground();
    addEnemies(gameLength);
    addSoundIcon();
}

main();
