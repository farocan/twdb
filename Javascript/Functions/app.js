// function singSong () {
//     console.log("DO")
//     console.log("RE")
//     console.log("MI")
// }
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

//Heart Function Exercise
// function printHeart () {console.log("<3")}
// printHeart ()

//Arguments
// function greet(firstName) {
//     console.log(`Hey there, ${firstName}!`)
// }

//Rant Exercise
// function rant (message){
//     console.log (`${message.toUpperCase()}`)
//     console.log (`${message.toUpperCase()}`)
//     console.log (`${message.toUpperCase()}`)
// }

// rant ("I hate beets")

//Functions with multiple Arguments
//  function greet(firstName, lastName){
//      console.log(`Hey there, ${firstName} ${lastName[0]}.`)
//  }

//  function repeat (str, numTimes){
//     let result = "";
//     for (let i=0; i< numTimes; i++){
//         result += str;
//     }
//     console.log (result);
//  }

//  repeat ("$", 5)
//  $$$$$
// undefined
// repeat ("I LOVE MY CHICKENS! ", 5)
//  I LOVE MY CHICKENS! I LOVE MY CHICKENS! I LOVE MY CHICKENS! I LOVE MY CHICKENS! I LOVE MY CHICKENS! 
// undefined

//Multiple Args Exercise
// function isSnakeEyes (num1, num2){
//     if (num1===1 & num2===1){
//         console.log ("Snake Eyes!")
//     } else {
//         console.log("Not Snake Eyes!")
//     }
// }

//Return stops the execution of our function.

// function add (x, y){
//     if (typeof x !== "number" || typeof y !== "number"){
//         return false;
//     }
//     return x + y;
// }

// add(add(1,5), 3)
// 9

//Return Value Practice
// function multiply (num1, num2){
//     return num1*num2;
// }
// multiply(2,3)
// 6

// Practice: isShortsWeather Function
// function isShortsWeather (temperature){
//     if (temperature >= 75){
//         return true;
//     } else {
//     return false;
//     }
// }

// Last Element Exercise
function lastElement([num1, num2, num3]){
    if (lastElement.length=== 0){
        return null;
    }
    return lastElement[lastElement.length-1];
}
