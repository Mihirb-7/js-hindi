//datatypes is categorized into 2 types based on how data is stored and accessed in memory 

//  Primitive -- call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//js is dynamically typed lang means data types of variables are determined by the value they hold at runtime
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
  
// console.log(id === anotherId);       output false

// const bigNumber = 3456543576654356754n



// Reference type(Non primitive)

// Array, Objects, Functions
//the typeof return object for all refernce dataTypes

const heros = ["shaktiman", "naagraj", "doga"];

//object

let myObj = {
    name: "hitesh",     //written in key vaalue pair
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);    // the typeof operator print dataType of null = object 
//the typeof operator print dataType of fuction = function / function object 

// https://262.ecma-international.org/5.1/#sec-11.4.3


//******************************************************************************* */

// stack memory used in (Primitive dataType)
//heap (non primitive)


//call by value ex
let a = "hello"
let b = a

b = "hyy"

console.log(a)     //both value is diff
console.log(b)



let user1 ={
    email: "user@sucesss.com",
    upi: "user@ybl"
}

let user2 = user1

console.log(user1.email)           //both are same
console.log(user2.email)