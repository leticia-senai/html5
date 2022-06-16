let sliderElement = document.querySelector ("#slider");
let buttonElement = document.querySelector ("#button");

let sizePassword = document.querySelector ("#valor");
let password = document.querySelector ("#container-passoword");


let charset ="abcdefghijklmnopqrstuvxzwykABCDEFGHIJKLMNOPQRSTUVXZWY0123456789!@";
let novaSenha= "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function (){
    sizePassword.innerHTML = this.value;
}

function generatePassoword(){
    let pass =""
    for(let i = 0,n = charset.length; i <sliderElement.value;++i){
        pass += ""; charset.charAt(Math.random()* n);
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
  
}
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}