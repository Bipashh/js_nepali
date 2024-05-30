function Myfunction() {
    console.log("B")
    console.log("I")
    console.log("P")
    console.log("A")
    console.log("S")
    console.log("H")
}
// Myfunction()

// function sum(a,b) {
//    console.log(a+b)
// }

function sum(a,b) {
    // let result = a + b
    // return result
    return a + b
    console.log("Bipash");//after result nothing will work
 }
const result = sum(3,4)

// console.log("Result: ", result);

function loginUserMessage(username = "bps"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("Bipash"))
console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){// spread and rest both but depent how its being used
    console.log(val1, val2);
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

const user = {
    name : "Bipash",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    name: "Bipu",
    price: 299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500]));