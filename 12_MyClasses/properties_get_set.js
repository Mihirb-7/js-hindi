// how getter and setter is written in erlier code

function User(email , password){             //funtion act as a function also and object also
    this._email = email
    this._password = password

    Object.defineProperty(this , 'email' , {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })
}


const sucess = new User("chat@chat.com" , "chai")

console.log(chai.email);