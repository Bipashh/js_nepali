// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Bipu"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "bpashakya123@gmail.com",
    fullname : {
        userfullname: {
            firstname :"Bipash",
            lastname : "Shakya"}
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "b  @gmail.com"
    },
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));

// D structuring
const course={
    coursename : "js in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const{courseInstructor} = course

console.log(courseInstructor)

