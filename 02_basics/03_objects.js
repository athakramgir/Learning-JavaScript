// singleton : object created from constructors (only), not the ones which are created through literals 

// object literals (way of declaring objects) 
const JsUser = {} // created the object (empty)
const mySym = Symbol("Cricket") // symbol creation/declaration 
const User = {
    // "key" : value,  => key is processed as a string by default, value can be of any data type 
    name : "Athak", 
    "full-name" : "Athak Ramgir",
    age : 20, 
    location : "Indore", 
    isLoggedIn : true, 
    LastLoginDay : ["Monday", "Wednesday"],
    [mySym] : "myCricket1"
}
console.log(User.name) 
// console.log(User[name]) this gives an error because name is not processed as a string over here
console.log(User["name"]) // this method is better to use. why? See below 

// console.log(User.full-name) name is not defined error
console.log(User["full-name"])  


// console.log(User.mySym) // cannot access the symbol this way
console.log(typeof mySym) // this gives a symbol

// modifiing values of object parameters 
User.name = "Manu" 
console.log(User.name)
// In order to prevent the manipulation of data of an object, we can freeze a particular object 
// Object.freeze(User); 
User.age = 22;
console.log(User.age) // 20 (cannot change) also we won't get any error
// console.log(User)

User.greeting = function(){
    console.log("Hello User") 
}
console.log(User.greeting) // this gave [Function (anonymous)] function has not been executed but a reference of function is returned
console.log(User.greeting()) // Hello User followed by undefined

User.greeting2 = function()
{
    console.log(`Hello User, ${User["full-name"]}`) // if we have to access a property of the object (User) we can use 'this' keyword also 
    console.log(`Hello User again, ${this.name}`) 
}
console.log(User.greeting2()) 