// it comes in play after ES6

class User{
    constructor(username , email , password){            //called automatically when obj is created
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){                        //function inside class
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("chai" , "chai@gmail.com" , "123")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());



//behind the scene / earlier it is done like this

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
