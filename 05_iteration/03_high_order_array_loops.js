// for of

// ["","",""]
// [{},{},{}]

const arr = [ 1,2,3,4,5]

// for (const i of arr) {
//     console.log(i);
   
// }
// const greetings = " hello world!"

// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
// }

// Maps

const map = new Map()
map.set('IN',"india")
map.set('USA',"United states of Anerica")
map.set('IN',"india")

console.log(map);


for (const [key, value] of map) {
    console.log(key,":" ,value);
    
    
}

const myObj = {
    game1:'NFS',
    game2:'SpiderMan'

}

// for (const [key,value] of myObj) {
//     console.log(key,":", value);
        
// }

