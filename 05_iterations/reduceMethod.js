//myself - reduce method working is similar to fibbonaci series
//reduce is majorily used in shopping cart

const myNums = [1,2,3,4]


// let myTotal = myNums.reduce(function (accumelator , curr_val) {
//     console.log(`accumelator: ${accumelator} an current value: ${curr_val}`);
//     return accumelator + curr_val
// },0)                                          //0 is initaial value


//writing  using arrow fn
let myTotal = myNums.reduce((accumelator , curr_val) => accumelator + curr_val, 0)
console.log(myTotal);


const shoppingCart =[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "Mov dev",
        price: 299
    }
]

let add = shoppingCart.reduce((accumelator , item) => accumelator + item.price,0)
console.log(add);