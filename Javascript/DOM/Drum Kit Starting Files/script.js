let buttonList = document.querySelectorAll(".drum");
for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        let audio = new Audio(src="./sounds/crash.mp3");
        switch (buttonInnerHTML) {
            case "w":
                audio = new Audio(src="./sounds/tom-1.mp3");
                audio.play();
                break;

            case "a":
                audio = new Audio(src="./sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                audio = new Audio(src="./sounds/tom-3.mp3");
                audio.play();
                break;

            case "d":
                audio = new Audio(src="./sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                audio = new Audio(src="./sounds/kick-bass.mp3");
                audio.play();
                break;

            case "k":
                audio = new Audio(src="./sounds/snare.mp3");
                audio.play();
                break;
        
            default:
                audio.play();
                break;
        }

    });
}
