function switchIcon(active) {
    if (active) {
        $(".hamburgerIcon i").removeClass("fa-times");
        $(".hamburgerIcon i").addClass("fa-bars");

        return false;
    }

    else {
        $(".hamburgerIcon i").removeClass("fa-bars");
        $(".hamburgerIcon i").addClass("fa-times");

        return true;
    }
}

/* -------------------------------------------------- */

$(document).ready(function(){
    var active = false;
    var aboutMePopupIsVisible = false;
    var projectsPopupIsVisible = false;

    $(".dropdownMenu").hide();
    $(".projects").hide();
    $(".aboutMe").hide();
    
    $(".hamburgerIcon").click(function(){
        active = switchIcon(active);

        $(".dropdownMenu").slideToggle("slow", function(){});
    });
    
    $(".aboutMeButton").click(function(){
        if (aboutMePopupIsVisible){
            $(".aboutMe").addClass("fadeOutDownBig");

            aboutMePopupIsVisible = false;

            setTimeout(function () {
                $(".aboutMe").hide();
            }, 800);
        }

        else{
            $(".aboutMe").show().addClass("fadeInUpBig").removeClass("fadeOutDownBig");

            aboutMePopupIsVisible = true;
        }
    });

    $(".closeButton").click(function(){
        if (aboutMePopupIsVisible){
            $(".aboutMe").addClass("fadeOutDownBig");

            aboutMePopupIsVisible = false;

            setTimeout(function () {
                $(".aboutMe").hide();
            }, 800);
        }

        else{
            $(".aboutMe").show().addClass("fadeInUpBig").removeClass("fadeOutDownBig");

            aboutMePopupIsVisible = true;
        }
    });

    $(".projectsButton").click(function(){
        if (projectsPopupIsVisible){
            $(".projects").addClass("zoomOut");

            projectsPopupIsVisible = false;

            setTimeout(function () {
                $(".projects").hide();
            }, 800);
        }

        else{
            $(".projects").show().addClass("zoomIn").removeClass("zoomOut");

            projectsPopupIsVisible = true;
        }
    });

    $(".projectsCloseButton").click(function(){
        if (projectsPopupIsVisible){
            $(".projects").addClass("zoomOut");

            projectsPopupIsVisible = false;

            setTimeout(function () {
                $(".projects").hide();
            }, 800);
        }

        else{
            $(".projects").show().addClass("zoomIn").removeClass("zoomOut");

            projectsPopupIsVisible = true;
        }
    });
});