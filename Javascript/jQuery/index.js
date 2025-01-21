// better way in .js than $("h1").css("color", "red");
$("h1").addClass("big-title margin-50");
console.log($("h1").hasClass("margin-50"));

$("h1").removeClass("big-title margin-50");
console.log($("h1").hasClass("margin-50"));

// $("h1").text("Bye");
// $("button").text("Don't click me");
// $("button").html("<em>Hey</em>");

console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");

$("h1").addClass("big-title margin-50");
console.log($("h1").attr("class"));

$("h1").click(function () {
    $("h1").css("color", "purple");
});

// for (let i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// Same as the above
$("button").click(function () {
    $("h1").css("color", "purple");
});

$("input").keydown(function (event) {
    console.log(event.key);
});

// select the whole document and detect any keydown behaviours
$(document).ready(function () {
    $(document).keydown(function (event) {
        $("h1").text(event.key);

    });
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});


$("h1").before("<button class='show'>show</button>");
$("h1").after("<button class='hide'>hide</button>");

$("h1").prepend("<button class='slideup'>Slide Up</button>");
$("h1").append("<button class='opacity'>opacity</button>");

// remove all the buttons
// $("button").remove();

$("button").click(function (event) {
    if ($(this).hasClass("show")) {
        $("h1").show();
    }else if ($(this).hasClass("hide")) {
        $("h1").hide();
    }else if ($(this).hasClass("fadeout")) {
        $("h1").fadeOut();
    }else if ($(this).hasClass("fadein")) {
        $("h1").fadeIn();
    }else if ($(this).hasClass("fadetoggle")) {
        $("h1").fadeToggle();
    }else if ($(this).hasClass("slideup")) {
        $("h1").slideUp();
    }else if ($(this).hasClass("slidedown")) {
        $("h1").slideDown();
    }else if ($(this).hasClass("slidetoggle")) {
        $("h1").slideToggle();
    }else if ($(this).hasClass("opacity")) {
        console.log($("h1").css("opacity"));
    }else if ($(this).hasClass("margin")) {
        $("h1").animate({margin: "20%"});
    }else if ($(this).hasClass("animation")) {
        console.log($("h1").css("opacity"));
    }else{
        $("h1").toggle();
    }
    
});

$(".opacity").on("click", function () {
    $("h1").animate({opacity: 0.5});
});

$(".animation").on("click", function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});