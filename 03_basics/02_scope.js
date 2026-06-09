// "{}"  this is called scope


let a = 100 // this is global scope

if (true) {
  let a = 10;  // this is block scope
  const b = 20;
//   console.log(a);
  
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const userName = "ayush"

    function two(){
        const website = "Youtube"
        // console.log(userName);
        
    }
    // console.log(website);
    two()
    // console.log(website);

}
one()

if (true){
    const userName= "Ayush"
    if(userName === "Ayush"){
        const website = " Youtube"
        // console.log(userName + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++++ Intersting ++++++++++++

console.log(addOne(8))
function addOne (num){
    return num + 1

}
// addOne(8)

// addTwo(4)
const addTwo = function (num){  // it is called "expression function"

    return num + 2
}

addTwo()