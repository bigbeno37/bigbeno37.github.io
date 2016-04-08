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

    $(".dropdownMenu").hide();
    
    $(".hamburgerIcon").click(function(){
        active = switchIcon(active);

        $(".dropdownMenu").slideToggle("slow", function(){});
    });
});