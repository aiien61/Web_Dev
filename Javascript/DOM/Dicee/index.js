let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomDice1 = document.querySelector('.img1').src;
let randomDice2 = document.querySelector('.img2').src;

document.querySelector('.img1').src = randomDice1.replace('dice6', `dice${randomNumber1}`);
document.querySelector('.img2').src = randomDice2.replace('dice6', `dice${randomNumber2}`);

let h1 = document.querySelector('h1').textContent;

if (randomNumber1 < randomNumber2) {
    h1 = "Player 2 Wins! 🚩"
}else if (randomNumber2 < randomNumber1) {
    h1 = "🚩 Player 1 Wins! "
}else {
    h1 = "Draw!"
}

document.querySelector('h1').textContent = h1;