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