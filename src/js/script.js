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

$(document).ready(function(){
    var active = false;
    var aboutMePopupIsVisible = false;

    $(".dropdownMenu").hide();
    
    $(".hamburgerIcon").click(function(){
        active = switchIcon(active);

        $(".dropdownMenu").slideToggle("slow", function(){});
    });
    
    $(".aboutMeButton").click(function(){
        if (aboutMePopupIsVisible){
            $(".aboutMe").addClass("fadeOutDownBig");

            aboutMePopupIsVisible = false;

            setTimeout(function () {
                $(".aboutMe").addClass("disappear");
            }, 800);
        }

        else{
            $(".aboutMe").addClass("fadeInUpBig appear").removeClass("disappear fadeOutDownBig");

            aboutMePopupIsVisible = true;
        }
    });

    $(".closeButton").click(function(){
        if (aboutMePopupIsVisible){
            $(".aboutMe").addClass("fadeOutDownBig");

            aboutMePopupIsVisible = false;

            setTimeout(function () {
                $(".aboutMe").addClass("disappear");
            }, 800);
        }

        else{
            $(".aboutMe").addClass("fadeInUpBig appear").removeClass("disappear fadeOutDownBig");

            aboutMePopupIsVisible = true;
        }
    });
});