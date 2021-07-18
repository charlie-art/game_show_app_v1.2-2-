const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', (event) => {
    const startOverlay = event.target.parentNode,
        oldLetters = document.qurerySelector('letter')
    if (startOverlay.className === 'start' || startOverlay.className === 'win' || startOverlay.className === 'lose') {
        restart();
        startOverlay.style.display = 'none';
    }

});