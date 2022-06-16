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

function generate