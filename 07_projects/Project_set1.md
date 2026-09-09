# Project Related to DOM
Projects' Link to Practice : [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
## Project 1 - Background Color Selector Solution
```javascript
const button = document.querySelectorAll('.button'); 
const body = document.querySelector('body'); 

button.forEach( function(button) {
  console.log(button)
  document.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target); 
    if(e.target.id === 'grey') {
      document.body.style.backgroundColor = e.target.id; 
    }
    else if(e.target.id === 'white') {
      document.body.style.backgroundColor = 'white'; 
    }
    else if(e.target.id === 'blue') {
      document.body.style.backgroundColor = 'blue'; 
    }
    else if(e.target.id === 'yellow') {
      document.body.style.backgroundColor = 'yellow'; 
    }
    else if(e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  })    
} )
```

## Project 2 - BMI Calculator Solution
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmi = (weight / ((height * height) / 10000));
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    if(bmi < 18.6) {
        results.innerHTML = `The BMI calculated is ${bmi.toFixed(2)}, Under Weight`
    }
    else if(bmi >= 18.6 && bmi < 24.9) {
        results.innerHTML = `The BMI calculated is ${bmi.toFixed(2)}, Normal Weight`
    }
    else {
        results.innerHTML = `The BMI calculated is ${bmi.toFixed(2)},OverWeight`
    }
  }
}); 
```
**Notes**<br>
1. A form is used here, which have some different properties. Therefore we have to select the form first also because the event will not be click but submit. 
2. We will also have to prevent the browser from performing it's default action. Submitting the form reloads the page or directs to a different URL, which clears the JavaScript state. 
3. Selection of the attributes (height and weight) must be done after the form has been selected in this use case. If we put them before we have selected the form they will take empty values, which we don't want here. 
4. To check if the number is NaN, there is an old method, which says 

    ```javascript
    if(height === NaN) 
    ```
    And there is a new, better and recommeded method,

    ```javascript
    if(isNaN(height)) // return true/false
    ```
    Both serve the same purpose here. 
5. toFixed(2) is going to return a string.

## Project 3 - Digital Clock Solution

```javascript
const clock = document.getElementById('clock'); 
clock.style.fontSize = '18px';

setInterval(function(){
    const date = new Date(); 
    console.log(date.toLocaleTimeString())
}, 1000) 
setInterval(function(){
    const date = new Date(); 
    clock.innerHTML = `Time : ${date.toLocaleTimeString()}`
}, 1000) 
```
**Notes**<br>
1. Everytime we refresh the page or save, we get the latest time on console with the help of, 

    ```javascript
    console.log(date.toLocaleTimeString()); 
    ```
    but we want the method to run repeatedly after a certain interval and that's why we use 
    ```javascript
    setInterval(function(){}, 1000)
    ```
    Here the first parameter is the function/method which is to be repeated, and second parameter is the time in ms. 

## Project 4 - Guess the Random Number Solution 
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const results = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  // This validated the input
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess <= 0) {
    alert('The number should be greater than 0');
  } else if (guess > 100) {
    alert('The number should be less than or equal to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      display(`Game Over, random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // This is will check if the guess is true
  if (guess === randomNumber) {
    display(`You guessed it right !!`);
    endGame();
  } else if (guess < randomNumber) {
    display(`Number is TOO small`);
  } else if (guess > randomNumber) {
    display(`Number is TOO large`);
  }
}

function display(message) {
  // this function will directly interact with DOM
  lowHigh.innerHTML = `<h2>${message} </h2>`; 
}

function displayGuess(guess) {
  // this is kind of a cleanup function because here we are going to reset the userInput value so they can input again
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess ++
  if(11 - numGuess <= -1) alert("You have exhausted your number of attempts")
  else remaining.innerHTML = `${11 - numGuess}`
}

function endGame() {
  // User cannot play forever we have to end the game
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`
  results.appendChild(p);
  playGame = false; 

  newGame();
}

function newGame() {
  // starting a new game by resetting all the variables
  const newGame = document.querySelector('#newGame'); 
  newGame.addEventListener('click', function(){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []; 
    numGuess = 1; 
    remaining.innerHTML = `${11 - numGuess}`
    guessSlot.innerHTML = ''
    userInput.removeAttribute('disabled');
    results.removeChild(p); 
    lowHigh.innerHTML = ''
    playGame = true; 
  })
}
```