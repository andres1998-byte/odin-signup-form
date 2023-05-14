const passInput=document.querySelector("#password");
const confPassInput=document.querySelector("#confpassword");
const message=document.querySelector("#message");

confPassInput.addEventListener("keyup", function (){
    if (passInput.value===confPassInput.value) {
        message.innerHTML="";
    }
    else {
        message.innerHTML="Passwords do not match!";

    }
})