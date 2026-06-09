// "{}"  this is called scope


let a = 100 // this is global scope

if (true) {
  let a = 10;  // this is block scope
  const b = 20;
  console.log(a);
  
}

console.log(a);
// console.log(b);
// console.log(c);
