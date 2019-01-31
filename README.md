# Word Guessing Game 🧠

# Welcome
In this project we are going to be creating a word-guessing game, similar to the hangman!
It was inspired by one of my favorite singers, Lana Del Rey.
The hidden words are some of her most popular songs.
## Overview
This game will assign the user a random word, in this case one of Lana's songs. The word or words will be displayed in empty underscores. The user is given 9 lives, meaning they can guess the letter incorrectly only 9 times! But don't worry! The game will also display the wrong letters you have previously used that way you can keep track of what wrong letters not to use again! If they guess the wrong letter they lose and a new random word is given to them.
This game uses JavaScript to keep track of all the letters used and when they are clicked.
This game will keep track of how many times a user WON or LOST the game!


Below is an example of the game functionality.

![alt text](wordguess.gif)

### Getting Started
You will need  your HTML file, your CSS file for styling depending how you want your game.
In this project we incorporate JavaScript to add functionality rather than having s static page.
With JS we are able to build an interaction with our user. 

Here is a code snippet of my game.js file where I have an event listener that will know when a letter in the keyboard is clicked:

``` 
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

```

### Built With
* HTML
* CSS
* JavaScript
* Boostrap
* [VSC](https) - Visual Studio Code, Editor
* [Github Pages](https) - Deployment

## Authors

* **Maira Jimenez** - *Initial work* - [Mairaaj14](https://github.com/Mairaaj14)


## Acknowledgments

* Jerome Chenette
* Sasha Patsel
* Jimmy Tu
