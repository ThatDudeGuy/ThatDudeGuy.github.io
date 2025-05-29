// Elements
let mainContainer;
let gameIcons;
// let mainScreen;
let animTest;


var clicked;
var count = 0;
const LIMIT = 2;

const ITEMS = new Map(); 
let intervalId;

// Simmer.io is down indefinitely, swapped over to itch.io
const GAMES = [
    // `<iframe src="https://i.simmer.io/@HairDude/al-game-jam" style="width:960px;height:600px"></iframe>`,
    // `<iframe src="https://itch.io/embed/3493948" style="width:960px;height:600px"></iframe>`,
    // `<iframe src="https://dudewiththehair.itch.io/duckaround" style="width:960px;height:600px"></iframe>`,
    // `<iframe src="https://i.simmer.io/@HairDude/underground-rogue" style="width:960px;height:600px"></iframe>`,
    "",
    "https://dudewiththehair.itch.io/1st-2D-Platformer",
    "https://dudewiththehair.itch.io/duckaround",
    "https://dudewiththehair.itch.io/underground-rogue"
];

document.addEventListener("DOMContentLoaded", () => {
    SetListeners();
    // intervalId = setInterval(SendEmail, 60000);
})

window.addEventListener('beforeunload', (event) => {
    clearInterval(intervalId);
});

// function SendEmail(){
//     if(count >= LIMIT) return;

//     count += 1;
//     var Message = "";

//     ITEMS.forEach((value, key) => {
//         Message += `\t${key}: ${value},\n`;
//     });

//     params = {
//         name : "Automatic",
//         message : `{\n${Message}}\nTime Elapsed: ${count} minute(s)`,
//         subject : "Data",
//     }
//     const serviceID = "service_sfxqr8b";
//     const templateID = "template_gdbqtwo";
//     emailjs.send(serviceID, templateID, params).then(
//         (response) => {
//             console.log('SUCCESS!');
//         },
//         (error) => {
//             console.log('FAILED...', error);
//     },
// )};

function SetListeners(){
    mainContainer = document.getElementById("mainContainer");
    // mainScreen = document.getElementById("mainScreen");
    gameIcons = document.getElementsByClassName("gameImage");
    textHolders = document.getElementsByClassName("textHolder");
    // mainScreen.style.width = Math.round(screen.width/2);
    // mainScreen.style.height = Math.round(screen.height * 0.555555);

    for (let i = 0; i < textHolders.length; i++) {
        textHolders[i].addEventListener("click", () => {
            clicked = textHolders[i].getAttribute("data-clicked");

            if(clicked === "false"){
                textHolders[i].setAttribute("data-clicked", "true");
                textHolders[i].style.animation = "growWidth 0.75s forwards";
                textHolders[i].querySelector(".info").style.animation = "growHeight 0.75s forwards";
            }
            else{
                textHolders[i].setAttribute("data-clicked", "false");
                textHolders[i].style.animation = "shrinkWidth 0.75s forwards";
                textHolders[i].querySelector(".info").style.animation = "shrinkHeight 0.75s forwards";
            }
        });
    }

    for (let i = 0; i < gameIcons.length; i++) {
        gameIcons[i].addEventListener("click", (event) => {
            // document.querySelector("body").style.backgroundImage = "url(../Images/GameImages/unityBackground.png)";
            var gameIndex = parseInt(event.target.src[event.target.src.length - 5] - 1);
            window.open(GAMES[gameIndex]);
            // mainScreen.innerHTML = GAMES[gameIndex - 1];
            // mainContainer.style.display = "none"
        });
    }

}

// function CloseGame(){
//     document.querySelector("body").style.backgroundImage = "url(../Images/GameImages/gameBackground.jpg)";
//     mainContainer.style.display = "block";
    // mainScreen.innerHTML = "<p> Game Closed </p>";
// }

// window.addEventListener("resize", ()=>{
//     mainScreen.style.width = Math.round(window.innerWidth/2);
//     mainScreen.style.height = Math.round(window.innerHeight * 0.555555);
// });

document.addEventListener("click", (item) => {
    console.log(item.target.id);
    if(ITEMS.has(item.target.id)){
        ITEMS.set(item.target.id, ITEMS.get(item.target.id) + 1)
    }
    else{
        if(item.target.id != "") ITEMS.set(item.target.id, 1);
    }
});
