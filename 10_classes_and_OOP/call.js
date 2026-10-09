function setUserName(username){
    // complex DB calls 
    // console.log(this)
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username)
    // we don't get the desired output because this function is not called here. Only the reference has been passed. So here we have to EXPLICITLY call the function. It is sort of decieving because we are putting the paranthesis here so function should have been called but this is just a reference. 
    // We can explicitly call using "call" 
    // You can see that the console.log() works. What happens is that, when execution of nested function completes it's execution context is taken out of the call stack and thus the initialization of variables is also erased and we do not get username in chai. We need to hold the reference.
    // We passed this into the function which will now store the values in this 'this'. 
    // Call passes the current execution context into another function.
    this.email = email
    this.password = password
}
const chai = new createUser("chai", "dummy@google.com", 123)
console.log(chai) 