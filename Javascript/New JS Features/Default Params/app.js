// function rollDie (numSides){
//     if (numSides === undefined){
//         numSides = 6
//     }
//     return Math.floor(Math.random() *numSides) +1
// }

function rollDie (numSides = 6){
    return Math.floor(Math.random() *numSides) +1
}

function greet (person, msg= "Hey there", punc = "!"){
    console.log(`${msg}, ${person}${punc}`)
}

//Spread in Function Calls
// Math.max(1, 5, 6, 8, 9, 35374)
// 35374
// Math.min(2, 3, 5, 1)
// 1
// const nums = [1, 5, 6, 8, 9, 35374]
// undefined
// nums
// (6) [1, 5, 6, 8, 9, 35374]
// Math.max(nums)
// NaN
// Math.max(...nums)
// 35374
// nums
// (6) [1, 5, 6, 8, 9, 35374]
// Math.min(...nums)
// 1
// console.log("as", "hsk", "skdf", "jfkdl")
// as hsk skdf jfkdl
// undefined
// console.log(nums)
// (6) [1, 5, 6, 8, 9, 35374]
// undefined
// console.log(...nums)
// 1 5 6 8 9 35374
// console.log("hello")
// hello
// undefined
// console.log(..."hello")
// h e l l o
// console.log("h", "e", "l", "l", "o")
// h e l l o
