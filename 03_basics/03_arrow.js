// const user = {
//     username : "Bipash",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }

// }

// user.welcomeMessage()
// user.username = "Bipu"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Bipash"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Bipash"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
// return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => ({username: "Bipash"})




console.log(addTwo(3,4));