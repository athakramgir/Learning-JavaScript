class User{
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username : ${this.username}`)
    }
    static createId() { // When I do not want to an object instantiated from this class
        return `123`
    }
}
const athak = new User("Athak")
// console.log(athak.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email 
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId())