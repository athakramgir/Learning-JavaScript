// arrays

const myArray = [0, 1, 2, 3, 4, 5, "Athak", true] 
console.log(myArray) 
console.log(myArray[6]) 

myArray[0] = 999
const diffArray = myArray
diffArray[0] = 0
console.log(diffArray[0]) 
console.log(myArray[0]) // shallow copy so the value in myArray also changes

const myHeroes = new Array("Captain America", "Ironman", "Spider-man") 
console.log(myHeroes)

// array methods 
const sample = [1, 2, 3, 4, 5, 6] 

sample.push(7)
sample.push(8) // push values at the back of the array 
sample.pop() // pop values from the back of the array 
console.log(sample)

sample.unshift(0) // adds 0 to the front of the array 
console.log(sample) 
sample.shift() // removes 0 from the front of the array 
console.log(sample)

console.log(sample.includes(9)) // false value (boolean)
console.log(sample.indexOf(3)) // -1 as 9 is not in the array 

const myArray2 = sample.join() // returns a string
console.log(myArray2, typeof(myArray2)) 

// slice or splice methods in arrays

const myArr1 = [1, 2, 3, 4, 5, 6] 
console.log("A: ", myArr1)
const ex = myArr1.slice(1, 3) 
console.log(ex)
console.log("B: ", myArr1) 

const ex2 = myArr1.splice(1, 3)
console.log(ex2) 
console.log("C: ", myArr1) 

/*
    Difference between slice and splice : in slice we can get a subarray of origional array which exludes the last index parameter and hence the origional array is not changed

    In splice we cut the portion/part/subarray out of the origional array including the last index parameter
    So the origional array is also changed

    Splice manipulates the origional array 
*/