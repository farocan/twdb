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