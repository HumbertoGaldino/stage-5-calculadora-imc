import { Modal } from './modal.js';

// Variáveis
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");


// Eventos
form.onsubmit = handleSubmit;

// Funções
function handleSubmit(event) {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const showAlertError = notNumber(weight) || notNumber(height);

    if(showAlertError){
        console.log('mostrar alerta de erro');
        return;
    }

    let result = IMC(weight, height);

    Modal.message.innerText = `Seu IMC é de ${result}!`;

    Modal.open();
};

function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

function notNumber(value) {
    return isNaN(value) || value == "";
}
