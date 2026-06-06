// arrays 

const myArray = [1,2,3,4,5]
const myHeroes= ["iron man", "thor", "hulk"]

const myArray2 = new Array(1,2,3,4,5)
// console.log(myArray);
// console.log(myHeroes);

// console.log(myArray[0]);

// Array methods 
 
myArray.push(6)
myArray.push(7)
myArray.pop()

myArray.unshift(0)
myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray);



// slice and splice

// console.log("A", myArray);

const myn1 = myArray.slice(1,3)

// console.log(myn1);
// console.log("B", myArray);

const myn2 = myArray.splice(1,3)
// console.log("C", myArray);
// console.log(myn2);




// Array Part 2

const marvel_heros = ["iron man", "thor", "hulk"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);


// const all_new_heros = marvel_heros.concat(dc_heros)
// console.log(all_new_heros);


const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name: "Ayush",
    age: 20,
    city: "New York",
})); 

let score1 = 100

let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

console.log(Object.keys({name:"Ayush",
    age: 20,
    city: "New York",
}));

console.log(Object.values({name:"Ayush",
    age: 20,
    city: "New York",
}));

console.log(Object.entries({name:"Ayush",
    age: 20,
    city: "New York",
}));
