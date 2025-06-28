let buttonList = document.querySelectorAll(".drum");
for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            let audioTom1 = new Audio(src="./sounds/tom-1.mp3");
            audioTom1.play();
            break;

        case "a":
            let audioTom2 = new Audio(src="./sounds/tom-2.mp3");
            audioTom2.play();
            break;

        case "s":
            let audioTom3 = new Audio(src="./sounds/tom-3.mp3");
            audioTom3.play();
            break;

        case "d":
            let audioTom4 = new Audio(src="./sounds/tom-4.mp3");
            audioTom4.play();
            break;

        case "j":
            let audioKick = new Audio(src="./sounds/kick-bass.mp3");
            audioKick.play();
            break;

        case "k":
            let audioSnare = new Audio(src="./sounds/snare.mp3");
            audioSnare.play();
            break;


        case "l":
            let audioCrash = new Audio(src="./sounds/crash.mp3");
            audioCrash.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(key) {
    let activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);

}