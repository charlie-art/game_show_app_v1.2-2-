const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.querySelector('.btn__reset');
const ul = document.getElementById('phraseList');


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

const randomPhrase = getRandomPhraseAsArray(phrases);

// To use the function, you’ll get the value returned by the
//getRandomPhraseAsArray, save it to a variable, and pass it to addPhraseToDisplay as an argument.


function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        // Create an a​ ddPhraseToDisplay​ function that loops through an array of characters.You will need to write it ​so that it can take ​any​ array of letters and add it to the display. 
        //create a li item

        const li = document.createElement("li");

        //Put the charater inside the list item.
        thislist.append(".textContent")


        //Append that list item to the #​ phrase u​ l in your HTML//
        ul.appendChild(li);

        //If the character in the array is a letter and not a space, the
        //function should add the class “​ letter”​ to the list item.If not, add
        //the ​“space”​ class.

        if (arr[i] === " ") {
            classList.add(" ");
        } else {
            classList.add("textcontent");
        }

        // To use the function, you’ll get the value returned by the
        //getRandomPhraseAsArray, save it to a variable, and pass it to addPhraseToDisplay as an argument.
    }
};
addPhraseToDisplay(phrases);







