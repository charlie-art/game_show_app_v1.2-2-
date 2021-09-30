const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.querySelector('.btn__reset');

let missed = 0;

let phrases = [
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
    var splitPhrases = phrase[Math.floor(Math.random() * phrases.length)];
    var chosenPhrase = phrase.split("");

    return splitPhrase;
};
getRandomPhraseAsArray(phrase);


function addPhraseToDisplay() {


};


