let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let image1 = `./images/dice${randomNumber1}.png`
document.querySelector('.img1').setAttribute('src', image1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let image2 = `./images/dice${randomNumber2}.png`
document.querySelector('.img2').setAttribute('src', image2);

let resultText = "Draw!";

if (randomNumber1 > randomNumber2) {
    resultText = "🚩 Player 1 Wins!";
}else if (randomNumber1 < randomNumber2) {
    resultText = "Player 2 Wins! 🚩";
}

document.querySelector('h1').textContent = resultText;