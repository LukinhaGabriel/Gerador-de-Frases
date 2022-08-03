//https://api.adviceslip.com/
//https://api.adviceslip.com/advice/{slip_id}

//Pegar a frase da api e mostrar na tela
//quando clicado no botão pegar uma frase aleatoria da api

const $id = document.querySelector('#indentificador');
const $phrase = document.querySelector('.phrase');
const url = `https://api.adviceslip.com/advice`;


const getPhrase = () => {
    fetch(url).then(response => {
        return response.json();
    }).then( data => { 
        $id.textContent = data.slip.id;
        $phrase.textContent = data.slip.advice;
    })
}

getPhrase();

const $btnWrapperIcon = document.querySelector('.btn-wrapper-icon').addEventListener('click', () =>{getPhrase()})