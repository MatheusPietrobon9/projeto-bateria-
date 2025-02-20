// EVENTOS

document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase()) //Identifica a tecla pressionada, e transforma ela em minusculas
});


document.querySelectorAll('.key').forEach((key) => {
    key.addEventListener('click', () => {
        let keyCode = key.getAttribute('data-key'); // Pega o valor do atributo data-key
        playSound(keyCode); // Toca o som da tecla clicada
    });
});


document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    
    if(song !== '') {
        let songArray = song.split(''); //Transforma string em array
        playComposition(songArray);
    }
})

// FUNÇÕES

function playSound(sound) {
    let elementoDoAudio = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); // Seleciona um elemento <div> no HTML que tenha um atributo data-key igual ao valor da variável sound

    if(elementoDoAudio) {
        elementoDoAudio.currentTime = 0; //Se tem um som sendo tocado reinicia o som para 0
        elementoDoAudio.play(); //reproduz um audio quando é chamado
    }

    if(keyElement) {
        keyElement.classList.add('active'); //adiciona classe CSS "active" ao elemento KeyElement
        

        setTimeout(() => {
            keyElement.classList.remove('active'); //a cada 300 milesegundos o efeito da classe do css é retirado 
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;
    
    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait); 
       
        wait += 250;
        //aumenta 250 milesegundos a cada tecla que é tocada
    }
}