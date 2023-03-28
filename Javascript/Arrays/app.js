let days = ["Monday", "Tuesday", "Wednesday"]
> days // [ 'Monday', 'Tuesday', 'Wednesday' ]
> days.length // 3
> days[0] // 'Monday'
> days[2] // 'Wednesday'
> days[1] //'Tuesday'
> days[1][0] // 'T'
> let colors = ["rad", "orange", "yellow"] //undefined
> colors[0] = "red" //'red'
> colors //[ 'red', 'orange', 'yellow' ]
> colors[1] = 70 // 70
> colors // [ 'red', 70, 'yellow' ]
> colors [10] = "indigo" // 'indigo'
> colors // [ 'red', 70, 'yellow', <7 empty items>, 'indigo' ]
> colors.length // 11
> colors [5] // undefined
> let beatles = ["paul", "john", "george"] // undefined
> beatles[3] = "ringo" // 'ringo'
> beatles // [ 'paul', 'john', 'george', 'ringo' ]

// Practice
> const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; // undefined
> leaderboard [1] = "Luna" // 'Luna'
> leaderboard [3] = "Draco" // 'Draco'
> leaderboard // [ 'Harry', 'Luna', 'Hermione', 'Draco' ]

// Array Methods 
let movieLine = ["tom", "nancy"]
> movieLine  [2] = "pablo" // 'pablo'
> movieLine // [ 'tom', 'nancy', 'pablo' ]
> movieLine.push ("oliver") // 4
> movieLine // [ 'tom', 'nancy', 'pablo', 'oliver' ]
> let cat = "blue" // undefined
> cat.toUpperCase() // 'BLUE'
> cat // 'blue'
> movieLine.push("eva") // 5
> movieLine // [ 'tom', 'nancy', 'pablo', 'oliver', 'eva' ]
> movieLine.push("harry", "hermione") // 7
> movieLine // [  'tom',      'nancy',  'pablo',    'oliver',  'eva',      'harry',  'hermione']
> movieLine.pop() // 'hermione'
> movieLine // [ 'tom', 'nancy', 'pablo', 'oliver', 'eva', 'harry' ]
> let person = movieLine.pop() // undefined
> person // 'harry'
> movieLine // [ 'tom', 'nancy', 'pablo', 'oliver', 'eva' ]
> let barbell = [] // undefined
> barbell.push(45) // 1
> barbell.push(45) // 2
> barbell.push(25) // 3
> barbell.push(10) // 4
> barbell.push(2.5) // 5
> barbell // [ 45, 45, 25, 10, 2.5 ]
> barbell.pop() // 2.5
> barbell.pop() // 10
> barbell.pop() // 25 
> barbell.pop() // 45
> barbell // [ 45 ]
>movieLine // [ 'tom', 'nancy', 'pablo', 'oliver', 'eva' ]
> movieLine.shift () // 'tom'
> movieLine // [ 'nancy', 'pablo', 'oliver', 'eva' ]
> let nextPatron = movieLine.shift() // undefined
> nextPatron // 'nancy'
> movieLine // [ 'pablo', 'oliver', 'eva' ]
> movieLine.push("colt") // 4
> movieLine // [ 'pablo', 'oliver', 'eva', 'colt' ]
> movieLine.shift() // 'pablo'
> movieLine.shift() // 'oliver'
> movieLine.shift() // 'eva'
> movieLine.shift() // 'colt'
> movieLine.shift() // undefined
> movieLine.push ("jerry", "deniz", "kevin", "carly") // 4
> movieLine //  [ 'jerry', 'deniz', 'kevin', 'carly' ]
> movieLine.unshift("VIP") // 5
> movieLine // [ 'VIP', 'jerry', 'deniz', 'kevin', 'carly' ]
> movieLine.shift() // 'VIP'

// Push/Pop/Shift/Unshift Practice
> const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; // undefined
> planets.shift() // 'The Moon'
> planets.push("Saturn") // 5
> planets // [ 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn' ]
> planets.unshift("Mercury") // 6
> planets // [ 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn' ]

