//functions and memory management

function sayMyName(){
    console.log("hyy");
    console.log("hello");
}

// sayMyName()   //refering fn / executing


function addTwoNos(number1, number2){                //here number1 , number is known as parameters 
    console.log(number1+number2);
}

addTwoNos(7 , 5)   //output = 12     -- here 7, 5is known as arguments
// addTwoNos(3 ,m)   //output - 3m             -- it is done bcoz we doesn't checked number1 , number2 are no's or not


function addTwoNos(number1, number2){                
    let result = number1 + number2;
    return result;
}

// console.log("Result ", result);


function loginUserMsg(username) {
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg());  //it outputs undefiended bcoz value is not passed 
console.log(loginUserMsg("Hello"));  




//if parameter is not known
// we use here rest operator -- rest and spreead is same - naming is done based on the use case
function calCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calCartPrice(200,699,7665,765890));

//passing obj in fn
const user ={
    username: "Hitesh",
    price: 566
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

//psisng direct obj
handleObject({
    username: "sam",
    price: 400
})


//array passing
const newArr = [200,5,689,66]

function returnSecvalue(getArray) {
    return getArray[1]
}


console.log(returnSecvalue(newArr));



