// let count = 0;
// while(count<10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code...");
// while(guess !== SECRET) {
//     guess = prompt("Enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!");

// let input = prompt("Hey, say something!")
// while(true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!");

// for (let i=0; i<1000; i++) {
//     console.log(i);
//     if (i===100) break;
// }

// Guessing Game
// let maximum = parseInt (prompt ("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt (prompt ("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1

// let guess = parseInt (prompt("Enter your first guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess=== "q") break;
//     attempts ++;
//     if (guess> targetNum) {
//         guess = prompt ("Too high! Enter a new guess:");
//     } else {
//         guess = prompt ("Too low! Enter a new guess:");
//     }
// }
// if (guess === "q") {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log ("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`);
// }

// The For...Of Loop
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for (let i=0; i< subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}

// For...Of Practice 

const numbers = [1,2,3,4,5,6,7,8,9]; 
for (let square of numbers) {
    console.log(square*square)
}



