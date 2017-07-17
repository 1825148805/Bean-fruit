window.onload = function(){
	$("#displaymodal").click(function(){
	$(".blackbg").css("display","block");
	$("#dele").css("display","block");

});
$(".input").focus(function(){
	$(this).css("border","1px solid rgb(224,285,109)");
});
$(".input").blur(function(){
	$(this).css("border","1px solid #dbdbdb");
})




}