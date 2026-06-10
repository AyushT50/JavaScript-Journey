const coding =["js","ruby","java","py"]

// coding.forEach( function (item){
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index , arr) => {
//     console.log(item,index,arr);
    
// })

const myCode = [
    {
        LanguageName : "Javascript",
        languageFileName : "js",
    },
    {
        LanguageName : "python",
        languageFileName : "py",
    },
    {
        LanguageName : "c++",
        languageFileName : "cpp",
    }
]
myCode.forEach( (item) =>{
    console.log(item.languageFileName);
    
})
