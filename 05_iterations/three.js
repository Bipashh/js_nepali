let arr = [1, 2, 3, 4, 5]

for (const array of arr) {
    // console.log(array)
}

let greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//Maps

const map = new Map()
map.set("NP", "Nepal")
map.set("IN", "India")
map.set("PK", "Pakistan")

console.log(map);
for (const [key, Value] of map) {
    console.log(key, ":-", Value)
}

const MyObject = {
    'game1' : "PUBG",
    'game2' : "efootball"
}
// for (const [key, value] of MyObject) {
//     console.log(key, "-", value)
// }