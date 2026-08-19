// for of loop 
const arr = [1, 2, 3, 4, 5];
 
// for (const val of object) { // iterator can be put on any object, string, or array.Object does not refer to specific objects in javascript. It refers the the item which could be an array, string or object(anything iterable)
// }

for (const num of arr){
    // console.log(num);     
}
const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`); 
}
// maps-are also iterable
/*
    Maps hold unique values
*/
const map = new Map(); 
map.set("IN", "India")
map.set("USA", "United States of America"); 
console.log(map.get("IN"))
console.log(map.get("USA"))
console.log(map); 
/*
    in forof loops, iterator gives the value itself
*/
for (const [key, value] of map) {
    // console.log(`${key} => ${value}`);
    // console.log(typeof key) // typeof key is string
}

const myObj = {
    game1 : "NFS", 
    game2 : "GTA IV"
}
// for (const [key, value] of myObj) { // throws an error myObj is not iterable 
//     console.log(`${key} => ${value}`) 
// }

// there are different ways to iterate through an object

const myString = "Athak Ramgir"
for (const ch of myString) {
    console.log(ch)
}