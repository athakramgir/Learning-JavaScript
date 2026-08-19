const myObj = {
    js : "JavaScript", 
    Cpp : "C++",
    rb : "Ruby", 
    swift : "Swift by apple"
}
// basic structure of this loop is 
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }

// for (const [key, value] in myObj) { // this is a for in loop 
//     console.log(`${key} -> ${value}`)
// }

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`)
    // console.log(typeof key) // here type of key is string
}
/*
    In forin loops, we iterate over the keys. so when we itereate over the array we get 0,1,2,3,4...
*/
const programming = ["js", "rb", "cpp", "swift"]
for (const key in programming) {
    // console.log(`For the key : ${key} => the value is ${programming[key]}`) 
}

// can we print the map items using forin loops 
const map = new Map(); 
map.set("IN", "India")
map.set("USA", "United States Of America"); 

for (const key in map) {
    console.log(key) // this prints nothing : key here is enumerable property key 
}

/*
    For the basics of it : 
        Object : for-of
        Array : for-in {there are more to arrays}
        maps : for-of
*/