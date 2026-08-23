const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// const newNums = nums.map( (num) => num+10 )
// console.log(newNums)
// const newNewNums = newNums.map( (num) => {
//     return num + 10
// } )
// console.log(newNewNums)


// Chaining
const newNums = nums
.map( (num) => num * 10) // here num is 1, 2, 3...
.map( (num) => num + 1) // here num is the previously processed one, 10, 20, 30...
.filter( (num) => num >= 50 ) // here num is 11, 21, 31...

console.log(newNums) 