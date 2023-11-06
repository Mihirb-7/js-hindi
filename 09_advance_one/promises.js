// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//it is a object represent eventual completion


//creting promise
const promiseOne = new Promise(function (resolve , reject){
    //do async task
    // DB task , cryptography , network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    } , 1000)
})  //it takes callback

//consume promise
promiseOne.then(function(){
    console.log("Promisse consumed");
})

//obj  - it perfectly introduces in es6
                                  //earlier to use promise , libraries is used like bluebird and Q


//another way
new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    } , 1000)
}).then(function(){
    console.log("Async 2 resolve");
})

//data passing
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){        //resolve data comes at user 
    console.log(user);
})


//if accessing is not done then
const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "hitesh" , password : "123"})
        }else{
            reject('Errror : Something is wrong')
        }
    },1000)
})

 //.then chaining -- 1st then return value is used for 2nd then
promiseFour                            //promises always has timme limit
.then((user) => { 
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))         //it is like default -- hmesha execute hoga



const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript" , password : "123"})
        }else{
            reject('Errror : Js went wrong')
        }
    },1000)
});

//async await  -- it waits for work to complete
async function consumePromiseFive(){           //it doesn't handle error direcly , here to handle we write try catch 
    try{ 
        const response =  await promiseFive    //promise is a object
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()



//using try catch

// async function getAllUsers(){
//   try {
//     const  response  =  await fetch('https://jsonplaceholder.typicode.com/users')
//   const data =await response.json()
//   console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
//   }
// }

// getAllUsers()



//using .then
//the fetch method starts the process of fetching a resource from the network , returning a promose

//error 404 -- it is not error it is a response
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



