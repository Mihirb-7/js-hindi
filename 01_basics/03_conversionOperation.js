let score = 33

console.log(typeof score);
console.log(typeof(score));    // method

let valueNumber = Number(score)
console.log(typeof valueNumber); 
//if score is 34,44 etc then it is converted but what about 34abc , for 34abc it again output number but the value is NaN (not a no)
//her efor checkiing we should also check value of valueNumber for verification

//in case of null the value become 0
//in case  of underfined value  become NaN


/*
"33" => 33
"33abc" => NaN
*/




//**************operation *******************

let value =3
let negValue = -value  //assigning -ve value 

console.log("1" + 2)  //12
console.log(1 + "2")   //12
console.log("1" + 2+2);  //122
console.log(1+2+"2");    //32

console.log(+true);   //output 1    
console.log(+"");   //output 0    
//console.log(true+);   //error


