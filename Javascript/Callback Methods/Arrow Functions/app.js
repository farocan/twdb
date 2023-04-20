// const add = function (x,y){
//     return x + y;
// }

// const add = (x,y) => {
//     return x + y;
// }

// //If we only have a single parametre (x), we don't need to add parenthesis.
// const square = x => {
//     return x * x;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() *6) +1
// }

//Arrow Function Exercise***
// const greet = name => {
//     return `Hey ${name}!`
// }


//Implicit return - We can remove the return keyword and replace {} for ()
//Only applicable for single expressions-one line.
// const rollDie = () => (
//     Math.floor(Math.random() *6) +1
//)
//We can add it in one line and then we don't need the parentesis
// const add = (a, b) => a + b

const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
]

// const newMovies = movies.map(function(movie){
//     return `${movie.title}-${movie.score/10}`
// })

const newMovies = movies.map(movie=> (
    `${movie.title}-${movie.score / 10}`
))