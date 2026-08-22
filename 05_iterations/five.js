const coding = ['js', 'ruby', 'cpp', 'php', 'swift', 'kotlin', 'python']

// there are some loops that are in-build for the arrays which are most often used and are higher level loops


// coding.forEach( function name(item) {
//     console.log(item)
// } )// this is a call-back function => It has no name, and already has the array element as a parameter we can call that as item (we can choose name)


coding.forEach( (item) => { // notice the no-name here
    console.log(item)
} )

// we can use a seperate function also
function printFunction(item) {
    console.log(item) 
}
coding.forEach(printFunction) // notice how we gave a reference to the function we did not execute it 
// coding.forEach(printFunction()) // this is wrong


// forEach() not only have item/element as a parameter but can also take index full array and others too 
coding.forEach( (data, index, arr) => {
    console.log(data , index , arr)
})

// having objects declared in the array is a very common occurence 
const myCoding = [
    {
        lang_name : "Javascript",
        extension : ".js"
    }, 
    {
        lang_name : "C++", 
        extension : ".cpp"
    }, 
    {
        lang_name : "Python", 
        extension : ".py" 
    }
]
myCoding.forEach( (item) => {
    console.log(`${item.lang_name} has the extension ${item.extension}`); 
} )

// a problem occurs when we have to return a value from the call-back function