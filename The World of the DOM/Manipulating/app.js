// document.querySelector("h1")
// <h1>​Silkie Chickens​</h1>​
// const h1 = document.querySelector("h1")
// undefined
// console.dir(h1)
// h1

// document.querySelector("p").innerText
// 'The Silkie (sometimes spelled Silky) is a breed of chicken named for its atypically fluffy plumage, which is said to feel like silk and satin. The breed has several other unusual qualities, such as black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are often exhibited in poultry shows, and appear in various colors. In addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly temperament. It is among the most docile of poultry. Hens are also exceptionally broody, and care for young well. Though they are fair layers themselves, laying only about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet, should be handled with care.'
// document.querySelector("p").innerText = "lolololol"
// 'lolololol'

//textContent- includes everything
//innerText - it is sensitive to what it's showing at the moment

// const allLinks = document.querySelectorAll("a");

// for (let link of allLinks){
//     link.innerText = "I AM A LINK!!!"
// }

// document.querySelector("h1").innerText = "<i>kfjdhsh</i>"
// '<i>kfjdhsh</i>'

// document.querySelector("h1").innerText
// 'Silkie Chickens'
// document.querySelector("h1").innerHTML
// 'Silkie Chickens'

// document.querySelector("h1").innerHTML = "<i>kfjdhsh</i>"

//innerHTML - is the only one we can use to add elements inside (not innerText nor textContent)
// document.querySelector("h1").innerHTML += "<sup>kfjdhsh</sup>"
// '<i>kfjdhsh</i><sup>kfjdhsh</sup>'

//Pickles Exercise
// document.querySelector("span").innerText="Disgusting"