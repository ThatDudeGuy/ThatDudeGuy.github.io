let toggleAnim = false;

const GAMES = [
    `<iframe src="https://i.simmer.io/@HairDude/al-game-jam" style="width:960px;height:600px"></iframe>`,
    `<iframe src="https://i.simmer.io/@HairDude/final-dig470" style="width:960px;height:600px"></iframe>`,
    ``,
    `<iframe src="https://i.simmer.io/@HairDude/duckaround" style="width:960px;height:600px"></iframe>`,
]

document.addEventListener("DOMContentLoaded", () => {
    let banner = document.getElementById('indicator');
    let options = document.getElementById("mainContainer")
    banner.addEventListener('click', () => {
        toggleAnim = !toggleAnim;

        if(toggleAnim){
            banner.style.animation = 'shiftUp 1s forwards';
            options.style.animation = "expand 0.7s forwards"
        }
        else{
            banner.style.animation = 'shiftDown 0.5s forwards';
            options.style.animation = "retract 0.5s forwards"
        }

        
        // Show and position hidden elements
        // document.querySelectorAll('.hiddenElements').forEach(function(element) {
        //     element.style.opacity = '1';
        //     element.style.bottom = '50%';
        // });
    });
})

// function PlayAnim(){
//     console.log("hello");
// }

// <div id="indicator">
//             <button id="bannerButton" onclick="PlayAnim()">Choose a game</button>
//         </div>