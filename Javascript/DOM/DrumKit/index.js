let buttons = document.querySelectorAll('.drum');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // what to do when click detected.
        makeSound(this.innerHTML);

        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    // what to do when keydown detected.
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "j":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "l":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        
        default:
            break;
    }

}

function buttonAnimation(currentKey) {
    // what to do when buttons being pressed
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    
    // restore button status after 100ms (i.e. 0.1 second)
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}