window.onload=function(){
	var totall = $(".color2").text().slice(1);
	var price = $(".price_span").text().slice(1);
	console.log(totall,price);
	$(".zong_span1").text();
	$(".color2").text((parseFloat(price)*$(".number").text()).toFixed(2));
	$(".symbol1").click(function(){
		var number = $(".number").text();
		if(number>1){
			$(".number").text(parseInt(number)-1);
		}
		$(".color2").text((parseFloat(price)*$(".number").text()).toFixed(2));
		$(".zong_span1").text($(".color2").text());
	});
	$(".symbol2").click(function(){
		var number = $(".number").text();
		 $(".number").text(parseInt(number)+1);
		 $(".color2").text((parseFloat(price)*$(".number").text()).toFixed(2));
		 $(".zong_span1").text($(".color2").text());
		console.log( $(".zong_span1").text());
	})
};



