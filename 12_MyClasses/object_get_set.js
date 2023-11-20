const User = {
    _email: 'sucess@sucess.com',
    _password: 'jkf',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }


}

     //Object.create is factory fn it iss like constructor fn which is created using new keyword
const grow = Object.create(User)            //it creates an object baased on user
console.log(grow.email);
  
