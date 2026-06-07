// singleton  : it is created using constructor not using literal syntax

// Object.create() : it is used to create a new object with the prototype of the object passed as an argument


// object literals


const mySym = Symbol("key1")

const user = {
    name: "Ayush",
    "full name": "Ayush Tambe",
    [mySym] : "myKey1",
    age: 20,
    location: "New York",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"],
    email: "ayush@gmail.com",

}

// console.log(user["email"]);
// console.log(user.email);
// console.log(user["full name"]);
// console.log(user[mySym]);
// console.log(typeof user[mySym]);
// console.log(typeof mySym);


user.email = "ayushtambe@ac.in"

// Object.freeze(user) // Prevents Modification 
// console.log(user.email);

// user.email = "ayushtambe23@gmail.com"
// console.log(user.email);


user.greetings = function(){
    console.log("Hello brothers");
    
}
// console.log(user);

user.greetings2 = function(){
    console.log(`hello user , ${this.name}`); // i can also use {user.name}
    
}

console.log(user.greetings());
console.log(user.greetings);
console.log(user.greetings2());


