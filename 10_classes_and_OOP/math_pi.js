console.log(Math.PI)
Math.PI = 5
console.log(Math.PI) // We cannot change the value of PI. Let's understand why 

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)
/*
We get something like this in the descriptor. The writable : false is hardcoded in C++ under the hood and cannot be changed and that is why we cannot change the value Math.PI in javascript
    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }   
*/

const chai = {
    name : "Ginger Tea", 
    price : 259, 
    isAvailable : true,

    orderChai : function(){
        console.log(`Chai Nahi bani`)
    } // this still gets printed, but we don't really want that so in enumeration (forof) we add an if condition for such cases
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    writable : false, 
    enumerable : false // when you iterate through the object this will not be printed
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// for (const [key, value] of chai) {
//     console.log(`${key} : ${value}`)
// } // this gives not iterable
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}