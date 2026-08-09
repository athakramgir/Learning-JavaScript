let marvel_heroes = ["Thor", "IronMan", "Spider Man"] 
const dc_heroes = ["Superman", "Batman", "Flash"] 
marvel_heroes.push(dc_heroes) // this will enter dc_heroes as another element of type arrays. meaning that the two arrays will not be merged but the pushed array will become an element of the array because JS allow making arrays of different data types (no type needs to be satisfied)
console.log(marvel_heroes)
console.log(marvel_heroes[3]) 
console.log(marvel_heroes[3][0]) 

marvel_heroes.pop()
console.log(marvel_heroes)
const all_heroes = marvel_heroes.concat(dc_heroes) // this method conctanates the two arrays here dc_heroes is conctanated to marvel_heroes. The output comes in form of array and must be stored in some other arrays 
marvel_heroes = marvel_heroes.concat(dc_heroes) // first you need marvel_heroes not to be const
console.log(marvel_heroes)
console.log(all_heroes) // same result

/*
    Difference in push and concat : 
        1. Push inserts the new array/element/any_data_type into the array as a single element whereas concat() merges two different arrays 
        2. push() does not return any data, but manipulates the existing array. concat() however, returns a new merged array and therefore must be stored either in the same array (if let or var) or in a new array 
*/

// spread operator : to merge two or more arrays to form a single array 
const all_new_heroes = [...marvel_heroes, ...dc_heroes] // here both arrays are broken down to each element and then merged these individual elements to form a new array
console.log(all_new_heroes) // more used

// flat() method : here, we have nested arrays (arrays inside arrays) and we want to seperate them, i.e., take each and every element of certain depth d, and use them to form a single array with all elements on the 1st depth

const arr = [1, 2, 3, [4, 5, 6], 7, 8, [8, 9, [10, 11]]]
console.log(arr)
let usable_arr = arr.flat(1) // here in flat(param_), param_ is the depth to which I want individual elements. Can use Infinity to go as deep as possible 
usable_arr = arr.flat(Infinity) 
console.log(usable_arr)

// Array methods 
console.log(Array.isArray("Dummy")) // false as given parameter is a string
console.log(Array.from("Athak Ramgir")) // will give each character of the given string as elements of an array or in other words, convert the string to an array

console.log(Array.from({name : "Athak Ramgir"})) // gives an empty array as we did not specify item to be converted to an array (Like which property/attribute of the object) 

const item1 = 100; 
const item2 = 200; 
const item3 = 300; 
// console.log(Array.from(item1, item2, item3)) error because from creates array from "array like objects"
console.log(Array.of(item1, item2, item3)) // made an array 'of' 3 items

console.log(Array.of(item1, item2, item3).concat(all_heroes));  // made an array out of items and then conctanated the all_heroes with that 