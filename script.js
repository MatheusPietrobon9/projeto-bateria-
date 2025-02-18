// Identificar qual tecla eu cliquei

//EVENTOS 
document.body.addEventListener('keyup', (event) => {
    tocarSom(event.code.toLocaleLowerCase() );
});

document.querySelector('.composer button').addEventListener('click', () => {
    let criandoComposicao = document.querySelector('#input').value;

    if(criandoComposicao !== '') {
        let songArray = criandoComposicao.split('');  //Transforma a string em lista array.
        comecandoComposicao(songArray);
    }
});


// FUNÇÕES
function tocarSom(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
   
    if(audioElement) {
        audioElement.currentTime = 0; //Retira o delay de cada tecla
        audioElement.play()
    }

    if(keyElement) {
        keyElement.classList.add('active'); //Add a cor na tecla
        
        setTimeout(() => {
            keyElement.classList.remove('active'); //Remova a cor da tecla
        },300);
    }
}

// Função que recebe uma sequência de teclas e toca os sons um por um
function comecandoComposicao(songArray) {
    let wait = 0

    for(let songItem of songArray) {
        setTimeout(() => {
            tocarSom(`key${songItem}`);
        }, wait);

        wait += 250;   
    }
}