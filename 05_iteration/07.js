// ++++++++++++++++ MAP ++++++++++++++++


// const myNums = [1,2,3,4,5,6,7,8]

// // const newNums= myNums.map( (num) => num + 10)

// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)
// console.log(newNums);


// +++++++++++++++++ Reduce +++++++++++++


const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)


// const myTotal = myNums.reduce((acc,currval) => acc + currval, 0 )
// console.log(myTotal);

const shoppingCourse = [
    {
        itemName : "js",
        price:2999
    },
    {
        itemName : "Web developement ",
        price:5999
    },
    {
        itemName : "IOS development",
        price:9999
    },
]

const add = shoppingCourse.reduce((acc,item) => acc+ item.price,0)

console.log(add);
