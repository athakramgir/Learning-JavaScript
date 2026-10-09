// // ES6
// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("athak", "chai@gmail.com", 123)
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

// behind the scenes

function userFunction(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}
userFunction.prototype.encryptPassword = function() {
    return `${this.password}xyz`
}
userFunction.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const code = new userFunction("code", "code@gmail.com", 123)
console.log(code.encryptPassword())
console.log(code.changeUsername())