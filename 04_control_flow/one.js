// if statements

if(true) { // if the condition in the parenthesis is true then the scope of the 'if' will get executed

}
if(false) {
} // line 7-9 will not be exectued

const isLoggedIn = true; 
const user = "Athak"
if(isLoggedIn) {
    console.log(`Welcome ${user}`); 
}
/*
    Conditional Checks : < (less than), > (greater than), <= (less than || equal to), >= (greater than || equal to), == (is equal), != (is not equal to), === (is strictly equal to, check the data type also), !== is stictly not equal to
*/
// if(2 === "2") {
//     console.log(`Executed`); 
// }
// else if(2 !== "2") {
//     console.log("Executed second")
// }


// const temperature = 41; 
// if(temperature < 50) {
//     console.log("Tempetature less than 50"); 
// }
// else {
//     console.log("Temperature is greater than 50"); 
// }
// console.log(`This is going to get executed, whatever the conditional is because this is out of the scope of if and else`); 

// const score = 200; 
// if(score > 100) {
//     const power = "fly"; 
//     console.log(`User can ${power}`); 
// }
// // console.log(`User can ${power}`); // again we get an error over here that power is not defined which is good as power is in the if's scope and should not be accessed outside
// if(score > 100) {
//     var power = "fly"; 
//     console.log(`User can ${power}`); 
// }
// console.log(`User has ${power}`) // this does not give an error which is bad because power was suppossed to stay in the if scope. It should not be accessed outside

// short-hand notation : scope not used. here we implicitly assume a scope for just ONE line of code 
const balance = 1000; 
if(balance < 2000) console.log(`Insufficient balance`) // this works for just ONE line, however there are ways to execute multiple lines using short-hand notations
// if(balance > 200) console.log("Good, ") , console.log(`Payment successful`) this is not good for readablity, prefer not to use this 

// to check multiple conditions we can use else if(){} statements 
// if(balance < 500) {
//     console.log("Less than 500") 
// }
// else if(balance < 750) {
//     console.log("Less than 750 and greater than 500")
// }
// else if(balance < 1000) {
//     console.log("Less than 1000 and greater than 750");    
// }
// else {
//     console.log("Greater than or equal to 1000")
// }

const userLoggedIn = true; 
const debitCard =true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true; 
if(userLoggedIn && debitCard) { // logical operator AND
    console.log(`User is allowed to buy courses`); 
}
if(loggedInFromEmail || loggedInFromGoogle) { // Logical operator OR
    console.log("User logged in")
}

