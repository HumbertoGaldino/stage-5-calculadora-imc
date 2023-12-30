import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notNumber } from './utils'

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

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

    if(weightOrHeightIsNotANumber){
        AlertError.open();
        return;
    }

    AlertError.close();

    let result = calculateIMC(weight, height);

    displayResultMessage(result);

    
};

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}!`;

    Modal.message.innerText = message;
    Modal.open();
}