// Imediately invoked function expression 

// use : 1. to imediately inovke 
//       2. to decrese the pollution of global scope
(function chai (){
    // named IIFE
    console.log(`DB connected`);
})();

// ();  // to run second code you have to use ";" after "()"



( (name) => {
    
    console.log(`DB connected ${name}`);
})('Ayush');