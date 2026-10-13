// this syntax is rarely used 
const User = {
    _email : "athak@ramgir.com", 
    _password : "google",

    get email(){
        return this._email.toUpperCase(); 
    },
    set email(value){
        this._email = value
    },
    get password(){
        return `${this._password}athak`
    },
    set password(value) {
        this._password = value
    }
}
const athak = Object.create(User)
console.log(athak.email)