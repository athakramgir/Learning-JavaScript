// Immediately Invoked function Expressions (IIFE)  

// Problem : whenever we have perform a specific functionality irrespective of the data in the global scope, we declare an IIFE. Because a normal function can be easily polluted by the global data/variables. Our motive is to immediately invoke the function after declaration 

// this can be done normally as 
function chai(){
    console.log(`DB CONNECTED`); 
}
chai(); 
// there is a possibility of global scope pollution so instead we do something like 
(function chai2() {
    console.log(`DB CONNECTED SUCCESSFULLY`); 
})(); // to terminate the flow

// ()() // the first parenthesis contains the function and the second one is for execution 
(function aurCode(){ // throws an error if semi-colon not used BEFORE
    // this is a named iife, as there is a name
    console.log("DB CONNECTED TWO");
})(); 
( () => {
    console.log(`DB CONNECTED THREE`); 
})(); 

( (username) =>{
    console.log(`DB CONNECTED FOR USER ${username}`);
    
} )('Athak'); // here the second parenthesis is used to pass arguements because that does the execution. I have also given a parameter username in this function whose arguements are given in second parenthesis