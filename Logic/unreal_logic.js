let pMove = [
    "../Images/Unreal/playerMovement.png",
    "../Images/Unreal/playerSetup.png",
];
let camMove = [
    "../Images/Unreal/cameraMovement.png",
];
let spell = [
    "../Images/Unreal/firespellLogic.png"
];
let target = [
    "../Images/Unreal/targetBound.png",
    "../Images/Unreal/targetMove.png",
];
let anim = [
    "../Images/Unreal/animationLogic.png",
    "../Images/Unreal/animationWalkPoses.png",
];

let links = [];
let images = [];
let backButton, zoomImage, feedback;
var zoom = false;

document.addEventListener("DOMContentLoaded", SetListeners);
// document.addEventListener("click", () => {
//     if(zoom) ToggleZoom("");
// });

function SetListeners(){
    links = document.getElementsByClassName("links");
    backButton = document.getElementById("backButton");
    zoomImage = document.getElementById("zoomImage");
    feedback = document.getElementById("feedback");

    feedback.addEventListener("click", () => {alert("No feedback functionality at this time")});
    zoomImage.addEventListener("click", () => {ToggleZoom("")});
    backButton.addEventListener("click", DepopulateImages);
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", () => {
            SlotSelected(links[i]);
        })
    }
}

function SlotSelected(element){
    for (let i = 0; i < links.length; i++) {
        links[i].style.display = "none";
    }
    console.log(element);
    switch (element.getAttribute("data-slot")){
        case "1":
            PopulateImages(pMove);
            break;
        case "2":
            PopulateImages(camMove);
            break;
        case "3":
            PopulateImages(spell);
            break;
        case "4":
            PopulateImages(target);
            break;
        case "5":
            PopulateImages(anim);
            break;
        // case "6":
        //     PopulateImages(pMove);
        //     break;
    }
}

function PopulateImages(imageArray){
    const partTime = 2.5 / imageArray.length;
    var count = 0;
    let container = document.getElementById("blueprints");
    backButton.style.visibility = "visible";
    for (let i = 0; i < imageArray.length; i++) {
        const newImage = document.createElement("img");
        container.appendChild(newImage);
        newImage.src = imageArray[i];
        count += partTime;
        newImage.style.animation = `fadeIn ${count}s forwards`;
        newImage.addEventListener("click", (element) => {
            ToggleZoom(element.target.src)
        });
    }
    images = document.getElementsByTagName("img");
}

function DepopulateImages(){
    let container = document.getElementById("blueprints");
    for (let i = images.length - 1; i >= 0; i--) {
        if(images[i].parentElement === container)
            container.removeChild(images[i]);
    }
    images = [];
    backButton.style.visibility = "hidden";
    for (let i = 0; i < links.length; i++) {
        links[i].style.display = "inline-block";
    }
}

function ToggleZoom(sourceImage){
    zoom = !zoom;
    if(zoom){
        zoomImage.style.visibility = "visible";
        zoomImage.style.display = "inline-block";
        zoomImage.style.backgroundImage = `url(${sourceImage})`;
    }
    else {
        zoomImage.style.visibility = "hidden";
        zoomImage.style.display = "none";
        zoomImage.style.backgroundImage = "none";
    }
}