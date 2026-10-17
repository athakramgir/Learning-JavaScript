class User{
    constructor(username, email, password){
        this.username = username; 
        this.email = email; 
        this.password = password;
    }
    set password(value) {
        this._password = value;
        console.log("Set password") 
    }
    get password() {
        console.log("Get Password"); 
        return this._password; 
    }
    set username(value){
        console.log("Set Username"); 
        this._username = value; 
    }
    get username() {
        console.log("Get username"); 
        return this._username; 
    }
    set email (value) {
        console.log("Set Email"); 
        this._email = value;
    }
    get email(){
        console.log("Get Email"); 
        return this._email.toUpperCase(); 
    }
}
const user1 = new User("eren", "erenyeager@aot.com", "Mikasa"); 
console.log(user1)
console.log(user1.username)
console.log(user1.email)
console.log(user1.password)