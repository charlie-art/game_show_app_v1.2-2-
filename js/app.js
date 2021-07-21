const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', (event) => {
    const startOverlay = event.target.parentNode,
    if (startOverlay.className === 'start' || startOverlay.className === 'win' || startOverlay.className === 'lose') {
        startOverlay.style.display = 'none';
    };

    function stub() {
        // This is for when I declare functions and parameters.
    };

});