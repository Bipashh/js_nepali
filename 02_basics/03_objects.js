// singleton> created by constructor and if create by literal it cant be singleton

// Object.create this way is custroctor

// object literals
const mysym = Symbol("Key1")

const JsUser = {
    name: "Bipash",
    "full name" : "Bipash Shakya",
    [mysym]: "mykey1",
    age : 19,
    email : "bpashakya123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: [ "Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "bipash@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "bipash@microsoft.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User")
}

console.log((JsUser.greeting));