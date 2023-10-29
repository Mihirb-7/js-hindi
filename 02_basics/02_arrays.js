const marvel_heros = ["thor" , "Ironman" ,"spiderman"]
const dc_heros = ["superman" , "flash" ,"batman"]

//marvel_heros.push(dc_heros)  // marvel_heros array takes as a 4th element as a dc_heros array ,(nested array)

// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)   //used to join 2 strings
console.log(allHeros);

//another method  -- spread operator
const all_hero = [...marvel_heros , ...dc_heros]
console.log(all_hero);

const another_array = [1,2,3,[4,5,6] ,7, [6,7,[4,5]]]
const another_array2 = another_array.flat(Infinity);   //convert all the indepth nested array into single array 
console.log(another_array2);


console.log(Array.isArray("Hitesh"))     //chekcing it is array  or not
console.log(Array.from("Hitesh"))     //converting into array 
console.log(Array.from({name: "Hitesh"}))     //here it is confused that it has to make array of string or array of obj(key , value) so we have to specify that 






