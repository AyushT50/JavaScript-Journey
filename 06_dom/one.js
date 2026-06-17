// alert("Hello Ayush!")

// let heading= document.getElementById("heading");

//let heading= document.getElementsByClassName("heading");
// console.dir(heading);

// let myClass = document.getElementsByClassName("myClass");

// console.dir(myClass);

// console.dir(document.getElementsByTagName("h3"));

// console.log(document.querySelector("h1")); // return first element
// console.log(document.querySelectorAll("h1")); // return node list 

// let firstEl = document.getElementById("heading");
// console.log(firstEl);

// ++++++++++ DOM Manipulation ++++++++++++++

// tagName : return tag for element nodes 
// innerText : return the text content of the element and its childern
// innerHtml : return the plain text or html conten of the element
// textContent : return the hidden content of the element 


// let div= document.querySelector("div")
// console.log(div);

// let heading = document.querySelector("h1")
// console.log(h1);


// let a = document.querySelector("h2").append(" from great Youtuber")
// let a = document.querySelector("h2")

// a.innerText = a.innerText + " from greate Youtuber!"

// console.dir(a.innerText);




// let div = document.querySelectorAll("div")
// // div[0].innerText = div[0].innerText + " hello"

// div[0].innerText += " Hello"
// console.dir(div[0].innerText)


// div[1].innerText += " hii"
// console.dir(div[0].innerText)


// div[2].innerText += " hey"
// console.dir(div[0].innerText)





let div = document.querySelectorAll("div")

let idx = 1
for(divs of div){
    divs.innerText += ` = new unique value ${idx}`
    idx++
}
