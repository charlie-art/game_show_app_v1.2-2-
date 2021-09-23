const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.querySelector('.btn__reset');
let missed = 0;

let phrase = [
    "Coding Rules",
    "I love to code",
    "Fast Coding",
    "Javascript",
    "Sass",

];

btn__reset.addEventListener('click', e => {
    document.getElementById("overlay").style.display = "none";
});

function getRandomPhraseAsArray(arr) {
    // this is for random phrases to be selected.
    var chosenPhrase = phrase[Math.floor(Math.random() * phrase.length)];
    var splitPhrase = phrase.split(phrase);

    return splitPhrase;
};
getRandomPhraseAsArray(phrase);



