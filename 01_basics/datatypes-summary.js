// Primitive

// 7 types : String, Number, Boolean , null, undefined, symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 998178268761798172n

//Reference (Non Primitive)

// Array, Object, functions

// const heros = ["shaktiman", "naagraj", "doga"];

// let myObj = {
//     name:"Bipash",
//     age:20,
// }

// const myfunction = function() {
//     console.log("Hello Workd");
// }

// ------------------------------------------------

// Stack (Primitive), Heap (Non=Primitive)

let myYoutubename = "BipashShakya"

let anothername = myYoutubename
anothername="Bipashandcode"

console.log(myYoutubename);
console.log(anothername);
// ***********************************************************
let userOne = {
    email : "bpashakya123@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne);
console.log(userTwo);