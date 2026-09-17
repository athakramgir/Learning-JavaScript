// This is promise creation
const promiseOne = new Promise(function(resolve, reject){
    // Do async tasks
    // DB calls, cryptography, network we can do anything here
    setTimeout(function(){
        console.log("Async Task is complete")
        resolve(); // after calling this is only when we connect the resolve() with then()
    } , 1000)
})
// Promise consumption
promiseOne.then(function(){
    console.log("Promise consumed")
})

// we could also do it without using a new variable like promiseOne
new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise consumed second time")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({
            "username" : "agamemnon", 
            "email" : "dummymail1@gmail.com"
        })
    }, 1000)
})
promiseThree.then(function(user){ // we can expect some data in the call-back function after connecting it with resolve
    console.log(user)

})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({
                "username" : "Spider-man", 
                "email" : "dummymail2@gmail.com"
            })
        }
        else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})
promiseFour
.then((user) => {
    console.log(user) 
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally(() => console.log("Finally the promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({
                "username": "batman",
                "email": "dummymail3.gmail.com"
            })
        }
        else {
            reject("ERROR: JS went wrong")
        }
    } , 1000)
})
// now it is not necessary that we handle promise with then() catch() etc. We can also catch it with the help of async/await
async function consumePromiseFive() {
    // const response = await promiseFive     Does not handle the error condition
    // console.log(response); 
    try {
        const response = await promiseFive // await means that wait till we get a value in promiseFive and then give that value to response 
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response) just to check
//         const data = await response.json() // this takes time to convert the above data to json so we use await
//         console.log(data)        
//     } catch (error) {
//         console.log(`E : ${error}`)
//     }
// }
// getAllUsers()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//     console.log(response.json())
// })
// .catch((error) => {
//     console.log(`E : ${error}`)
// })
// You cannot do this because response.json() is also returns a promise and fetch() is also return a promise so we use two then() : 
// first one process promise returned by fetch() and the other processes the one returned by .json();

fetch("https://api.github.com/users/athakramgir")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) =>{
    console.log(`E : ${error}`)
})

/*
    Notice how the last code (fetch) gets it's output first on the console then the remiaing part does. Think why? 
*/