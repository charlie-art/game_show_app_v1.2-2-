
const overlay = document.getElementById("overlay");
const start = document.getElementsByClassName('start');
const btn__reset = document.querySelector("btn__reset");
const qwerty = document.getElementById('qwerty');




let phrases = [
    'Coding is fun',
    'JavaScript is lit',
    'Your doing great.',
    'Bull frogs and strange stuff',
    'Keep learning',
];


document.onload = ('click', () => {
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


let ul = document.querySelector('#phrase')[0];
function addPhraseToDisplay(arr) {
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li");
        li.appendChild('#phrase ul');
        if (arr[i] != "ul") {
            li.className = ".letter";

        } else {
            li.className = ".space";
            console.log(guessed);
        }
    }
};
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//Create an a​ ddPhraseToDisplay​ function that loops through an array of characters. You will need to write it ​so that it can take ​any​ array of letters and add it to the display.
//❏ Inside the loop, for each character in the array,
// Create a list l​ i​ i​tem
//Put the character inside of the list item
// Append that list item to the #​ phrase u​l in your HTML
// If the character in the array is a letter and not a space, the
// function should add the class “​ letter”​ to the list item.If not, add
//the ​“space”​ class.
// To use the function, you’ll get the value returned by the
//getRandomPhraseAsArray, save it to a variable, and pass it to addPhraseToDisplay as an argument.




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

//qwerty.addEventListener('click', () => {
    //let letterFound = checkLetter(event);

   // if (event.target.tagName === "BUTTON") {
     //   event.target.classList = "chosen";
      //  event.target.disabled = "true";
       // if (letterFound === false && missed < 5) {
         //   heart[missed].setAttribute('src', 'images/liveHeart.png')
         //   missed++;
         //   checkwin();
       // }

   // };

    //function checkWin() {
      //  if (letters.length === lettersShown.length) {
         //   reset = true;
          //  overlay.style.display = "";
           // overlay.className = "win";
           // title.innerHTML = "<h1>You win!</h1>"
           // startButton.textContent = "Start Again!";
           // svg.style.display = "none";
       // }
       // else if (missed === 5) {
       //     overlay.style.display = "";
       //     overlay.className = "lose";
        //    title.innerHTML = "<h1>GAME OVER!</h1>";
        //    startButton.textContent = "Start Again!";
         //   svg.style.display = "none";
         //   reset = true;

       // }
   // }

   // qwerty.addEventListner('click'), (event) => {
      //  let letterFound = checkLetter(event);

      //  if (event.target.tagName === "BUTTON") {
       //     event.target.classList = "chosen";
        //    event.target.disabled = "true";
         //   if (letterFound === false && missed < 5) {
         //       heart[missed].setAttribute('src', 'images/lostHeart.png');
         //       checkWin();
          //  }
      //  }
   // }
//});





