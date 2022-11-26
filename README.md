# Game name
Guess the number
<!-- When you finish, add a nice screenshot of your game -->
<!--[<img src="./img/page.png">]()-->

## Description

Guess the number is a logic game where you have to guess (surprise) the random generated 4 digit number by the computer. Every guess will have clues that will bring you closer to the answer.

If the player doesn't guess the number under 10 turns will automatically lose.

## User stories MVP

Minimum user stories:

- User can send numbers to be compared with the randomly generated number.
- User can see the number of trys.

## User stories Backlog

- User can see it's score based on the time that has run since the start of the game and the number of trys made. The higher the numbers, the worse.
- User can also play with words.
- User has a "notepad" where it can write down notes

## File structure

- <code>game.js</code>: contains all the elements for the game to work. Methods: -start: when the user clicks it the game starts and changes screen
-restart: all the values and trys are reset and a new random number
-Compare: the user input is compared to the randomly generated number
-generate random number: the game creates a hidden random 4 digit number 
-Send try: sends the number to be compared
-Show number of trys: displays the amount of trys done by the player
-Show try result: displays how the input matches the randomly generated number

- <code>scripts.js</code>: contains all the DOM manipulation code to start the game

## Useful links

<!-- When you finish, add these links and commit -->

- [Presentation slides]()
- [Deployed game]()
