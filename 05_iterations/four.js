const MyObject = {
    js : "javascript",
    py : "python",
    rb : "ruby"
}

for (const key in MyObject) {
    // console.log(`${key} shortcut is for ${MyObject[key]}`);
}

const map = new Map()
map.set("NP", "Nepal")

for (const key in map) {
    console.log(key);
}