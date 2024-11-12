let games;
let gameIframes = [
    `<iframe src="https://i.simmer.io/@HairDude/duckaround" style="width:960px;height:600px"></iframe>`,
    `<iframe src="https://i.simmer.io/@HairDude/final-dig470" style="width:960px;height:600px"></iframe>`
];

document.addEventListener("DOMContentLoaded", () => {
    games = document.getElementsByClassName("playButton");
    
    for(var i=0;i<games.length;i++){
        games[i].addEventListener("click", (event) => loadGame(event.currentTarget));
    }
});

function loadGame(element){
    element.innerHTML = gameIframes[1];
}



