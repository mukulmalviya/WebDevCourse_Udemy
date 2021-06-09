function rollDie(numSide = 6) {
    return Math.floor(Math.random() * numSide) + 1
}

function greet(person, msg = "Hey There") {
    console.log(`${msg}, ${person}!`)
}

const n = [1, 2, 3, 55, 84, 1, 76, 82, 56]

// Use this  for clear screen
function c() {
    console.clear();
}

const a = [1, 2, 5, 6]
const b = ["fsdf", "fsddsfas", "asd"]

const all = [...a, ...b]

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everybodyElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`Silver MEDAL GOES TO: ${silver}`);
    console.log(`and thanks to eveybody else: ${everybodyElse}`);
}

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

const user = {
    email: 'stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1996,
    city: 'Tulsa',
    state: "OK"
}

