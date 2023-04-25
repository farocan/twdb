// function sum (){
//     return arguments.reduce((total, el) => total + el) 
// }

//Arguments acts like an array but it is not a function

// function sum (...nums){
//     console.log(nums)
// }

// function sum (...nums){
//     return nums.reduce((total, el) => total + el)
// }

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

// raceResults("Tammy", "Todd", "Tina", "Trevor", "Travis")
//  GOLD MEDAL GOES TO: Tammy
//  SILVER MEDAL GOES TO: Todd
// AND THANKS TO EVERYONE ELSE: Tina,Trevor,Travis