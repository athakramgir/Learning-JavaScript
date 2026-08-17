// for loops 

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5) {
        // console.log(`${element} is the best number`)
    }
    // console.log(element)
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Table of : ${i}`)
    for(let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} for outer loop value : ${i}`); 
        // console.log(i + "*" + j + " = " + i*j);
    }
}
let myArray = ["Flash", "Batman", "Superman"]; 
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray.length)
    console.log(myArray[i]); 
}

// break and continue
for(let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log(`Favourite Number ${i} detected.`); 
        break // loop stops working
    }
    console.log(`Value of index is : ${i}`); 
    
}

for(let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log(`Favourite Number ${i} detected.`); 
        continue // loop keeps working but after this if statement whatever code is written will not be executed for this particular iteration
    } 
    console.log(`Value of index is : ${i}`); 
    
}