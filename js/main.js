$(document).ready(function(){
	onResize();

	$(window).resize(function(){ onResize() });
});

function onResize(){
	$(".title h1").css("font-size", $(window).width()*0.12);
}