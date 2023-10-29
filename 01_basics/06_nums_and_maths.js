//explicitly define dataType
const balance = new Number(100)

console.log(balance.toString().length);
console.log(balance.toFixed(2));   //precision value upto 2

const otherNo = 56.476554
console.log(otherNo.toPrecision(3));


const hundreds = 100000000     /// for representing in a form
console.log(hundreds.toLocaleString('en-IN'));




// **********************MAths******************************

//Math -- object which has so many functionalities

console.log(Math.abs(-4));    // -ve to +pve
console.log(Math.round(4.6));

console.log(Math.ceil(4.3));
console.log(Math.floor(4.8));

//min -- to find min value

console.log(Math.random());   // value lie bw 0-1

const min = 10
const max = 20

console.log(Math.floor(Math.random()* 10 + 1));    // removing decimal and value shoude be > 0

console.log(Math.floor(Math.random()* (max -min +1)) + min);   // to get value b/w 10-20

