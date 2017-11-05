// JavaScript Document
$(document).ready(function(){
						   
						   
						   
//自动随机显示page1背景图						   
 setInterval(function () {
var length = 3;
var randomBgIndex = Math.round(Math.random() * length);
 $("#page1 .bg-img li").eq(randomBgIndex).show().siblings().hide();
},5000);
 
//top回到顶部及显示
 showScroll();
    function showScroll() {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            scrollValue > 300 ? $('#top').fadeIn().css("background","#999"):$('#top').fadeOut();
        });
        $('#top').click(function () {
            $("html,body").animate({ scrollTop: 0 }, 2000);
        });
    }
 //点击导航li出现active
    $(".nav-ul li").bind("click", function () {
        var index = $(this).index();//获取序号
        $(".nav-ul li").eq(index).addClass("active").siblings().removeClass("active");
       
    });
 //关于我
    $("#abMe").bind("click", function () {
       $(".nav-ul li:nth-child(1)").click();
    });
    //我的作品
    $("#mypro").bind("click", function () {
        $(".nav-ul li:nth-child(3)").click();
    });
	
	
	var _top;
    var top1 = $("#page2").offset().top-30;
    var top2 = $("#page3").offset().top-30;
    var top3 = $("#page4").offset().top-30;
    var top4 = $("#page5").offset().top-30;
    var top5 = $("#page6").offset().top-30;
    var tops = [top1,top2,top3,top4,top5];
	
	
	 function moveTo(){
        $('html,body').animate({
            scrollTop: _top
        }, 500);
    }
    //导航点击
    $(".nav-ul li").bind("click", function () {
        var index = $(this).index();//获取序号
        _top = $(".page").eq(index+1).offset().top; //获取对应div距顶高度
        moveTo();
    });
 

    
  //页面滚动
    $(window).scroll(function () {
        //导航fixed
        var s = $(window).scrollTop();
        s > top1 ? $('#nav-bar').addClass("fixed") : $('#nav-bar').removeClass("fixed");
 //导航跟随滚动响应
  //导航跟随滚动响应
        if((s>top1)&&(s<top2)){
            $(".nav-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $("#page2").addClass("active");
        }else if((s>top2)&&(s<top3)){
            $(".nav-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $("#page3").addClass("active");
        }else if((s>top3)&&(s<top4)){
            $(".nav-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $("#page4").addClass("active");
        }else if((s>top4)&&(s<top5)){
            $(".nav-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $("#page5").addClass("active");
        }else if((s>top5)&&(s<top6)){
            $(".nav-ul li").eq(4).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(4).addClass("active").siblings().removeClass("active");
            $("#page6").addClass("active");
        }

        });
	
	
	
 
 //照片墙自由滚动及鼠标移动显示及播放
 $(window).load(function(){
 var index=1;
  var setTime=setInterval(autoPlayImg,5000);
 function autoPlayImg(){
 $("#myPhoto ul li").eq(index).fadeIn(3000).siblings().hide();
 index>3?index=0:index++;
 }
 
 $("#myPhoto").mouseover(function(){
		clearInterval(setTime);						  
	});							  
  $("#myPhoto").mouseout(function(){
  $("#myPhoto ul li").eq(index).fadeIn(3000).siblings().hide();
 index>3?index=0:index++;
 
 });	
 });
 
 
 
 
 
 
});