//there should be diff dataTypes element also
//resizable
// shallow copy -- same reference     , deep copy -- not same refernce point


const myArr = [0,1,2,5,7,7,8]

//another declaration
const arr = new Array(77,88,4,3,56,76)

//methods of array

/*

myArr.push(9)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(99) // used to insert element in start , and shifting of elements is done for insetinng in start , take computer resorces more
myArr.shift();   //to remove 99

console.log(myArr.includes(9));     //output is true
console.log(myArr.indexOf(3));     //output is true


*/

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);

//slice , splice  -- it get the portion of original array 

const myn1 = myArr.slice(1,3)      //here index 3 is not included in output , original array is not changed

console.log(myn1);
console.log("After slice ",myArr);

const myn2 = myArr.splice(1,3)   //it also includes 3rd index and here the original array is chaanged
console.log(myn2) 
console.log("After splice ",myArr);



