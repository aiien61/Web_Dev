let name1 = prompt("What's your name?");
let name2 = prompt("What's their name?");

let loveScore = Math.random() * 100 + 1;
loveScore = Math.round(loveScore);

let message = "You " + name1 + " and " + name2 + " have love score: " + loveScore + "%";
if (loveScore > 70) {
    alert(message + " You love each other like Kanye love Kanye.");
} else if (loveScore === 80) {
    alert(message + " You love each other at a perfect point.")
} else if (loveScore > 30 && loveScore < 70) {
    alert(message);
} else if (loveScore <= 30) {
    alert(message + " You go together like oil and water.");
}