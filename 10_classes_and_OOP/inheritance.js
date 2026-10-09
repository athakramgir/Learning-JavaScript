class User {
    constructor(username){
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourses(){
        console.log(`New course was added by ${this.username}`)
    }
}
const chai = new Teacher("chai", "chai@teacher.com", 123)
chai.addCourses()
chai.logMe()
const masalaChai = new User("masala chai")
// masalaChai.addCourses() does not have access
masalaChai.logMe()

console.log(chai === masalaChai)
console.log(chai instanceof Teacher) // is chai an instance of teacher? 
console.log(masalaChai instanceof User)
console.log(chai instanceof User)