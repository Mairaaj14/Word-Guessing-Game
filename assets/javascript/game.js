// Variables
	
var wins = 0;
var losses = 0;
var TopHits = ["young and beautiful", "ride", "love", "summertime sadness", "blue jeans", "national anthem", "born to die", "lust for life", "video games", "dark paradise", "lolita", "lucky ones", "bel air"]
var guesses = 7;
var displayWord = "";
var letterBank = [];
var currentWord = "";
var splitWord = [];
var drawWord = "";
var storedGuess = [];
var usedLetters = "";
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Functions

function chooseWord () {
    currentWord = TopHits[Math.floor(Math.random () * TopHits.length)];
    console.log(currentWord);
    guesses = 9;
    displayWord = "";
    letterBank = [];
    usedLetters = "";
    spacesWord();
}

function spacesWord () {
    // splits string of currentWord into an array consisting of each letter
    splitWord = currentWord.split("");
    console.log(splitWord);
    for (var i = 0; i < splitWord.length; i++) {
        splitWord[i] = "_ ";
        displayWord += splitWord[i];
    }
    console.log(displayWord);
}

// Running Code
chooseWord();
console.log(splitWord);

document.onkeyup = function (event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

if (currentWord.indexOf(userGuess) > -1) {
    // var test = [];
    storedGuess.push(userGuess);
    drawWord = "";
    for (var i = 0; i < currentWord.length; i++) {
        if (storedGuess.indexOf(currentWord[i]) > -1) {
            drawWord += currentWord[i];
        }
        else {
            drawWord += "_ ";
        }
        // test.push(currentWord[i]);
    }
    displayWord = drawWord;
    console.log(drawWord);
    // console.log(test);
    if (displayWord == currentWord) {
        wins++;
        chooseWord();
        storedGuess = [];
    }
}
else {
    if (letterChoices.indexOf(userGuess) < 0) {
        console.log(userGuess);
    }
    else if (letterBank.indexOf(userGuess) > -1) {
        console.log(userGuess);
    }
    else {
        guesses--;
        letterBank.push(userGuess);
        console.log(letterBank);
        usedLetters = letterBank.join(" ");
        console.log("Wrong Letter");
        if (guesses < 0) {
            losses++;
            guesses = 9;
            chooseWord();
        }
    }
}

  

var html = "<p>Pick a Letter!</p>" + 
    "<p>Wins: " + wins + "</p>" + 
    "<p>Losses: " + losses + "</p>" + 
    "<p> Current Word: " + "</p>" + 
    "<p>" + displayWord + "</p>" + 
    "<p>Guesses left: " + guesses + "</p>" + 
    "<p>Letters Used: </p>" + 
    "<p>" + usedLetters + "</p>";

document.querySelector("#game").innerHTML = html;
}

    