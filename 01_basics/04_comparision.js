//it is recommended to compare always same data types

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);      output - true
// console.log("02" > 1);      output - true

//comparisions converts null to no treating it as 0
console.log(null > 0);          //output - false
console.log(null == 0);         //output - false      (== works differently as compare to  >=)
console.log(null >= 0);       //output - true

console.log(undefined == 0);     //output - false in all
console.log(undefined > 0);
console.log(undefined < 0);

// ===  it means check value as well as datatype

console.log("2" === 2);