let toggleAnim = false;
let gamePlaying = false;

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
    let banner = document.getElementById('indicator');
    let bannerButton = document.getElementById('bannerButton');
    let mainContainer = document.getElementById("mainContainer");
    let gameIcons = document.getElementsByClassName("gameImage");
    let mainScreen = document.getElementById("mainScreen");

    bannerButton.addEventListener('click', () => PlayAnim(banner, mainContainer));

    for (let i = 0; i < gameIcons.length; i++) {
        gameIcons[i].addEventListener("click", (event) => {
            var gameIndex = parseInt(event.target.src[event.target.src.length - 5])
            console.log(gameIndex);
            mainScreen.innerHTML = GAMES[gameIndex - 1];
            banner.style.display = "none"
            gamePlaying = true;
        });
    }
}

function PlayAnim(banner, mainContainer){
    if(gamePlaying){ 
        banner.style.display = "none";
        return;   
    }

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
    
    let mainScreen = document.getElementById("mainScreen");

    gamePlaying = false;
    mainScreen.innerHTML = `<p>Select a game below and play it here!</p>`;
}

function NewGame(){
    if(!gamePlaying) return;

    let banner = document.getElementById('indicator');
    
    toggleAnim = true;
    banner.style.display = "block"
}