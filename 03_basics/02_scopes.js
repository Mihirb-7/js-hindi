
// var c =30             //var doesn't work as a block scope thaas why we need let and const
                          //global scope -- globally defined

                          //in console scope is diff as compared to code environment scope  -- asked in interviews
if(true){
    let a = 2
const b =20
var c =30
}

console.log(c);   //it is out of scope and givee output 30          --thats why avoid var



//clossure - is a technique

//nested scope
function one() {
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    console.log(website);

    two()
}

one()



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++

addOne(5)                    //it will execute fine

function addOne(num) {
    return num+1
}



addTwo(7)       // it will give error bcoz we are acessing fn before declaration -- this is known as hosting

//variable holding fn
const addTwo = function(num){
    return num +2
}