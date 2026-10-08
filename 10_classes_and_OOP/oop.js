// Object literal 
const user = {
    username : "Athak", 
    loginCount : 8, 
    isLoggedIn : true,
    // properties
    getUserDetails : function(){
        // console.log("Got user details from DB")
        console.log(`Username : ${this.username}`) // this keyword specifies the context here, like print the username of this particular instance of user
        console.log(this) // this prints the entire instance of the object user {this instance}
    }
}
// Problem : When we have to make multiple instances of this object literal, we cannot just do it manually. 
// console.log(user.username); 
// console.log(user.getUserDetails());
// console.log(this)


// Constructor Functions
// const newPromise = new Promise() 
// const date = new Date()
// here new is a constructor function 

function User(username, isLoggedIn, loginCount) {
    this.username = username; 
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this (implicitly defined still use it)
}
const userOne = new User("Athak", true, 8)
console.log(userOne.constructor)
const userTwo = new User("Hitesh", false, 10) // this overwrites (in case new keyword is not used) the entries of userOne and this is why  new keyword is important. 
// console.log(userTwo) 

/*
    - When we use 'new' keyword
        1. An empty object is created called as instance
        2. A constructor function is called because of the new keyword
        3. All the arguments are injected in the 'this' keyword
        4. We get values in the function 
*/