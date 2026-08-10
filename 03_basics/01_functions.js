// Functions 

function sayMyName(){  // function keyword followed by function name followed by parenthesis () then the definition
    console.log("A")
    console.log("t")
    console.log("h")
    console.log("a")
    console.log("k")    
}

// sayMyName // This is the reference to the function 
sayMyName() // adding parenthesis to execute the function. 

function addTwoNumbers(num1, num2) {// in this function we did not do a check of data type so it work in diffent ways when different arguments of different data types are passed
    console.log(num1 + num2) 
}
addTwoNumbers() // this does not work and gives NaN because we did not give num1 and num2 
addTwoNumbers(3, 4) // this is the way
addTwoNumbers(3, "3") 
addTwoNumbers(3, null) // generally we put a check of typeof data put into the function as arguments 

/*
    Arguments are those which we put with function when function is called
    Parameters are those which we put with function when function is declared
*/

const res = addTwoNumbers(3, 4) 
console.log("Result when we tried to store the value of addTwoNumber(3, 4) : ", res) // undefined because we called the function and console.log() is what the function does not what the function returns, there is no return type of the function and therefore we get undefined. 
// also note that the sum is printed on the console because function does that 
// we can recreate the function to return some value 

function addTwoNumberReturn(num1, num2) {
    // let result = num1 + num2; 
    return num1+num2; 
    // console.log("Unreachable code as the function has already returned"); 
}
const res2 = addTwoNumberReturn(3, 4) 
console.log("Result when we tried to store the value of addTwoNumberReturn(3, 4): ", res2) 


function loginUserMessage(username = "sam") {
    // if(username === undefined){
    if(!username) {  // this will never execute
        console.log("Please enter a valid username")
        return
    }
    return `${username} just logged in`
}
let status = loginUserMessage("Athak") // we can do this but there is one more way
console.log(status)  

console.log(loginUserMessage("Athak"))
console.log(loginUserMessage("Athak")) // empty argument gives undefined
// if else conditionals can be used to prevent the undefined as output and can be used to give an error message
// however we can fundamentally prevent that from happening by declaring default values to function parameters