class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

   static createId(){                //static limit the access of method to all instantitaed object   , here it is not accessed by childclass etc
        return `123`                  //craetion one uniqque id for every user
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId());



class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const objc = new Teacher("phonnne" , "i@phone.com")
console.log(iphone.createId());

