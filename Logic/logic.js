var params;

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
            alert('Success! Thank you for reaching out, I will be sure to get back to you soon.');
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
        formPage.style.left = "25%";
        formPage.style.width = "50%";
        formPage.style.height = "50vh";
        formPage.style.zIndex = "10";
    }
    else{
        formPage.style.display = "none";
    }

}

function CloseEmailForm(){
    window.parent.postMessage("closeIframe", "*");
}