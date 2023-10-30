//object declaration using constructor

// const tinderUser = new Object()    //it is singleton obj

const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Sucess"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//object under object

const regularUser ={
    email: "some@gmail.com" ,
    fullname : {
        userfullname: {
            firstname: "Hardwork",
            lastname: "Sucess"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

// object combinee

const obj1 ={1: "a",2: "b"}
const obj2 ={3: "c",4: "d"}

//it makes obj under obj , it doesn't combine object and make it single unit
const obj3 = {obj1,obj2}

// const obj4 = Object.assign({},obj1,obj2)    //{} is used to make the object single object   , {} is wrriten by goood codee/programmers


//spread operator
const obj5 = {...obj1 , ...obj2}      //easy method

//object innside array

const users =[
    {
        id: 1,
        email: "a@djhj.com"
    },
    {
        id: 2,
        email: "b@djhj.com"
    },
    {
        id: 3,
        email: "c@djhj.com"
    }
]

console.log(users[2])

console.log(Object.keys(tinderUser));    // storing all keys in tinderUser obj 
console.log(Object.values(tinderUser));    // storing all keys in tinderUser obj 


//finnd sommething in obj
console.log(tinderUser.hasOwnProperty('isLoggedIn'));