const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', (event) => {
    const startOverlay = event.target.parentNode;
    if (startOverlay.className === 'start' || startOverlay.className === 'win' || startOverlay.className === 'lose') {

        startOverlay.style.display = 'none';
    }
});



const phrases = [
    'Coding is fun',
    'JavaScript is lit',
    'Your doing great.',
    'Bull frogs and strange stuff',
    'Keep learning',
];


function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[randomNumber];
    const splitPhrase = randomePhrase.split('');
    return splitPhase
};

getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
    for (let arr in phrases) {
        console.log('${arr}: ${phrase[arr]}');
    }
};


addPhrasetoDisplay(phraseArray);


//const checkLetter = (letter) => {
//let letters = document.querySelectorAll('.letter')
//matchedLetterCount = 0;
//letters.forEach(item => {
// let currentLetter = item.innerHTML.toLowercase();
// if (currentLetter === letter) {
//    item.className += 'show';
//     matchedLetterCount += 1;
// }
// });
// if (matchedLetterCount === 0) {
//    letterFound = null;
//    matchedLetterCount = 0;
//  } else if (matchedLetterCount > 0) {
//     letterFound = letter;
//     matchedLetterCount = 0;
// }
//};

//qwerty.addEventListener('click', (event) => {
// if (event.target.tagName === "BUTTON") {
//  let button,
//  letterFound = 'missed',
// tries = document.querySelectorAll('.tries');

// }
//});

//const checkLetter = (letter) => {
//let letters = document.querySelectorAll('.letter'),
// matchedletterCount = 0;
// letters.forEach(item => {
// let currentLetter = item.innerHTML.toLowerCase();
//if (currentLetter === letter) {
   // item.className += ' show ';
   // matchedLetterCount += 1;

//}
    //});
//if (matchedletterCount === 0) {
   // letterFound = null;
   // matchedLetterCount = 0;
//} else if (matchedLetterCount > 0) {
  //  letterFound = letter;
  //  matchedLetterCount = 0;
//}
//}

//checkWin = () => {
    //const revealledLetters = document.querySelectorAll('show'),
      //  lettersInPhase = document.querySelectorAll('.letter');
   // let startOverlay = document.querySelector('#overlay');
   // overlayTitle = document.querySelector('.title');

   // if (revealledLetters.length === lettersInPhase.length) {
      //  startOverlay.style.display = 'flex';
      //  startOverlay.className = 'win';
       // overlayTitle.textContent = 'You win';
   // }
   // else if (missed === 5) {
      //  startOverlay.style.display = 'flex';
      //  startOverlay.className = 'lose';
      //  overLayTitle.textContent = 'You Lose!';

    //}
//};





