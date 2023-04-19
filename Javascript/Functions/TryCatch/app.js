
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!!")
// }

// console.log("AFTER!")

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    } catch (e){
        console.log("Please pass a string next time!")
    }
}

// yell("hello")
// HELLOHELLOHELLO
// undefined
// yell(474)
// Please pass a string next time!
// undefined
// yell(true)
// Please pass a string next time!
// undefined

//***Next: exercise 45, 46, section22 */