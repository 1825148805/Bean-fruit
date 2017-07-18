window.onload = function(){
	var mySwiper = new Swiper('.swiper-container', {
	        pagination : '.swiper-pagination',
	        // loop : true,
	        autoplay : 3000,
	        autoplayDisableOnInteraction : false    /* 注意此参数，默认为true */ 
		});
		for(var i=1;i<$(".big_list").length;i++){
			$($(".big_list")[i]).css("display","none");
		};
		$('.for_a_batch').click(function(){
			for(var i=0;i<$(".big_list").length;i++){
				$($(".big_list")[i]).css("display","none");
			}
			var randomNum = Math.floor(Math.random()*Number($(".big_list").length));
			
			$($(".big_list")[randomNum]).css("display","block");
				
		});
		
}