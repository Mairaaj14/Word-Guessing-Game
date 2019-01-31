# Word-Guess-Game

# Welcome
In this project we are going to be creating a word-guessing game, similar to the hangman!
It was inspired by one of my favorite singers, Lana Del Rey.
The hidden words are some of her most popular songs.
## Overview
This game will assign the user a random word, in this case one of Lana's songs. The word or words will be displayed in empty underscores. The user is given 9 lives, meaning they can guess the letter incorrectly only 9 times! If they guess the wrong letter they lose and a new random word is given to them.
This game uses JavaScript to keep track of all the letters used and when they are clicked.
This game will keep track of how many times a user WON or LOST the game!


Below is an example of the game functionality.

![alt text](wordguess.gif)

### Getting Started
You will need to create your HTML files, and in a separate folder create an `assets` folder where you will have two folders
`css and images` in your css folder that's where you want your CSS stylesheet `style.css`.
Your css file will be in charge of the front-end, you control and decide the styling of every part of your portfolio.
To make our portfolio responsive, the @media screen tags must be added in your CSS file.

Here is a code snippet of how my media screen tags and my styling looks like:

``` 
 @media screen and (max-width: 980px) {
    .container {
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      clear: both;
    }
    #masthead {
      position: fixed;
      z-index: 99;
      width: 100%;
      max-width: 960px;
      margin: 0 0 30px;
      overflow: auto;
      color: #ffffff;
      background: #ffffff;
      border-bottom: 2px solid #cccccc;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 100%;
      max-width: 768px;
      margin: 0 auto;
      clear: both;
    }
    #masthead {
      position: fixed;
      z-index: 99;
      width: 100%;
      max-width: 768px;
      margin: 0 0 30px;
      overflow: auto;
      color: #ffffff;
      background: #ffffff;
      border-bottom: 2px solid #cccccc;
    }
  }

  @media screen and (max-width: 640px) {
    .container {
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
      clear: both;
    }
    #masthead {
      position: static;
      z-index: 99;
      width: 100%;
      max-width: 640px;
      margin: 0 0 30px;
      overflow: auto;
      color: #ffffff;
      background: #ffffff;
      border-bottom: 2px solid #cccccc;
    }
  }

```

### Built With
* HTML
* CSS
* [VSC](https) - Visual Studio Code, Editor
* [Github Pages](https) - Deployment

## Authors

* **Maira Jimenez** - *Initial work* - [Mairaaj14](https://github.com/Mairaaj14)


## Acknowledgments

* Jerome Chenette
* Sasha Patsel
* Jimmy Tu
