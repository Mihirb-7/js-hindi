function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2   //in js fn is also a fn and also an object so that here we accessed it using obj , here fn is behaved by the obj

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);   //its output is 2
console.log(multiplyBy5.prototype);   //its output is {}


function createUser(username , score){
    this.username = username 
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}       // definning own properties


createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const a = new createUser("bag" ,345 )  // to accessing new properties we have to write new , without new the printme and increment doesn't work
const b = new createUser("book" ,195 )

a.printMe()




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/





