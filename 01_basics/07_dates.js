// cal in millisecond , cal from jan1 1970
//date is object 

let myDate = new Date()
console.log(myDate);   //output not understtandable

//we convert it to string
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof myDate);   //output is object

let myCreatedDate = new Date(2023 , 0 , 23)
console.log(myCreatedDate.toDateString());


//another format
let myDate2 = new Date("2023-01-14")
console.log(myDate2.toLocaleString()); 


let myDate3 = new Date("01-14-2023")    //mor preffered in india 
console.log(myDate2.toLocaleString()); 

let myTimeStamp = Date.now();      //output is in millisec
console.log(myTimeStamp);


//conversion in second
console.log(Math.floor(Date.now()/1000));

let newDate5 = new Date()
console.log(newDate5);
console.log(newDate5.getMonth()+1);

newDate5.toLocaleString('default',{
    weekday : "long",
})