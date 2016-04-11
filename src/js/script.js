// Created by Devin Sturgeon found in comments section of
// https://css-tricks.com/snippets/jquery/smooth-scrolling/

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);

            active = switchIcon(active);
            $(".dropdownMenu").slideToggle("slow", function(){});

            return false;
        }
    }
});

/* -------------------------------------------------- */

function switchIcon(active) {
    if (active) {
        $(".hamburgerIcon i").removeClass("fa-times").addClass("fa-bars");

        return false;
    }

    else {
        $(".hamburgerIcon i").removeClass("fa-bars").addClass("fa-times");

        return true;
    }
}

/* -------------------------------------------------- */

$(document).ready(function(){
    $(".imageBackground").backstretch("/dist/img/MountainSea.jpg");
    $(".projectsBackground").backstretch("/dist/img/Alley.jpg");

    $(".buttonGroups").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(){
        $(".imageBackground").backstretch("/dist/img/MountainSea.jpg");
        $(".projectsBackground").backstretch("/dist/img/Alley.jpg");
    });

    active = false;

    $(".dropdownMenu").hide();
    
    $(".hamburgerIcon").click(function(){
        active = switchIcon(active);

        $(".dropdownMenu").slideToggle("slow", function(){});
    });
});