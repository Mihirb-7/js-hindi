const userEmail = "dhhfh@goggle.com"

if(userEmail){                                         //here it work as true
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


// truthy and falsy value

//falsy values
// false , 0 ,-0 ,BigInt 0n,"",null,undefined,NaN

//truthy vlue
// "0", 'false' (writiing things in string is truthy) ," ",[],{},function(){} -- empty fn

//checcking object is empty or not

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// false == 0 , false == '', 0 == ''   --- these are true values



//Nullish Coalescing Operator : based on null and undefined

//sometimes wwhen u call from databases , u get 2 values , so sometimes code structure will not behave correctly

let val1 ;
// val1 = 5 ?? 10    //output =5

val1 = null ?? 10   //it checks the safety check for null -- menans assigning null doesn't affect the program or not

val1 = null ?? 10 ?? 20 //in this case 1st value is aasigned



//terniary operator

// condituon ? true : false





