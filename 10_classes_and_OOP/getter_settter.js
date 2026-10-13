class User{
    constructor(email, password) {
        this.email = email
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    get password(){
        return `${this._password}athak`
    } // there are getters and setters by default in a class but if we explicitly define them, we have to do it in a pair meaning you will have to declare both setter and getter or none of them
    set password(value){
        this._password = value // created a new variable
    }
    // there is a problem : the constructor is also trying to set the value and we have created custom setter function also. So there occurs a race condition, where both are trying to set the parameters giving some error as : RangeError: Maximum call stack size exceeded at 'set' password

    // Then we create another property of the object _password but the getter function also has to change otherwise we get RangeError: Maximum call stack size exceeded at 'get' password

    // The constructor's this.password = password calls the password property of object which has a setter function which gets called. Therefore when we use the same name inside the setter function, it leads to infinte recursion
}
const athak = new User("athak@ramgir.com", 'ABx')
console.log(athak.password)
console.log(athak.email)
console.log(athak._email)