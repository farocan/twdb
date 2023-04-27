//getElementById Practice

// const image = document.getElementById("unicorn")
// const heading = document.getelementById("mainheading")

//Get elements by tag name 
// const allImages = document.getElementsByTagName("img")

// for (let img of allImages){
//     console.log(img.src)
// }

// for (let img of allImages){
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
// }

// document.getElementsByTagName("p")
// HTMLCollection(2) [p, p]
// document.getElementsByTagName("div")
// HTMLCollection(2) [div#toc, div.toctitle, toc: div#toc]
// document.getElementsByTagName("b")
// HTMLCollection(3) [b, b, b]
// document.getElementsByTagName("a")
// HTMLCollection(24) [a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a.mw-redirect, a, a, a, a]

//Get elements by class name

//  const squareImages = document.getElementsByClassName("square");

//  for (let img of squareImages){
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
//  }

//querySelector
//It gives us only the first match

// document.querySelector("p")
// document.querySelector("#banner")
// document.querySelector(".square")
// document.querySelector("img:nth-of-type(2)") //to get the second img

// document.querySelectorAll("p")

// document.querySelectorAll("a")
// NodeList(24) [a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a.mw-redirect, a, a, a, a]
// document.querySelectorAll("p a") // getting all ancor tags inside a paragraph
// NodeList(17) [a, a, a, a, a, a, a, a, a, a, a, a, a.mw-redirect, a, a, a, a]

// const links = document.querySelectorAll("p a")
// for (let link of links){
//     console.log(link.href)
// }

//querySelector Practice

// const doneTodos = document.querySelectorAll(".done")

// const checkbox = document.querySelector('input[type="checkbox"]')


