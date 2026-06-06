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

console.log("A", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2);
