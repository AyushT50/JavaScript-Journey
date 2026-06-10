// const coding = ["js","py","java","cpp"]

// const values= coding.forEach( (val) => {
//     console.log(val);
    
// })
// console.log(values);


// const myNums = [1,2,3,4,5,6,7]

// // const newNums = myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => {
//     return num > 4
    
// })

// console.log(newNums);

const students = [
    {
        name: "Ayush",
        course: "Computer Engineering",
        year: 3,
        marks: 85
    },
    {
        name: "Rahul",
        course: "Mechanical Engineering",
        year: 2,
        marks: 72
    },
    {
        name: "Priya",
        course: "Computer Engineering",
        year: 3,
        marks: 91
    },
    {
        name: "Sneha",
        course: "Civil Engineering",
        year: 1,
        marks: 68
    },
    {
        name: "Rohit",
        course: "Computer Engineering",
        year: 2,
        marks: 77
    },
    {
        name: "Anjali",
        course: "Electrical Engineering",
        year: 4,
        marks: 89
    }
];

let topper  = students.filter((items) => items.marks > 80)

topper = students.filter((items) => {
    return items.marks < 80 && items.year === 2
})

console.log(topper);
