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
// function lastElement (array){
//     if (array.length === 0){
//         return null;
//     } else {
//        return array[array.length-1];
//     }
// }

//Capitalize Exercise
// function capitalize (str){
//     return str.substring(0, 1).toUpperCase() + str.slice(1);
// }

//Sum Array Exercise
// function sumArray (arr){
//     let sum=0;
//     for (let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

//Days Of The Week Exercise
// const daysWeek = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3:'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'};
// function returnDay (num){
//    if (num<1 || num>7){
//        return null;
//    } 
//    return daysWeek[num]
// }

