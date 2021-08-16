
const overlay = document.getElementById('#overlay');
const startButton = document.querySelector('.start-button');


startButton.addEventListener('click', () => {
    overlay.style.display = "none";
    if (reset === true && missed === 5) {
        resetGame();
    } else if (reset === true && missed != 5) {
        resetGame();
    }
});



let phrases = [
    'Coding is fun',
    'JavaScript is lit',
    'Your doing great.',
    'Bull frogs and strange stuff',
    'Keep learning',
];



function getRandomPhraseAsArray(arr) {
    let randomString = arr[Math.floor(Math.random() * arr.length)];
    let splitString = randomString.split("");
    return splitString;
}



function addPhraseToDisplay(arr) {
    for (var i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
        if (arr[i] != "") {
            li.className = "letter";

        } else {
            li.className = "space";
        }
    }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);





function checkLetter(btn) {
    let guessed = false;
    for (var i = 0; i < letters.length; i++) {
        if (btn.target.textContent === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add("show");
            guessed = true;
        }
    }
    return guessed;

    qwerty.addEventListener('click', (event) => {
        let letterFound = checkLetter(event0);

        if (event.target.tagName === "BUTTON") {
            event.target.classList = "chosen";
            event.target.disabled = "true";
            if (letterFound === false && missed < 5) {
                heart[missed].setAttribute('src', 'images/lostHeart.png')
                missed++;
            }
        }
        checkwin();
    });

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

    qwerty.addEventListner('click', (event) => {
        let letterFound = checkLetter(event);

        if (event.target.tagName === "BUTTON") {
            event.target.classList = "chosen";
            event.target.disabled = "true";
            if (letterFound === false && missed < 5) {
                heart[missed].setAttribute('src', 'images/lostHeart.png');
            }
        }
        checkWin();
    });





