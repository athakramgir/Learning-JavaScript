function User (email, password){
    this._email = email
    this._password = password
    // while we had get and set function in the classes sytax we can use object properties here to define getters and setters since we can't use the get() and set() as we used in classes and also due to the fact that functions are eventually objects
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this._password.toUpperCase()}athak`;
        },
        set: function(value){
            this._password = value
        }
    })
}// difference between this code and the previous one is only that the previous one has a much more clean sytax 
const athak = new User("athak@ramgir.com", "google")
console.log(athak.password)