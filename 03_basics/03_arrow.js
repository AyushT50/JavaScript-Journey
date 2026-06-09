// "this" keyword is used for current context/object

const user ={
    userName : "AYUSH",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to website!`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username= "Ayush" //////// we are not able to use this in function 
//     console.log(this.username);
    
// }

// chai()

// const chai = function (){
//     let username = "AYUSH"
//     console.log(this.username);
    
// }

const chai = () => { // arrow function
    let usename = "ayush"
    console.log(this);
}
chai ()

// const addTwo = (num1,num2) => {
//     return num1 + num2

// }

// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>   (num1 + num2) // implicit return
const addTwo = (num1,num2) =>   ({username:"ayush"}) 



console.log(addTwo(3,4));

