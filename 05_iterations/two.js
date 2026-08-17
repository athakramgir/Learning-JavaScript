// while loops 
let index = 0; 
while (index <= 10) {
    console.log(`value of the index is ${index}`)
    // index++; 
    index += 2
}

let myArray = ["Spider Man", "Iron Man", "Captain America", "Hulk"]
const lengthOfArray = myArray.length
index = 0
while(index < lengthOfArray) {
    console.log(`Value is ${myArray[index]}`)
    index++
}

// do while loops : first work is done then after that the condition is checked
let score = 11 
do { // 11 will get printed here. This will not happen with for and while loops 
    console.log(`Score is : ${score}`)
    score++
} while (score <= 10);