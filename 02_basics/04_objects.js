// Singleton objects declared with the help of constructors 
// const User = new Object() 
const user = {}

// console.log(User) // this is a singleton object 
console.log(user) // this is not a singleton object (only difference between the two) 

user.id = "213abc" 
user.name = "sammy" 
user.isLoggedIn = false
// console.log(user) changes reflected 

const regularUser = { 
    email : "regularuser@gmail.com", 
    fullname : {
        username : "charismatic_sammy123",
        userFullName : {
            firstName : "sammy", 
            lastName : "choudhary"
        }
    }
}
console.log(regularUser) 
console.log(regularUser.fullname?.userFullName.firstName) 
/*
    The ? operator is used to say, "If we got a fullname, then find out next properties of it"
    It is like a ternary operator 
*/

const obj1 = {
    1 : "a", 2 : "b", 3 : "c" 
}
const obj2 = {
    4 : "a", 5 : "b", 6 : "c"
}
const obj3 = { 
    7 : "a", 8 : "b", 9 : "c"
}
let obj4 = { obj1, obj2} 
console.log(obj4) // similar to what happened in arrays
// instead we can do something like 
obj4 = Object.assign(obj1, obj2) // assign(target, source)
obj4 = Object.assign({}, obj1, obj2, obj3)  // here empty array is the target, and obj1, obj2 and so on (obj i) can be used as sources to merge into a single object 
console.log(obj4)
// assign has too much hassle of putting braces, or not and so on, instead we can use a spread operator {...}

obj4 = {...obj1, ...obj2, ...obj3} 
console.log(obj4) 

/*
    When we recieve data from a database, it generally comes as an array of objects. So we can use array operatoins or loop over it, to extract information. We can also get the keys and values of an object in an array 
*/

let another_object = { 
    name : "Athak", 
    email : "athakramgir@gmail.com", 
    height : 173
}
const keys = Object.keys(another_object) // gives keys of the object as an array
console.log(keys, typeof keys) 
const values = Object.values(another_object) // gives values of the object as an array
console.log(values, typeof values) 
const entries = Object.entries(another_object) // gives the key value pair as an array of arrays
console.log(entries) 

// to check if an object has a certain property or not
console.log(another_object.hasOwnProperty('isLoggedIn')) // false
console.log(another_object.hasOwnProperty('name')) // true  


// De-Structuring Objects 

const course = { 
    name : "JS-Hindi", 
    price: 999, 
    instructorName : "Hitesh"
}
console.log(course.instructorName) 
console.log(course.name)
console.log(course.price) 
// Problem : when we try to access the attributes of the object we have to repeat writing objectName.method so to solve this we can destructure the object 
const {instructorName} = course
console.log(instructorName) 

// if the name is too large 
const {instructorName : inst} = course // basically these curly braces are used for de-structuring
console.log(inst) // this also works
 

// APIs (Application Programming Interface) : Whenever we want someone else to do us a job, example logging in with google, we don't have to worry about authenticating the user when they login with google 
// JSON Objects (checkout api.github.com : you'll see how api calls are recieved then they can be put into an object and attributes can be accessed) 
// { api json
//     name : "athak", 
//     courseName : "JS-Hindi", 
//     price : "free" 
// }