// function callTwice(func){
//     func();
//     func();
// }

// function callTenTimes(f){
//     for (let i=0; i<10; i++){
//         f()
//     }
// }

// function rollDie (){
//     const roll = Math.floor(Math.random() *6) + 1
//     console.log(roll)
// }

// callTwice(rollDie)

// function makeMysteryFunc (){
//     const rand = Math.random();
//     if (rand>0.5){
//         return function (){
//             console.log ("CONGRATS, I AM A GOOD FUNCTION!")
//             console.log ("YOU WIN A MILION DOLLARS!!")
//             } 
//         }  else {
//             return function (){
//                 alert ("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
//                 alert ("STOP TRYING TO CLOSE THIS WINDOW!")
//                 alert ("STOP TRYING TO CLOSE THIS WINDOW!")
//                 alert ("STOP TRYING TO CLOSE THIS WINDOW!")
//                 alert ("STOP TRYING TO CLOSE THIS WINDOW!")
//                 alert ("STOP TRYING TO CLOSE THIS WINDOW!")
//             }
//         }
// }

// function makeBetweenFunc (min, max){
//     return function (num){
//         return num >=min && num<= max;
//     }
// }

// const isChild = makeBetweenFunc(0,18)
// undefined
// isChild
// ƒ (num){
//         return num >=min && num<= max;
//     }
// isChild(40)
// false
// isChild(6)
// true
// const isAdult = makeBetweenFunc(19,64)
// undefined
// const isSenior = makeBetweenFunc(65,120)
// undefined
// isSenior(40)
// false
// isSenior(90)
// true
// isAdult(90)
// false
// isAdult(50)
// true

//makeBetweenFunc(50, 100)
// function isBetween(num){
//     return num >= 50 && num<= 100
// }
// function isBetween2(num){
//     return num >= 1 && num<= 10
// }