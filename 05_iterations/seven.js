const myNum = [1,2,3,4,5,6,7,8,9]

//adding 10 to every element -- done using map
// const newNums = myNum.map((num) => num +10)         //working is similar to filter
console.log(newNums);

//chaining
const newNums = myNum
.map((num) => num*10)
.map((num) => num+10)
.filter((num) => num>=40 )                             //frilter means true vaalue only pass