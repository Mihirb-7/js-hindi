let myName = "hitesh   "        //to ignore spaces we use trim fn
let myChaannel = "sucess      "

// console.log(myName.trueLength) ;            here we are trying to done the same trim functionality using own method trueLength


let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){                        //everything like string , array etc is paased throungh objecct  , object is top level heirarchy
    console.log(`hitesh is present in all objects`);          //we are adding one property to object
}

Array.prototype.heyHitesh = function(){             //adding property to array
    console.log(`hitesh syas helo`);
}



//both will work
heroPower.hitesh()
myHeros.hitesh()


myHeros.heyHitesh()      //here array posses the added property
// heroPower.heyHitesh()    //here object doesn't possed the added property of array bcoz object is parent in heirarchy


//inheritance

const Users = {
    name : "User1",
    email : "user1@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvaiilable : false
}

const TAsupport = {
    makeAssignment : 'Js assignment',
    fullTime : true,
    __proto__: TeachingSupport          //inheritance
}


Teacher.__proto__ = Users   //inheritance


//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)




// making trueLength method that we have taked in the starting of th page

let anotherUsername = "jhdhhf      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim() .length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()




