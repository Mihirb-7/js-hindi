//for each -- widely used

const coding = ['js', 'java','python','cpp']

coding.forEach(function(item){
    // console.log(item);
})                //inside forEach callbaack fn is written (callback fn have no name)

//Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

//another method -- arrow fn
coding.forEach((item) => {
    // console.log(item);
})


//another method
function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe)


//printing item , index , whole array using arrow fn

coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
})

//iteration in array obj
const myCoding = [
    {
    langName: "javascript",
    langFileName: "js"
},
    {
    langName: "java",
    langFileName: "java"
},
    {
    langName: "python",
    langFileName: "py"
}
]

myCoding.forEach((item) => {
    console.log(item.langFileName);
})

