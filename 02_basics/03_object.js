//object declaaration is of 2 ways --
//literal and constructor ki tarah

//singleton -- when made using costructor singleton object is created means it is the only single instance
//literals declaration -- the object is not singleton 

//constructor way  -- Object.create

//objects literals   Object Literal is a data type used to define objects in JavaScript. It is a syntax for creating an object in JavaScript that is composed of key-value pairs.

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "dhfkdhfh",
    age : 18,
    [mySym]: "mykey1",                      //symbol is always wrriten is []
    location: "Jaipur",
    email: "hjfhdks@nnd.com",
    isLoggedIn: false,
    lastLoginDays:['Monday' , 'Sunday']

}

//asssesing obj  
console.log(JsUser.lastLoginDays);    //not recommended

console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym])           //symbool accessing


//object value change
JsUser.email = "kjhfdj@chatgppt.com"

//obj freeze , value is locked
// Object.freeze(JsUser)     


//fuction
JsUser.greet = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greet);         //it return fn reference
console.log(JsUser.greet());

JsUser.greetTwo = function() {
console.log(`Hello Js user , ${this.name}`);
}

console.log(JsUser.greetTwo());





