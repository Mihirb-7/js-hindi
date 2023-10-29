// denoted by single,double quote ,'' , " "

const name1 = "Sucess"
const name2 = 77

// console.log(name1 + " " + name2);     earlier used

//modern way   , also known as string interpolation
console.log(`Hello my name is ${name1} and my code is ${name2}`);

const gameName = new String('hkdhhdh')

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));  

console.log(gameName.indexOf('d'));   // finding index

//slicing
const newSlice = gameName.substring(0,4);
console.log(newSlice);

//slice method -- also allow -ve value , -ve value means start from end

//trim & replace method

const newStringOne = "      growth   "
console.log(newStringOne.trim());


const url = "https://hjkjkfd.com/jh%10khd"
console.log(url.replace('%10' , '-'))

//split
//include -- used to find in string