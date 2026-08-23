// const coding = ["js", "ruby", "java", "python", "cpp"] 
// const values = coding.forEach( (item) => { 
//     return item
// })
// console.log(values)  // give undefined here

// this doesn't work the .forEach() is not returning any value

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
const filtered_nums = nums.filter( (num) => num > 4)  // filter also takes a call-back function and also allows a return statement
// we can also do this with forEach() 
const myArr = [] 
nums.forEach( (num) => {
    if(num > 4) {
        myArr.push(num)
    }
} )
// console.log(myArr) // this also works.  


const num5 = nums.filter( (num) => num == 5) 
// console.log(filtered_nums)
// console.log(num5) 


const copy_nums = nums.filter( () => {
    return true; // here we used the curly braces, so a return statement must be used
}) // filter used as a forEach()
// console.log(copy_nums)

// console.log(nums.filter( (num) => {
//     return num + 2; 
// })) we cannot do this here because filter() operates in a different manner. It checks the condition for each element and then if true, it takes the element of array. It does not modify it. 


// Define an array filled with book objects
const library = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, isRead: true },
  { id: 2, title: "1984", author: "George Orwell", pages: 328, isRead: false },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, isRead: true },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, isRead: false }
];
let userBooks = library.filter( (obj) => obj.isRead ) 
userBooks = library.filter( (book) => book.pages >= 300 ) 

userBooks = library.filter( (book) => book.pages >= 300 && !book.isRead) 
console.log(userBooks)