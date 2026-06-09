function myName (){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("!");
    
}
// myName() // it is called "execution" or "Function call"
//myName // it is called "Function reference"

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

function calculateCartPrice(val1,val2, ...num1 ){ // '"..."" is rest operator 
    return num1
}

// console.log(calculateCartPrice(300,200,100));

const user = {
    user : "AYUSH",
    price : "9999"
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.user} and price is ${anyObj.price}`);

}

// handleObject(user)
handleObject({
    user:"Ayush",
    price: 99
})


const myNewArr = [200,300,400]

function returnSecVal (getArr){
    return getArr[1]
}

// console.log(returnSecVal(myNewArr));
console.log(returnSecVal([100,200,1000]));



