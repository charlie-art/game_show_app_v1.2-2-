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
    const randomNumber = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[randomNumber];
    const splitPhrase = randomPhrase.split('');
    console.log(splitPhrase);

    return splitPhrase;

};

getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(addPhraseToDisplay) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];


        let li = document.create.createElement('li')

        li.appendChild(ul);

    }
};

function checkLetter(.start) {
    pass in message
    print in Message


}


