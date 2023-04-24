const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
Math.max(nums) //NaN
Math.max(...nums) //53456


// SPREAD IN ARRAYS
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]

// allPets
// (5) ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt']
// [...dogs, ...cats]
// (5) ['Rusty', 'Wyatt', 'Blue', 'Scout', 'Rocket']
// [...dogs, ...cats, "Speedy"]
// (6) ['Rusty', 'Wyatt', 'Blue', 'Scout', 'Rocket', 'Speedy']
// ["hello"]
// ['hello']
// [..."hello"]
// (5) ['h', 'e', 'l', 'l', 'o']

// SPREAD IN OBJECTS
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

// {...feline}
// {legs: 4, family: 'Felidae'}
// feline
// {legs: 4, family: 'Felidae'}
// {...feline, color: "black"}
// {legs: 4, family: 'Felidae', color: 'black'}
// const catDog = {...feline, ...canine}
// undefined
// catDog
// {legs: 4, family: 'Caninae', isFurry: true}
// {...canine, ...feline}
// {isFurry: true, family: 'Felidae', legs: 4}
// {...canine, ...feline, family: "Steele"}
// {isFurry: true, family: 'Steele', legs: 4}

// {...[2, 4, 6, 8]}
// {0: 2, 1: 4, 2: 6, 3: 8}
// {..."HIII"}
// {0: 'H', 1: 'I', 2: 'I', 3: 'I'}

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = {...dataFromForm, id: 2345, isAdmin: false}
