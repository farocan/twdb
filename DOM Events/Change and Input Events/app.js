const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener ("change", function(e){
//     console.log("JDKFFHHSSNSNMR")
// })

input.addEventListener ("input", function(e){
    h1.innerText = input.value;
})

//Input Event Practice 
// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('input', () => {
//   if (input.value === '') {
//     h1.textContent = 'Enter Your Username';
//   } else {
//     h1.textContent = `Welcome, ${input.value}`;
//   }
// });

