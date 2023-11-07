const user = {                       //it is simmply object literal 
    username : "hitesh",
    loginCnt : 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details');
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);   //it prints {} which means there in nothing in global context








//constructor fn
const promiseOne = new Promise()  //here new keyword allow us to make mulyiple instabces using one object
const date = new Date()       //whenever we write new keyword new instance / object is created

//due to new keyword constructor fn is called -- it packs all arguments/passon is done
//after that arguments is injected /added

function User(username , loginCount , isLoggedIn){   //structure of user
    this.username = username  //left side is variable and right side is parameter paased to fn
    this.loginCnt = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this
}

const userOne = new User("hitesh" , 12 , true)
const userTwo = new  User("hitesh2" , 11 , true)
console.log(userOne);
console.log(userTwo);



//one instanceof method is also there

