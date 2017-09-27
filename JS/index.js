$(function(){

	// // 固定导航开始
	var topHeight = $("#top-bar").height();
	$(window).scroll(function(){
		var scrollTop=$(this).scrollTop();
		if(scrollTop>topHeight){
			$("#top-bar").addClass("fixed");
			// $(".contentInfo").css("margin-top", topHeight+"px");
		}
		else{
			$("#top-bar").removeClass("fixed");
			// $(".contentInfo").css("margin-top","0");
		}
	})
	// // 固定导航结束

	// 鼠标悬停，切换文字开始
	$("#top-bar .container .col-md-3 span").on("mouseenter",function(){
			$("#top-bar .container .col-md-3 span").html("My Resume")
			// css("display","none")
	})
	$("#top-bar .container .col-md-3 span").on("mouseleave",function(){
			$("#top-bar .container .col-md-3 span").html("我的简历")
	})
	// 鼠标悬停，切换文字结束
	// 首页锚点跳转开始
	// $("#first_page").on("click",function(){
	// 	$(window).scrollTop(0);
	// })
	// $("#2nd_page").on("click",function(){
	// 	var ab_offsetTop=$("#about_me").offset().top;
	// 	var ab_offsetTop=ab_offsetTop+topHeight;
	// 	// console.log(ab_offsetTop);
	// 	// $("#about_me").offset({"left":"0","top":"ab_offsetTop"});
	// 	$(window).scrollTop(ab_offsetTop);
	// })
	// 首页锚点跳转结束
	// 
	// 作品图及透明度开始
	$("#works .container ul li img").on("mouseenter",function(){
		$(this).fadeTo(500,0.5);
	})
	$("#works .container ul li img").on("mouseleave",function(){
		$(this).fadeTo(500,1);
	})
	// 作品图透明度结束

	// var span=$("<span>这是一个span元素</span>");
	// $(".test").append(span);
	// $(".test").html();
	// console.log($(".test").html())
	// // $(".test").text();
	// console.log($(".test").text())

	// // $(".test").on("mouseover",function(){
	// // 	$(".test").animate({"width":"300px"},1000).animate({"height":"300px"})
	// // })	
	$(".work1").on("click",function(){
		window.location.href="https://arsenal072.github.io/boyahudong/";
	})
	$(".work2").on("click",function(){
		window.location.href="https://arsenal072.github.io/flappyBird/";
	})
	$(".work3").on("click",function(){
		window.location.href="https://arsenal072.github.io/shoppingCar/";
	})
	$(".work4").on("click",function(){
		window.location.href="https://arsenal072.github.io/weijinsuo/";
	})

})

