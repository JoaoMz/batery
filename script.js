document.body.addEventListener('keyup', (event) => {
    console.log(event.code);//detecta qual tecla foi digitada no console
    playSound(event.code.toLowerCase());//toll lower case deixa os caracteres minusculo
})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div [data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime=0;
        audioElement.play();
    }

    if (keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}   