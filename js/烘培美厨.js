window.onload = function(){
			
	$($(".sencond_nav li")[0]).css("border-bottom","2px solid #fd7a40");
		$(".sencond_nav li").click(function(){
			var index = $(".sencond_nav li").index(this);
			console.log(index);
			for(var i = 0;i<$(".sencond_nav li").length;i++){
				$($(".sencond_nav li")[i]).css("border-bottom","");
				$($(".big_box")[i]).css("display","none");
			}
			$(this).css("border-bottom","2px solid #fd7a40");
			$($(".big_box")[index]).css("display","block");

		});


	/*³õÊ¼»¯*/
	var counter = 0; /*¼ÆÊýÆ÷*/
	var pageStart = 0; /*offset*/
	var pageSize = 0; /*size*/
	
	/*Ê×´Î¼ÓÔØ*/
	getData(pageStart, pageSize);
	
	/*¼àÌý¼ÓÔØ¸ü¶à*/
	$(document).on('click', '.more', function(){
		counter ++;
		pageStart = counter * pageSize;
		
		getData(pageStart, pageSize);
	});
    
	
	function getData(offset,size){

		$.ajax({
			type: 'GET',
			url: '../data/blog.json'+ '?' + offset + '/' + size, //ÕâÀïoffset,sizeÎÞ×÷ÓÃ£¬½ö·½±ãµ÷ÊÔ
			dataType: 'json',
			success: function(reponse){

				var data = reponse.list;
				var sum = reponse.list.length;

				var result;
				
				/************ÒµÎñÂß¼­¿é£ºÊµÏÖÆ´½ÓhtmlÄÚÈÝ²¢appendµ½Ò³Ãæ*****************/
				
				//console.log(offset , size, sum);
				
				/*Èç¹ûÊ£ÏÂµÄ¼ÇÂ¼Êý²»¹»·ÖÒ³£¬¾ÍÈÃ·ÖÒ³ÊýÈ¡Ê£ÏÂµÄ¼ÇÂ¼Êý
				* ÀýÈç·ÖÒ³ÊýÊÇ5£¬Ö»Ê£2Ìõ£¬ÔòÖ»È¡2Ìõ
				*
				* Êµ¼ÊMySQL²éÑ¯Ê±²»Ð´Õâ¸ö²»»áÓÐÎÊÌâ
				*/
				console.log(data[0].src,"66666666"+sum);
				console.log(data);
				/*Ê¹ÓÃforÑ­»·Ä£ÄâSQLÀïµÄlimit(offset,size)*/
				
				for(var i = 0,j = 1; i<sum; i=i+2,j=j+2){
						console.log(i,j);
						result ="<div class='list_box'><div class = 'goods_list'><a href='#'><img src='"+data[i].src+"'><div class = 'text'><p class= 'commodity_name'>"+data[i].commodity_name+"</p><p class='price'>"+data[i].price+"</p><p class='sum'>"+data[i].sum+"</p></div></a></div><div class = 'goods_list'><a href='#'><img src='"+data[j].src+"'><div class = 'text'><p class= 'commodity_name'>"+data[j].commodity_name+"</p><p class='price'>"+data[j].price+"</p><p class='sum'>"+data[j].sum+"</p></div></a></div></div>";
						$('.big_box').append(result);
						console.log(data[i].src,data[j].src);
					}
				/*******************************************/
				/*Òþ²Ømore*/

			
					
				
			},
			error: function(xhr, type){
				alert('Ajax error!');
			}
		});
	}
}; 

