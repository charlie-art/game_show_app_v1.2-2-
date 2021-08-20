
const overlay = document.getElementById('#overlay');
const start = document.getElementsByClassName('.start');
const btn__reset = document.querySelector('.btn__reset');
const qwerty = document.getElementById('#qwerty');
let ol = document.querySelectorAll('ol');




let phrases = [
    'Coding is fun',
    'JavaScript is lit',
    'Your doing great.',
    'Bull frogs and strange stuff',
    'Keep learning',
];


btn__reset.addEventListener('click', () => {
    overlay.style.display = "none";
    if (reset === true && missed === 5) {
        resetGame();
    } else if (reset === true && missed != 5) {
        resetGame();
    }
});


function getRandomPhraseAsArray(arr) {
    let randomString = arr[Math.floor(Math.random() * arr.length)];
    let splitString = randomString.split("");
    return splitString;
}



function addPhraseToDisplay(arr) {
    for (var i = 0; i < arr.length; i++) {
        let ol = document.getElementsByName('ol')[0];
        ol.textContent = arr[i];
        ol.appendChild(li);
        if (arr[i] != "") {
            ol.className = "letter";

        } else {
            ol.className = "space";
            return guessed;
        }
    }
};
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);





function checkLetter(btn) {
    let guessed = false;
    for (var i = 0; i < letters.length; i++) {
        if (btn.target.textContent === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add("show");
            guessed = true;
            return guessed;
        }
    }
};

qwerty.addEventListener('click', () => {
    let letterFound = checkLetter(event);

    if (event.target.tagName === "BUTTON") {
        event.target.classList = "chosen";
        event.target.disabled = "true";
        if (letterFound === false && missed < 5) {
            heart[missed].setAttribute('src', 'images/liveHeart.png')
            missed++;
            checkwin();
        }

    };

    function checkWin() {
        if (letters.length === lettersShown.length) {
            reset = true;
            overlay.style.display = "";
            overlay.className = "win";
            title.innerHTML = "<h1>You win!</h1>"
            startButton.textContent = "Start Again!";
            svg.style.display = "none";
        }
        else if (missed === 5) {
            overlay.style.display = "";
            overlay.className = "lose";
            title.innerHTML = "<h1>GAME OVER!</h1>";
            startButton.textContent = "Start Again!";
            svg.style.display = "none";
            reset = true;

        }
    }

    qwerty.addEventListner('click'), (event) => {
        let letterFound = checkLetter(event);

        if (event.target.tagName === "BUTTON") {
            event.target.classList = "chosen";
            event.target.disabled = "true";
            if (letterFound === false && missed < 5) {
                heart[missed].setAttribute('src', 'images/lostHeart.png');
                checkWin();
            }
        }
    }
});





