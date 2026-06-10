const myObj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby"
}

// forin  loop

for (const key in myObj) {  
    // console.log(`${key} shortcut of for ${myObj[key]}`);
    
}

const programming = ["js","rb", "py","cpp"]


for (const key in programming) {
//    console.log(programming[key]);
 
    }

const map = new Map()
map.set('IN',"india")
map.set('USA',"United states of Anerica")
map.set('IN',"india")

for (const key in map) {
    console.log(key);
    
}

