const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("What is your name?");
// rl.question("What is their name?");
// rl.close();


// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// console.log("Your love score is " + loveScore + "%");

rl.question("What is your name? ", (name1) => {
    rl.question("What is their name? ", (name2) => {
        var loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1;
        if (loveScore > 70) {
            console.log("Your love score is " + loveScore + "% You love each other like Kanye loves Kanyes.")
        } else if (loveScore >= 30 && loveScore <= 70) {
            console.log("Your love score is " + loveScore + "%");
        } else {
            console.log("Your love score is " + loveScore + "% You love each other like oil and water.")
        }
        rl.close();
    });
});