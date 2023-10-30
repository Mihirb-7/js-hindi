//immediately invoked(called) function Expression(IIFE)  - used for removig name collision

//js doen't encourage function overloading

// function work() {
//     console.log('DB connected');
// }

// work()         //execution call

//IIFE
(function work() {
    console.log('DB connected');
})();                             //this fn doesn't knnow when to end the  context , to end the context we use ;                  
//here 1st paranthesis is for fn description and 2nd is for fn call


//IIFE arrow fn
(  (name) => {
   console.log(`DB connect 2 ${name}`);
})("hitesh") 