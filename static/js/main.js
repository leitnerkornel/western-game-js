console.log("Hello, this is a test, if you see JS works.");

function setBackground() {
    let background = document.createElement("img");
    background.src = '/static/images/desert_menu.jpg';
    background.classList.add("background");
    document.querySelector('body').appendChild(background)
}

function addSoundIcon() {

    let soundicon = document.createElement("img");
    soundicon.src = `/static/images/nosound.png`;
    soundicon.classList.add(`sound-icon`);
    document.querySelector('.div-for-sound').appendChild(soundicon);
    soundicon.addEventListener('click', changeSoundOnOff);
}

function changeSoundOnOff(event) {
    let audio = document.querySelector(".bg-sound");
    console.log(event);
    event.preventDefault();
    console.log(this.src.split("/").pop().split(".")[0]);
    if (this.src.split("/").pop().split(".")[0] === "nosound"){
        this.setAttribute("src", "/static/images/sound.png");
        audio.play();
    }
    else {
        this.setAttribute("src", "/static/images/nosound.png");
        audio.pause();
    }
}


function main() {
    setBackground();
    addSoundIcon();
}

main();