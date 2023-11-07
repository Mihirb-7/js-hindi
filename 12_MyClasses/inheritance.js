class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email, password){
        super(username)    // take username refernce from Useer class
        this.email =email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const user1 = new Teacher("Growth" , "growth@mail.com","234")

user1.addCourse()
user1.logMe()

const masalaChai = new User("MasalaChai")
masalaChai.logMe()


console.log(user1 instanceof User);    //output is true