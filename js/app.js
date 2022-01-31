const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.querySelector('.btn__reset');
const phraseList = document.getElementById('phraseList');
const scoreBoard = document.getElementById('scoreboard');
const li = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');
const tryList = document.getElementById('scoreboard');

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
    const randomPhrase = arr[randomNumber].toLowerCase();
    const splitPhrase = randomPhrase.split('');
    console.log(splitPhrase);

    return splitPhrase;
};

let randomPhrase = getRandomPhraseAsArray(phrases);

// To use the function, you’ll get the value returned by the
//getRandomPhraseAsArray, save it to a variable, and pass it to addPhraseToDisplay as an argument.


function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        // Create an a​ ddPhraseToDisplay​ function that loops through an array of characters.You will need to write it ​so that it can take ​any​ array of letters and add it to the display.
        //create a li item
        const li = document.createElement("li");

        //Put the character inside the list item.
        li.textContent = arr[i];

        //Append that list item to the #​phrase u​l in your HTML
        phraseList.appendChild(li);

        //If the character in the array is a letter and not a space, the
        //function should add the class “​ letter”​ to the list item.If not, add
        //the ​“space”​ class.
        if (arr[i] === " ") {
            li.classList.add("space");
        } else {
            li.classList.add("letter");
        }


        // To use the function, you’ll get the value returned by the
        //getRandomPhraseAsArray, save it to a variable, and pass it to addPhraseToDisplay as an argument.
    }
};
addPhraseToDisplay(randomPhrase);

function checkLetter(button) {
    let liArr = document.querySelectorAll("li");
    let match = null;
    for (let index = 0; index < liArr.length; index++) {
        if (button.innerText === liArr[index].innerText) {
            liArr[index].classList.add("show");
            match = button.innerText;
        }
    }

    return match;
}

qwerty.addEventListener('click', (event) => {
    let button = event.target;

    // Use a conditional to filter out clicks that don’t happen on the buttons or if the button already has the “chosen” class
    if (button.tagName !== "BUTTON" || button.className === "chosen") {
        return;
    }

    // Add the “chosen” class to the button that was pressed.
    button.classList.add("chosen");

    // Call the checkLetter function and store the results in a variable.
    let result = checkLetter(event.target);

    // If the checkLetter function does not find a letter, remove one of the heart images and increment the missed counter
    console.log(result);
    if (result === "BUTTON" && tryList.length > 0) {
        ol.appendChild(li);
        lostHeart.removeChild(lostHeart.children[0]);
        missed++
    }

    // Checks if the user has won.
    checkWin()
})

function checkWin() {
    let letter = document.getElementsByClassName('letter');
    let show = document.getElementsByClassName('show');
    let startOverlay = document.getElementById('overlay');
    let startHeaderText = document.getElementsByClassName('title')[0];

    // Display if the user wins the game
    if (letter.length === show.length) {
        startOverlay.classList.add('win');
        startHeaderText.innerText = "You Won!";
        startOverlay.style.display = "flex";
    }

    // Display if the user loses the game
    if (missed > 0) {
        startOverlay.classList.add('lose');
        startHeaderText.innerText = "You Lost!";
        startOverlay.style.display = "flex";
    }
}












