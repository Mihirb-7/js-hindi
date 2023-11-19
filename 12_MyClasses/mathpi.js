

// console.log(Math.PI);  //it prints 3.14...
// Math.PI = 5 // it doesn't change the value of PI     


const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")        //it shows hidden properties of object

const chai ={
    name : "Ginger chai",
    price: 234 ,
    isAvailable : true,

    orderChai: function(){
        console.log("chai nhi bni");
    }

} 

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

/*
it prints
value: 'Ginger chai',
  writable: true,        //to change wthis true to false we done below
  enumerable: true,
  configurable: true

  */

//changing object property access
// Object.defineProperty(chai , 'name' , {
//     writable : false,
//     enumerable: false
// })


//forof loop to object iteration

for (let [key,value] of Object.entries(chai)) {     //we used entries functionality to access the entries
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }                

}