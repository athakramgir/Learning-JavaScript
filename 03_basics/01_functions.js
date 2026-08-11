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
addTwoNumbers(3, "3") // 33 will be the output (concatenation)
addTwoNumbers(3, null) // generally we put a check of typeof data put into the function as arguments 

/*
    Arguments are those which we put with function when function is called
    Parameters are those which we put with function when function is declared
*/

const result = addTwoNumbers(3, 4) 
console.log("Result when we tried to store the value of addTwoNumber(3, 4) : ", result) // undefined because we called the function and console.log() is what the function does not what the function returns, there is no return type of the function and therefore we get undefined. 
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

console.log(loginUserMessage(null))
console.log(loginUserMessage()) // empty argument gives undefined
// if else conditionals can be used to prevent the undefined as output and can be used to give an error message
// however we can fundamentally prevent that from happening by declaring default values to function parameters

// Functions with objects and arrays 

// Here we are trying to make a function to calculate cart price. Problem is we don't know how many items a user can add into the cart
function calculateCartPrice(... num1) {
    return num1; 
}
console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200, 400, 500)) // only first 200 is returned. 

// The solution is the rest operator. When we talk about it we also talk about spread operator that was previously used. Syntax of both of them is same ...
// spread operator as seen before is used to spread the entire data into individual elements 
// rest operator does the exact opposite, it takes individual data and combine it as a single element/object/varaible

// one smaller variation 
function calcualtePrice(val1, val2, ...num1){
    return num1; 
}
console.log(calcualtePrice(200, 400, 600, 800)) // the first two arguments are taken in val1 and val2 the other ones are clubbed together as an array

const user = { 
    name : "athak", 
    age : 20,
    salary : "46.4 LPA"
}
function handleObject(anyObject) {
    console.log(`Name of the user is : ${anyObject.name}, age : ${anyObject.age}, salary : ${anyObject.salary}`)
}
handleObject(user) 
// here we have a problem that if we gave names instead of name then that would give undefined so we have to check the type safety always

// we can also do 
handleObject({// direct object is passed
    name : "DummyName",
    age : 22, 
    salary : "37 LPA"
})

const myArray = [200, 400, 600, 800]
function returnSecondValue(arr) {
    return arr[1]
}
console.log(returnSecondValue(myArray))
console.log (returnSecondValue([100, 300, 500, 700]))