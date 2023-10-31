//iterating in objects -- here forin loop is used
const myObj ={
    game1 : 'NFS',
    game2 : 'Spiderman'
 }

 for (const key in myObj) {
    // console.log(key);        //it pritns only  keys
 }


 for (const key in myObj) {
    // console.log(`${key} game is ${myObj[key]}`);       
 }


 //forin in array
 const progLang = ['js', 'rb','py','java']

 for(const key in progLang){
    console.log(progLang[key]);                         //if we write key -- it print indexes
 }



 //forin loop in map
 //it doesn't work in map bcoz map is not iterable