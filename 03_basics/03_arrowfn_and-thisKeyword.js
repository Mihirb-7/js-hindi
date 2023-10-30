// arrow fn -- comes in 2015 update

//this - use to refer current context

const user ={
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);    //here current context is user
    }
}


// in browser the global object is window object  -- asks in interview

user.welcomeMessage()
user.username = "sam"    //here we change context/value
user.welcomeMessage()    //here sam is executed

//if nothing is declared globally then global context is empty


function good() {
    let username = "hkhvk"
    console.log(this.username);             //the output of this is undefined bcoz this keyword is not work on fn  ,  if we write only this then output gives a long description of this

}

// arrow fn
const good = () => {
    let username = "hitesh"                //here the output is undefined and this keyword gives{}
    console.log(this);
}


//basic arrow fn syntax, () => {}   , also known as explicit return arrow fn , means return keyword is wrriten
const addTwo = (num1 , num2) => {                               //holding arrow fn in name
    return num1+ num2
}                                             

console.log(addTwo(3,4));


//implicit return arrow fn it has no {}   , no need to write return
const addno = (num1 , num2) => num1+ num2        // we can also write (num1+ num2)

console.log(addno(3,4));
 




