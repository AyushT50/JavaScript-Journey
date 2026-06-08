// const tinderUser = new Object ()

const tinderUser = {
    id:123,
    name:"Ayush",
    isLoggedIn: false

}
 
// console.log(tinderUser);

const regularUser = {
    email :"some@gamil.com",
    fullName: {
        userFullname: {
            firstName : "Ayush",
            lastName : "Tambe"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj2 = {obj1 , obj2}

// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);

// const obj3 ={...obj1, ...obj2} // use prenthesis not square brackets 
// console.log(obj3);


const user =[
    {
        id:1,
        email:"ayushtameb@.com"
    },
    {

    }
]

user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



const course = {
    courseName : "Hindi js",
    price : 999,
    courseInstrcutor : "AYUSH",

}


// course.courseInstrcutor 

// const {courseInstrcutor} = course
// const {courseInstrcutor : Instrcutor} = course
// console.log(courseInstrcutor);
// console.log(Instrcutor);


// const navbar = ({company}) => {

// }

// navbar (company = "AYUHS")


