function myName (){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("!");
    
}
// myName()

// function addTwoNumbers (num1,num2){ // this are called parameters 
//    console.log(num1 + num2);
   
// }

// addTwoNumbers(3,3) // this are called arguments 


function addTwoNumbers (num1,num2){ 

    // let result = num1 + num2
    // return(result)
    // console.log("Ayush"); // it will not print because it wrote after return function 
    return num1 + num2 
}

// const result = addTwoNumbers(2,3)
// console.log(result);

function loginUserMsg (userName = "sam"){
    if(!userName){
        console.log("please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMsg("AYUSH"))

