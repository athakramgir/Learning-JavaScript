let name = "Athak       "
// console.log(name.length) // gives 12. We need true length
// console.log(name.trim().length) // give 5 which is the true length 

let channel = "Chai      "  // now we don't want to do trim().length again and again, we need a new method. 
// console.log(channel.trueLength) // this method common to all strings should give the true length

let myHeroes = ["Thor", "Spider-Man"] 
let heroPower = {
    thor : "Hammer", 
    spiderman : "Web-Shooters",
    getSpidyPower : function() {
        console.log(`Spidy powers are ${this.spiderman}`)
    }
}

// heroPower.prototype.athak // nah uh, don't do this we want to inject method in all Object so any other data type also has that method
Object.prototype.athak = function() {
    console.log(`athak is present in all objects`)
}
heroPower.athak() // is there a method for this object? NO. Can it be injected? YES
myHeroes.athak()

// We injected a method at the top level hierarchy. So now Array String etc that go through Object will behold this method
// Is this the other way around? Can we inject a method in Array and expect it to be held by Object? 

Array.prototype.newMethod = function(){
    console.log(`This is a new method injected in Array`) 
}
myHeroes.newMethod()
// heroPower.newMethod() // this gave an error meaning that the object does not have the access to the newMethod

// Solving the above string problem 
String.prototype.trueLength = function(){
    return this.trim().length
}
console.log(name.trueLength()) // gives a 5
console.log(channel.trueLength()) // give a 4 both are correct

// Inheritance
const User = {
    name : "Athak", 
    email : "dummy@gmail.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : true
}
const TASupport = {
    makeAssignment: "JS Assignment", 
    fullTime : true, 
    __proto__ : TeachingSupport
}
Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)