let cats = ["blue", "kitty"] // undefined
> let dogs = ["rusty", "wyatt"] // undefined
> cats.concat(dogs) // [ 'blue', 'kitty', 'rusty', 'wyatt' ]
> cats // [ 'blue', 'kitty' ]
> dogs.concat(cats) // [ 'rusty', 'wyatt', 'blue', 'kitty' ]
> let comboParty = dogs.concat(cats) // undefined
> comboParty // [ 'rusty', 'wyatt', 'blue', 'kitty' ]
> cats.includes("blue") // true
> cats.includes("Blue") // false
> "Blue".indexOf("B") // 0
> "Blue".indexOf("e") // 3
> "Blue".indexOf("0") // -1
> comboParty // [ 'rusty', 'wyatt', 'blue', 'kitty' ]
> comboParty.indexOf("rusty") // 0
> comboParty.indexOf("kitty") // 3
> comboParty.indexOf("kifjdk") // -1
> comboParty.reverse() // [ 'kitty', 'blue', 'wyatt', 'rusty' ]
> comboParty // [ 'kitty', 'blue', 'wyatt', 'rusty' ]
> comboParty.push("blue") // 5
> comboParty // [ 'kitty', 'blue', 'wyatt', 'rusty', 'blue' ]
> comboParty.indexOf("blue") // 1
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; // undefined
> colors.slice() // [  'red',    'orange',  'yellow', 'green',  'blue',   'indigo',  'violet']
> colors.slice(3) // [ 'green', 'blue', 'indigo', 'violet' ]
> let coolColors = colors.slice(3) // undefined
> coolColors // [ 'green', 'blue', 'indigo', 'violet' ]
> colors // [  'red',    'orange',  'yellow', 'green',  'blue',   'indigo', 'violet']
> colors.slice(2,4) // [ 'yellow', 'green' ]
> colors.slice(0,3) // [ 'red', 'orange', 'yellow' ]
> let warmColors = colors.slice(0,3) // undefined
> warmColors // [ 'red', 'orange', 'yellow' ]
> colors // [ 'red',    'orange', 'yellow', 'green', 'blue',   'indigo', 'violet']
> colors.slice(-3) // [ 'blue', 'indigo', 'violet' ]
> colors // [ 'red',    'orange', 'yellow', 'green', 'blue',   'indigo', 'violet']
> colors.splice(5,1) // [ 'indigo' ]
> colors // [ 'red', 'orange', 'yellow', 'green', 'blue', 'violet' ]
> let days = ["Monday", "Tuesday", "Wednesday"] // undefined
> days // [ 'Monday', 'Tuesday', 'Wednesday' ]
> days.splice(1,2) // [ 'Tuesday', 'Wednesday' ]
> days // [ 'Monday' ]
> colors // [ 'red', 'orange', 'yellow', 'green', 'blue', 'violet' ]
> colors.splice(1,0,"red-orange") // []
> colors // [ 'red', 'red-orange', 'orange', 'yellow', 'green', 'blue', 'violet' ]
> colors.splice(3,0,"yellow-green", "forestgreen") // []
> colors // [ 'red', 'red-orange', 'orange', 'yellow-green', 'forestgreen', 'yellow', 'green', 'blue', 'violet']
> colors.splice(2,2,"DELETED!!") // [ 'orange', 'yellow-green' ]
> colors // [ 'red', 'red-orange', 'DELETED!!', 'forestgreen', 'yellow', 'green', 'blue', 'violet']
> let scores = [1, 70, 100, 2500, 9, -12, 0, 34] // undefined
> scores.sort() // [   -12,  0,  1, 100,  2500, 34, 70,   9]

"hi" === "hi" // true
["hi", "bye"] === ["hi", "bye"] //false
> [1] === [1] // false
> [1] == [1] // false
> [] == [] // false
> let nums = [1, 2, 3] // undefined
> let numsCopy = nums // undefined
> nums // [ 1, 2, 3 ]
> numsCopy // [ 1, 2, 3 ]
> nums.push(4) // 4
> nums // [ 1, 2, 3, 4 ]
> numsCopy // [ 1, 2, 3, 4 ]
> numsCopy.pop() // 4
> nums // [ 1, 2, 3 ]
> numsCopy // [ 1, 2, 3 ]
> nums === numsCopy // true
const gameBoard = [["X", "0", "X"], ["0", "null", "X"], ["0", "0", "X"]] // undefined
> gameBoard [1] // [ '0', 'null', 'X' ]
> gameBoard [1][1] // 'null'
// Nested Arrays Exercise
> const airplaneSeats = [ ...     ['Ruth', 'Anthony', 'Stevie'],...     ['Amelia', 'Pedro', 'Maya'], ['Xavier', 'Ananya', 'Luis'], ['Luke', null, 'Deniz'],['Rin', 'Sakura', 'Francisco']]; // undefined
> airplaneSeats [3][1] = "Hugo" // 'Hugo'
[ [ 'Ruth', 'Anthony', 'Stevie' ], [ 'Amelia', 'Pedro', 'Maya' ], [ 'Xavier', 'Ananya', 'Luis' ], [ 'Luke', 'Hugo', 'Deniz' ], [ 'Rin', 'Sakura', 'Francisco' ]]
