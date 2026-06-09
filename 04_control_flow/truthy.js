const email =[]
if (email){
    console.log("got user email");
    
}else{
    console.log("don't have user email");
    
}


// falsy Values 

// false, 0, -0, BigInt 0n , "" , null , NaN 

// truthy values
// "0" , 'false' , " " , [], {} , function(){} 


if (email.length === 0) {
    console.log("array is empty");
}
const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ){
    console.log("object is empty ");
    
}

// nullish coalescing operator (??) : null undefined

let vall;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10

val1 = null ?? 10 ?? 15

console.log(val1);


// terniary operator

// condition ? true statement : false statement 

const iceTea = 100 
iceTea >=80 ? console.log("less than 80")  : console.log("more than 80");

