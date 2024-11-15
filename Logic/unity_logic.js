let toggleAnim = false;
let gamePlaying = false;

// Elements
let banner;
let bannerButton;
let mainContainer;
let gameIcons;
let mainScreen;

const GAMES = [
    `<iframe src="https://i.simmer.io/@HairDude/al-game-jam" style="width:960px;height:600px"></iframe>`,
    `<iframe src="https://i.simmer.io/@HairDude/final-dig470" style="width:960px;height:600px"></iframe>`,
    `<iframe src="https://i.simmer.io/@HairDude/duckaround" style="width:960px;height:600px"></iframe>`,
    ``,
]

document.addEventListener("DOMContentLoaded", () => {
    SetListeners();
})

function SetListeners(){
    banner = document.getElementById('indicator');
    bannerButton = document.getElementById('bannerButton');
    mainContainer = document.getElementById("mainContainer");
    mainScreen = document.getElementById("mainScreen");
    gameIcons = document.getElementsByClassName("gameImage");

    bannerButton.addEventListener('click', () => PlayAnim());

    for (let i = 0; i < gameIcons.length; i++) {
        gameIcons[i].addEventListener("click", (event) => {
            var gameIndex = parseInt(event.target.src[event.target.src.length - 5])
            mainScreen.innerHTML = GAMES[gameIndex - 1];
            banner.style.display = "none"
            gamePlaying = true;
        });
    }
}

function PlayAnim(){
    if(gamePlaying){ 
        banner.style.display = "none";
        return;   
    }

    mainContainer.style.display = "block";
    toggleAnim = !toggleAnim;

    if(toggleAnim){
        banner.style.animation = 'shiftUp 1s forwards';
        mainContainer.style.animation = "expand 0.7s forwards";
    }
    else{
        banner.style.animation = 'shiftDown 0.35s forwards';
        mainContainer.style.animation = "retract 0.6s forwards";
    }
}

function CloseGame(){
    if(!gamePlaying) return;

    toggleAnim = false;
    banner.style.display = "block";
    banner.style.animation = 'none';
    mainContainer.style.display = "none";
    gamePlaying = false;
    mainScreen.innerHTML = `<p>Select a game below and play it here!</p>`;
}

function NewGame(){
    if(!gamePlaying) return;
    
    toggleAnim = true;
    banner.style.display = "block"
}