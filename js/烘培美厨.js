$($(".sencond_nav li")[0]).css("border-bottom","2px solid #fd7a40");
		$(".sencond_nav li").click(function(){
			var index = $(".sencond_nav li").index(this);
			console.log(index);
			for(var i = 0;i<$(".sencond_nav li").length;i++){
				$($(".sencond_nav li")[i]).css("border-bottom","");
			}
			$(this).css("border-bottom","2px solid #fd7a40");
		})
