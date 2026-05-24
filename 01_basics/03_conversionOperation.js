let score = "33"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1
// false => 0
// null => 0
// undefined => NaN
// "123" => 123
// "123abc" => NaN
// "123abc" => NaN


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "Yash" => true
// "" => false
// " " => true

// ******************* Operations *******************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);  // modulo operator
// console.log(2**2); // 2^2 = 4

let str1 = "hello"
let str2 = " Ayush"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log("1" + 2 + "2");

// console.log((1 + 2) * (3 + 4)); // use parenthesis to change the order of operations

// console.log(true);
// console.log(+true);
// console.log(+"");
// console.log(+" ");


let a =5

console.log(++a); // prefix (first use value then increase it!)
console.log(a++); //postfix (first increses value then use it!)
