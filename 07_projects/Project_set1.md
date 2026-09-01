# Project Related to DOM
Projects' Link : [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
## Project 1 Solution
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
