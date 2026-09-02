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