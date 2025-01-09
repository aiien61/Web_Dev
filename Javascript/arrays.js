const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var guestList = ["Smith", "John", "Peter", "David", "Kevin"];

rl.question("What's your name? ", (name) => {
    if (guestList.includes(name)) {
        console.log("Welcome, guest. Please come in.");
    }else {
        console.log("Sorry, you're not invited.");
    }

    rl.close();

    console.log(guestList.length);
    console.log(guestList);
})