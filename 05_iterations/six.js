// const coding = ["js", "python", "java", "cpp", "ruby"]

// const values = coding.forEach( (item)=> {
//     console.log(item);
//     return item
// })

// console.log(values)

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = mynum.filter((num)=> num > 4)
// console.log(newNums)
// const newNums = mynum.filter((num)=> {
    
//     return num>4
// })

// const newNums = []

// mynum.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })


// console.log(newNums)

const books = [
    {title: 'Book One', genre: "Fiction", publish: 1987, edition:  2012},
    {title: 'Book two', genre: "Non-Fiction", publish: 1995, edition:  2015},
    {title: 'Book three', genre: "History", publish: 1983, edition:  2001},
    {title: 'Book four', genre: "Fiction", publish: 1990, edition:  2006},
    {title: 'Book Five', genre: "Science", publish: 1988, edition:  2003},
    {title: 'Book six', genre: "History", publish: 1985, edition:  2010},
    {title: 'Book seven', genre: "Fiction", publish: 1992, edition:  2008},
    {title: 'Book eight', genre: "History", publish: 1989, edition:  2005},
];

const userbooks = books.filter((bk)=> {
return bk.genre === "History" && bk.publish <=2000
})
console.log(userbooks)