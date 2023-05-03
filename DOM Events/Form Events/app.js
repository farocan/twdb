const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("cats");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    cats.append(newLI);
    input.value="";
});

//Form Events Exercise
// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
// const form = document.querySelector('form');
// const product = document.querySelector("#product");
// const quantity = document.querySelector("#qty");

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     const name = product.value;
//     const number = quantity.value;
//     const newLI = document.createElement("li");
//     newLI.innerText = `${number} ${name}`;
//     list.append(newLI);
//     product.value= "";
//     quantity.value= "";
    
// })



