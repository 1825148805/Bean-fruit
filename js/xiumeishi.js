$(function(){
		var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    	});

		$(".praise1").click(function(){
			var index = $(".praise1").index(this);
			var praise_img = $($(".praise-img")[index]);
			var text_box = $($(".add-num")[index]);
			var praise_txt = $($(".praise-txt")[index]);
			var num=parseInt(praise_txt.text());
		if(praise_img.attr("src") == ("../imags/zan.png")){
			$($(".praise1")[index]).html("<img src='../imags/yizan.png' class='praise-img' />");
			praise_txt.addClass("hover");
			text_box.show().html("<em class='add-animation'>-1</em>");
			$($(".add-animation")[index]).addClass("hover");
			num +=1;
			praise_txt.text(num)
		}else{
			$($(".praise1")[index]).html("<img src='../imags/zan.png' class='praise-img' />");
			praise_txt.removeClass("hover");
			text_box.show().html("<em class='add-animation'>+1</em>");
			$($(".add-animation")[index]).removeClass("hover");
			num -=1;
			praise_txt.text(num)
			}
		})
	})