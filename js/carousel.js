//	轮播图
define(["jquery"],function($){
	$(function(){
		var imgs = $(".carousel_img"),
		timer = setInterval(move,4000),
		len = imgs.length,
		currentIndex = 0,
		nextIndex = 1;

		//	获取当前视窗宽度改变图片左移距离
		changeUlMargin();

		$(window).resize(function(){
			changeUlMargin();
		});

		function changeUlMargin(){
			var pageWidth = document.body.offsetWidth;
			var ulMarginLeft = -(1920-pageWidth)/2;
			$("#banner ul").css("margin-left",ulMarginLeft);
		}

		//	轮播
		function move(){		
			$(imgs[currentIndex]).fadeOut();
			$(imgs[nextIndex]).fadeIn();

			//	小圆点
			$(".circle").eq(currentIndex).css("background-position","left top");
			$(".circle").eq(nextIndex).css("background-position","left bottom");

			currentIndex = nextIndex;
			nextIndex++;
			if(nextIndex === len){
				nextIndex = 0;
			}
		}

		//	上一页/下一页
		$("#prve").click(function(){
			nextIndex = currentIndex - 1;
			if(nextIndex === -1){
				nextIndex = len-1;
			}
			move();
		});

		$("#next").click(function(){
			nextIndex = currentIndex + 1;
			if(nextIndex === len){
				nextIndex = 0;
			}
			move();
		});

		//	点击小圆点
		$(".circle").click(function(e){
			e = e || event;
			var src = e.target,
				circleIndex = $(".circle").index(src);
			nextIndex = circleIndex;
			if(nextIndex === len){
				nextIndex = 0;
			}
			move();
		})

		//	鼠标移入/移出时，停止/恢复轮播动画
		$("#banner").mouseenter(function(){
			clearInterval(timer);
			$(".arrow").css("display","block");
		});

		$("#banner").mouseleave(function(){
			timer = setInterval(move,4000);
			$(".arrow").css("display","none");
		});

		
	});
});