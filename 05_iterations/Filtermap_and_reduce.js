// const coding = ['js', 'java','python','cpp']

// coding.forEach((item) => {                                 //foreach loop ddoesn't return any value
                                                            //in foreach loop return staement doesn't work
// })

//return is done using filter operation
const myNums = [1,2,3,4,5,6,7,8]

// const newNums = myNums.filter((num) /*ecah access every value*/ => num>4   /*condition*/ )
// console.log(newNums)

//another way of writing the filter fn
const newNums = myNums.filter((num) => {
    return num > 4
})

// console.log(newNums);


//doing the above same thing using for loop
const newNums2 =[]

myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums);



//object accesing using filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk) => bk.genre === 'History')   //here output is those obj havine genre is history


userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
})        //here due to scope return is written
console.log(userBooks);


