const user = {
    username: "Athak",
    price: 999,
    isLoggedIn: false,
    welcomeMessage: function () {
        // console.log(username) //username is not defined
        console.log(`${this.username}, welcome to the website`); // this keyword is used to reflect on the context. When we are talking about some random user, we don't generally use just 'username' we use 'this.username' which helps us define the context of what we are trying to print
        console.log(this)
    }
}
// user.welcomeMessage();  
// user.username = "Hitesh" // here context(values of data) have changed so welcomeMessage function is going to print the value of username of that particular context
// user.welcomeMessage();  

console.log(this)
/*
    We get an empty object ({}). This only happens in the coding environment(node, dino etc). It does not print an empty object on browser. 

    On browser, it gives a Window object, which is basically the window and that is how we can manipulate the objects on the windows. 
*/

//this in a function
function chai() {
    let username = "Athak"
    console.log(this) // this gives a lot of data, methods etc
    console.log(this.username) //Gives an undefined, meaning we cannot use this in a function but can be used in an object
}
chai() // ofc after calling the function 
// using the other method of storing in a variable serves no change

// Arrow Functions 
const myFunction = () => {
    console.log(`This is my arrow function`)
    console.log(this) // gave an empty object ({}) 
}
myFunction()

/*
    Arrow functions
        An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

        -Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
        -Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
        -Arrow functions cannot use yield within their body and cannot be created as generator functions

    The major difference comes in the usage of this. When in objects, functions can use this operator to refer to certain attributes of the object, but arrow functions can't do that. That's why they are avoided when using in an object
*/

// Pure arrow functions 

const addTwo = (num1, num2) => {// if {} used then return statement is necessary 
    return num1 + num2;
}
console.log(addTwo(3, 4)) 


const addTwo2 = (num1, num2) => num1 + num2; // implicit return (for one line return function) here return statement can be skipped
console.log(addTwo2(4, 5)) 

const addTwo3 = (num1, num2) => ( num1 + num2 ); // parenthesis used -> no need for return statement

// returning an object 
// const objectReturn = () => {username : "athak"} // this gives undefined because you CANNOT return object simply in curly parenthesis, you have to put a parenthesis over it

const objectReturn2 = () => ( {username : "athak", isLoggedIn : false} ) // you have to use parenthesis in order to return an object 
console.log(objectReturn2()) // this works