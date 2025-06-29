let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let level = 0;
let started = false;

$(document).on("keydown", function(){
    if (!started) {
        started = true;
        nextSequence();
    }
});

$(".btn").on("click", function(){
    let userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickPattern.length - 1)
});

function nextSequence() {
    userClickPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
    level++;
    $("#level-title").text(`Level ${level}`);
}

function playSound(soundName) {
    let audio = new Audio(`sounds/${soundName}.mp3`);
    audio.play();
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);

}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        if (userClickPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    }else {
        $("#level-title").text("Game Over, Press Any Key to Restart");
        playSound("wrong");
        $(document).addClass("game-over");
        setTimeout(function (){
            $(document).removeClass("game-over");
        }, 200);
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}



