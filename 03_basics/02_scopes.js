// var c = 300
// let a = 300
// if (true){ // global scope
//     let a = 10
//     const b = 20
//    console.log("Inner: ", a);
// }



//  console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username  = "Bipashg"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
    // console.log(website);

    // two()

// }

// one()

if (true) {
    const username = "Bipash"
    if (username === "Bipash"){
        const website = " youtube"
        // console.log(username + website);
    }
//  console.log(website);
}

//  console.log(username)


//++++++++++++++++++++intersting++++++++++++++++++++++++
console.log(addone(3))

function addone(num){
    return num + 1
}


addtwo(5)
const addtwo = function(num){
    return num + 2
}