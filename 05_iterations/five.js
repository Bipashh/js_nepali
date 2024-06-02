const coding = ["js", "rust", "python", "java"]

// coding.forEach( function (item){
//     console.log(item)
// })

// coding.forEach ( (item)=> {
//     console.log(item)
// })

// function printme(item, index, array) {
//     console.log(item, index, array)
// }
// coding.forEach(printme)

const myCoding = [
    {
        languageName: "javascript",
        languagefileName : "js"

    },
    {
        languageName: "java",
        languagefileName : "java"

    },
    {
        languageName: "python",
        languagefileName : "py"
    }
]
myCoding.forEach( (item)=> {
    console.log(item.languageName);
})