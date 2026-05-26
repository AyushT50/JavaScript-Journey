const name = "Ayush" 
const repoCount = 50
// console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}!`);

const gameName = new String ('GTA')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('T'));


const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "  Ayush  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/Ayush%20Tambe"

console.log(url.replace('%20', '-'));

console.log(url.includes('Nilesh'))