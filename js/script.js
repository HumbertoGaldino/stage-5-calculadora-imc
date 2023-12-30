import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { IMC, notNumber } from './utils'

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
        AlertError.open();
        return;
    }

    AlertError.close();

    let result = IMC(weight, height);

    Modal.message.innerText = `Seu IMC é de ${result}!`;

    Modal.open();
};