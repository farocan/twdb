// let totalEggs = 0;
// function collectEggs (){
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs ();
// console.log(totalEggs);

// let bird = "Scarlet Macaw";
// function birdWatch(){
//     // let bird = "Great Blue Heron";
//     console.log(bird);
// }
// birdWatch();

//Block Scope
//Blocks are not functions, but conditionals or loops, etc.
// let radius = 8;
// if (radius>0){
//     const PI = 3.14159;
//     let msg = "HIII!"
// }

// console.log(radius);
// console.log(PI);

// for (let i=0; i<5; i++){
//     let msg = "HDJLKFLFMNS";
// }

// console.log(msg);
// console.log(i);

//Lexical Scope
//A nested or inner function has access to its parent's things.
//It doesn't work the other way around.
// function bankRobbery() {
//     const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"]
//     function cryForHelp() {
//         let color = "purple";
//         function inner(){
//         for (let hero of heroes){
//             console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
//         }
//     }
//     inner();
//     }
//     cryForHelp();
// }
