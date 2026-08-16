const userEmail = [] // when it was string it gave true and we got the email.
if(userEmail) {// Interesting : we didn't compare userEmail with anything, but still got true this is a truthy value, assumed to be true
    console.log("Got user email")
} else {
    console.log("Didn't get the user email")
}
// So what are the rules, when do we get true and false? 

/*
    Falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN
    Truthy Values : Remaining all, surprising : "0" (inside string), 'false'(inside string), [], {} object
                    function(){}   
*/
// so we should not use the arrays as used above ^
if(userEmail.length === 0) {
    console.log("Welcome User")
} else { 
    console.log("Didn't get the userEmail")
}

// for objects
const emptyObject = {}
if(Object.values(emptyObject).length === 0) {
    console.log("We got an empty object")
} else {
    console.log("We did not get an empty object")
}

// Nullish Coalescing Operator (??) : Null and undefined are the focus. Sometimes we get null or undefined values from database and this operator helps us set the value of variable depending on database response. It basically does the null operator check
const val1 = 5 ?? 10
const val2 = null ?? 5 
var1 = undefined ?? 5
var2 = undefined ?? 10 ?? 20// here we will get the value 10 which comes first (before 20)
console.log(var2) // prints5

// Null Coalescece operator is different from Ternary Operator 
// condition ? true_case : false_case ;
const teaPrice = 20; 
teaPrice >= 50 ? console.log("Expensive") : console.log("Cheap")
