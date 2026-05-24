// # Primitive

// 7 types : String ,Number , boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 32345518379072779n

// # Reference Type (Non Primitive)

// Array , obejects , Functions

const heros = ["iron man" , "thor", "Hulk"];
let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("hello world!");
    
}

console.log(typeof outsideTemp);
console.log(typeof myFunction);



// +++++++++++++++++ Memory +++++++++++++++++++++++

// Stack (primitive) , Heap (Non primitive)

let myName = "Ayush"
let anotherName = "Ram"
anotheName = "sham"

console.log(anotherName);
console.log(myName)

let userOne ={
    userEmail:"user@gmail.com",
    userUpi: "user@ybl",

}

let userTwo = userOne

userTwo.userEmail = "user2@gmail.com"


console.log(userOne);
console.log(userTwo);