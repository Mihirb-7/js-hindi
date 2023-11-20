class User{
    constructor(email,password){
        this.email = email
        this.password = password

        //jitne bhi properties hoti hai uske naam se getter aur setter method automatically ban jaate hai
    }

      //we have to define both getter and setter -- only one define is not allowed
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value        
    }
  
    get password(){                                   //to get value from outside of class
        return this._password.toUpperCase();          //here we write _password which means the constructor password is overridden by the getter
    }
 
    set password(value){                              //to set value from outside of class
       this._password= value         //  here we write _password which means the constructor password is overridden by the setter

    }
}

const hitesh = new hitesh("h@hitesh.ai" ,'abc')
console.log(hitesh.password);
console.log(hitesh.email);