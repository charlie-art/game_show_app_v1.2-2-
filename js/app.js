const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrases');
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

function getRandomPhrasesAsArray(phrases) {
    // this is for random phrases to be selected.
    var phrases = phrases[Math.floor(Math.random() * phrases.length)];

    return phrases;
};
getRandomPhrasesAsArray(phrases);



