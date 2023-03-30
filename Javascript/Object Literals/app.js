const person = {firstName: "Mick", lastName: "Jagger"} // undefined
> person // { firstName: 'Mick', lastName: 'Jagger' }
const kitcehSink = { favNum: 36585895, isFunny: true, colors: ["red", "orange"]} // undefined

// Object Exercise 1
const product = {name: "Gummy Bears", inStock: true, price: 1.99, flavors: ["grape", "apple", "cherry"]}

const nums = [23, 45, 99] // undefined
nums[1] // 45
const person = {firstName: "Mick", lastName: "Jagger"} // undefined
person ["firstName"] // 'Mick'
const kitcehSink = { favNum: 36585895, isFunny: true, colors: ["red", "orange"]} // undefined
kitcehSink ["colors"] // [ 'red', 'orange' ]
kitcehSink ["ggg"] // undefined
person.firstName // 'Mick'
const years = {1999: "GOOD", 2020: "BAD"} // undefined
> years // { '1999': 'GOOD', '2020': 'BAD' }
> years ["1999"] // 'GOOD'
> years [1999] // 'GOOD'
const dumbdumb = {true: "dat", null: "ffghgd"} // undefined
> dumbdumb ["true"] // 'dat'
> dumbdumb.null // 'ffghgd'
> person // { firstName: 'Mick', lastName: 'Jagger' }
> person.lastName // 'Jagger'
> person ["lastName"] // 'Jagger'
> person [lastName] // Uncaught ReferenceError: lastName is not defined
> person ["first" + "Name"] // 'Mick'
let birthyear = 2020; // undefined
years.birthyear // undefined
> birthyear // 2020
> years [birthyear] // 'BAD'

// Object Access Exercise
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
let fullAddress = restaurant["address"] + ", " + restaurant ["city"]+ ", " + restaurant ["state"] + ", "+ restaurant["zipcode"] // undefined
fullAddress // '99 Johnson Ave, Brooklyn, NY, 11206'

const midterms = {danielle: 96, tomas: 78} // undefined
midterms // { danielle: 96, tomas: 78 }
danielle // Uncaught ReferenceError: danielle is not defined
midterms.tomas // 78
midterms.tomas = 79; // 79
midterms.tomas // 79
midterms.tomas = "C+"; // 'C+'
midterms ["danielle"] = "A" // 'A'
midterms // { danielle: 'A', tomas: 'C+' }
midterms.ezra = "B+" // 'B+'
midterms // { danielle: 'A', tomas: 'C+', ezra: 'B+' }
midterms ["antonio"] = "A-" // 'A-'

// Arrays + Objects
const comments = [ {username: "Tammy", text: "lolololol", votes: 9}, {username: "FishBoi", text: "glub glub", votes: 47585939}] // undefined
> comments [1] // { username: 'FishBoi', text: 'glub glub', votes: 47585939 }
> comments [1].text // 'glub glub'


