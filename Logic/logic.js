var params;
const PIC_WID = 380, PIC_HEI = 500;
let scaleFactor = window.innerWidth / screen.width;


document.addEventListener("DOMContentLoaded", () => SetListeners());

function SetListeners(){
    let picture = document.getElementById("picture");
    // console.log(picture.clientTop);
    ResizeElement(picture.firstElementChild);

    let aboutMe = document.getElementById("aboutMe");
    aboutMe.style.width = `${Math.round(screen.width * 0.25)}px`;
    aboutMe.style.height = `${Math.round(screen.height * 0.6)}px`;

    let logo = document.getElementById("logo");
    
    let github = document.getElementById("github");
    let unity = document.getElementById("unity");
    let unreal = document.getElementById("unreal");
    let art_station = document.getElementById("art_station");
    let linkedin = document.getElementById("linkedin");
    let email = document.getElementById("email");
    let resume = document.getElementById("resume");

    github.addEventListener("click", () => {
        window.open("https://github.com/ThatDudeGuy");
    });
    unity.addEventListener("click", () => {
        if (!isMobileDevice()) window.location.href = "https://thatdudeguy.github.io/Branch_Html/unity.html";
        else alert("Unity Projects page cannot be viewed on a mobile device.\nPlease visit this page on a PC or Mac.\n\nThank you.");
    });
    unreal.addEventListener("click", () => {
        window.location.href = "https://thatdudeguy.github.io/Branch_Html/unreal.html";
    });
    art_station.addEventListener("click", () => {
        window.open("https://www.artstation.com/wilfredo_vazquez");
    });
    linkedin.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/wilfredo-vazquez-501378301/");
    });
    email.addEventListener("click", GetEmailForm);
    resume.addEventListener("click", () => {
        window.open("../Images/Links/resume.pdf");
    });
    
    if(isMobileDevice() && !window.location.href.includes("Mobile")) window.location.href = "https://thatdudeguy.github.io/Branch_Html/indexMobile.html";

    window.addEventListener("resize", ()=>{
        if(window.innerWidth < 512 || window.innerHeight < 600){
            logo.firstElementChild.style.width = `${192 / 2}px`;
            logo.firstElementChild.style.height = `${128 / 2}px`;
        }
        else{
            logo.firstElementChild.style.width = `192px`;
            logo.firstElementChild.style.height = `128px`;
        }
    });    
}

function SendEmail(){
    console.log(params);
    params = {
        name : document.getElementById("name").value,
        message : document.getElementById("message").value,
        subject : document.getElementById("subject").value,
        email : document.getElementById("email").value,
    }

    if(params.name == "" || params.message == ""
    || params.subject == "" || params.email == "")
    {
        alert("All fields need to be filled out before sending");
        return;
    }

    const serviceID = "service_sfxqr8b";
    const templateID = "template_gdbqtwo";

    emailjs.send(serviceID, templateID, params).then(
        (response) => {
            console.log('SUCCESS!');
            document.getElementById("name").value = "";
            document.getElementById("message").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("email").value = "";
            alert('Success! Thank you for reaching out and I will be sure to get back to you soon.');
            CloseEmailForm();
          },
          (error) => {
            console.log('FAILED...', error);
            alert('FAILED...\n\nCannot send email at this time :(\n\nIf you\'re on a stable internet connection, then this service might be running into issues.');
        },
    );
}

function GetEmailForm(){
    let formPage = document.getElementById("formPage");
    if(formPage.style.display == "none" || formPage.style.display == ""){
        formPage.style.display = "block";
        formPage.style.position = "absolute";
        formPage.style.zIndex = "10";
    }
    else{
        formPage.style.display = "none";
    }

}

function CloseEmailForm(){
    window.parent.postMessage("closeIframe", "*");
}

function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function ResizeElement(element)
{
    scaleFactor = window.innerWidth / screen.width;
    // console.log(window.innerWidth);
    // console.log(window.innerHeight * 2);

    if(window.innerWidth > window.innerHeight * 2){
        scaleFactor -= 0.07;
    }
    // console.log(scaleFactor);


    element.style.width = `${Math.round(PIC_WID * scaleFactor)}px`;
    element.style.height = `${Math.round(PIC_HEI * scaleFactor)}px`;

    // console.log(element.style.width);
    // console.log(element.style.height);
}

window.addEventListener("resize", () => {
    let picture = document.getElementById("picture");

    ResizeElement(picture.firstElementChild);
})