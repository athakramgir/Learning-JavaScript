// let a = 10; 
// const b = 20; 
// var c = 30 ; later : these variables are included in the block scope 
// this is the global scope

let a = 300; 
if(true) // this is always going to execute
{// this is the block scope 
    let a = 10; 
    const b = 20; 

    console.log(`Local Scope a : ${a}`)
    // var c = 40;  
}

console.log(`Global scope a : ${a}`); // this will give an error a not defined
// console.log(b); // b not defined 
// console.log(c); // this gives 40 no error and that is the problem with var

/*
    When multiple programmers are working on project they may use the same variable name in different scopes example : the if block was imported and so the value of c modified in scope. Programmers may get confused that they gave value 30 to c why does it print 40. They don't know that it was modified. So using var is a little dangerous. 
*/
console.log("-------------------------------------Lecture Distinction----------------------------------------")
function one () {
    const username = "athak" 
    function two() {
        const website = "Youtube"
        console.log(username) 
    }
    // console.log(website) // this gives me an error as the block scope of website has ended
    two()
}
one(); 

if(true) {
    const username = "athak" 
    if(username === "athak") {
        const website = " Youtube"
        console.log(username + website); 
    }
    // console.log(website) // website is out of scope
}
// console.log(username) // this throws an error because username is not in the block scope

/*-------------------------------Interesting-----------------------------------------------------------------*/
console.log(add(5)) // notice that this executes completely fine as the function is not stored in any variable to have initialization issues
function add(num){
    return num+1; 
}
console.log(addTwo(5)); // This throws an error as "Cannot access 'addTwo' before initialization" as this time we are storing it in a variable
const addTwo = function(num) {
    return num + 2; 
} 

/*
    Variables are very powerful in JavaScript, they can hold any data, json objects, functions and so on 
*/