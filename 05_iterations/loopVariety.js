//these are arary specifit loop
//for of   

const arr = [1,23,4,7,57,0]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//Maps -- another datatype in js   --n it is a obj that holds key - value pair
// it has all unique values

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")

// console.log(map);


//forof loop in map
for (const key of map) {           //here printing is done in array form
    // console.log(key);
    
}

//if we want to print in key value pair we do this
for (const [key,value] of map) {
    // console.log(key, ':-',value);
}







