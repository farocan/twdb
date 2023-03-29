const person = {firstName: "Mick", lastName: "Jagger"} // undefined
> person // { firstName: 'Mick', lastName: 'Jagger' }
const kitcehSink = { favNum: 36585895, isFunny: true, colors: ["red", "orange"]} // undefined

// Object Exercise 1
const product = {name: "Gummy Bears", inStock: true, price: 1.99, flavors: ["grape", "apple", "cherry"]}

const nums = [23, 45, 99] // undefined
> nums[1] // 45
> const person = {firstName: "Mick", lastName: "Jagger"} // undefined
> person ["firstName"] // 'Mick'
> const kitcehSink = { favNum: 36585895, isFunny: true, colors: ["red", "orange"]} // undefined
> kitcehSink ["colors"] // [ 'red', 'orange' ]
> kitcehSink ["ggg"] // undefined
> person.firstName // 'Mick'
const years = {1999: "GOOD", 2020: "BAD"} // undefined
> years // { '1999': 'GOOD', '2020': 'BAD' }
> years ["1999"] // 'GOOD'
> years [1999] // 'GOOD'
> const dumbdumb = {true: "dat", null: "ffghgd"} // undefined
> dumbdumb ["true"] // 'dat'
> dumbdumb.null // 'ffghgd'
> person // { firstName: 'Mick', lastName: 'Jagger' }
> person.lastName // 'Jagger'
> person ["lastName"] // 'Jagger'
> person [lastName] // Uncaught ReferenceError: lastName is not defined
> person ["first" + "Name"] // 'Mick'
> let birthyear = 2020 // undefined
> years.birthyear // undefined
> birthyear // 2020
> years [birthyear] // 'BAD'

// Object Access Exercise

