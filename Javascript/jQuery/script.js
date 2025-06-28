// $ sign replaces document.querySelectorAll

$('h1').css("color", "red");
console.log($("h1").css("color"));

// better way to change styles
$("h1").addClass("big-title margin-50");
console.log($("h1").attr("class"));

$("h1").text("Welcome");

// $("button").html("<em>hey</em>");

console.log($("img").attr("src"));

$("a").attr("href", "https://chatgpt.com");

$("h1").click(function () {
    $("h1").css("color", "green");
});


// DON'T USE THIS
// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.color = "purple";
//     });
// }


$("h2").addClass("purple");
console.log($("h2").attr("class"));

$("button").click(function() {
    $("h2").toggleClass("purple green");
});

$(document).keydown(function (event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "black");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>Submit</button>");
$("h1").prepend("<button class='lighter'><<</button>");
$("h1").append("<button class='deeper'>>></button>");


// $("h1").on("click", function(){
//     $("h1").hide();
// });

// $("h2").on("click", function(){
//     $('h1').show();
// });

// $("button").on("click", function(){
//     $("h1").slideUp().slideDown().animate({opacity: 0.5});
// });

$("button").on("click", function (){
    let title = $("h1");
    
    switch ($(this).text()) {
        case "Toggle":
            title.toggle();
            break;

        case "Slide Toggle":
            title.slideToggle();
            break;

        case "Slide Down":
            title.slideDown();
            break;

        case "FadeToggle":
            title.fadeToggle();
            break;

        case "FadeIn":
            title.fadeIn();
            break;

        case "FadeOut":
            title.fadeOut();
            break;

        case "Big Margin":
            title.animate({margin: "20%"});
            break;

        case "Animation":
            title.animate({opacity: 0.5});
            break;

        case "New":
            title.removeAttr("style");

        default:
            title.slideUp().slideDown().animate({opacity: 1});
            break;
    }
});