const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener ("change", function(e){
//     console.log("JDKFFHHSSNSNMR")
// })

input.addEventListener ("input", function(e){
    h1.innerText = input.value;
})

//Input Event Practice ***************
// const h1 = document.querySelector("h1");
// const input = document.querySelector("input");

// input.addEventListener("input", function(e){
//     h1.innerText = `Hello ${input.value}`
    
// })

// ******************