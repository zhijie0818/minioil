/*图片轮播自动轮播部分*/
// nowing=1;
// maxing=4;
// function show_img() {
//     for (var i = 1; i <= 4; i++) {
//         if (i == nowing) {
//             $("#chang_month_" + i).show();
//             $("#bg_month_" + i).addClass("current");
//         } else {
//             $("#chang_month_" + i).hide();
//             $("#bg_month_" + i).removeClass("current");
//         }
//     }
//     if(nowing==maxing)
//     {
//         nowing=1;
//     }
//     else
//     {
//         nowing++;
//     }
// }
// window.setInterval("show_img()",8000);
/* 个人中心 个人信息内容修改*/
function show_content(num){
    for(var i=1;i<=4;i++){
        if(i==num){
            $("#personal_right_"+i).show();
            var obj=document.getElementById("list_people_"+i);
            obj.style.color="#FEC21C";
            $("#list_people_"+i).addClass("momo");
        }else{
             $("#personal_right_"+i).hide();
               var obj=document.getElementById("list_people_"+i);
                obj.style.color=""; 
            $("#list_people_"+i).removeClass("momo");
        }
    }
}
/*个人概况部分*/
function show_survey(num){
    for(var i=1;i<=2;i++){
        if(i==num){
            $("#get_income_"+i).show();
            $("#loss_"+i).addClass("loss_bg");
        }
        else{
            $("#get_income_"+i).hide();
            $("#loss_"+i).removeClass("loss_bg");
        }
    }
}
/*图片轮播部分*/
// function winners(num) {
//     for (var i = 1; i <= 4; i++) {
//         if (i == num) {
//             $("#chang_month_" + i).show();
//             $("#bg_month_" + i).addClass("current");
//         } else {
//             $("#chang_month_" + i).hide();
//             $("#bg_month_" + i).removeClass("current");
//         }
//     }
//      nowing=num;
// }


// function ani() {
//     var idStr = $("span.current").attr("id");
//     spstr = idStr.split('_');
//     id = spstr[spstr.length - 1];
// }
$(document).ready(function() {
    // $(".pre").click(function() {
    //     ani();
    //     if (--id < 1) {
    //         id = 4;
    //     }
    //     winners(id);
    // })
    // $(".next").click(function() {
    //     ani();
    //     if (++id > 4) {
    //         id = 1;
    //     }
    //     winners(id);


    // });
    /*手机button按钮**/
    if (window.innerWidth < 1024) {
        $(".w_nav_menu").click(function() {
            $(".w_wap_mud_show").toggleClass("w_wap_mud_colse");
            $(".collapse").slideToggle(100);
        });
    }
    $(".page-scroll").click(function() {
            $(this).css({
                'color': '#999'
            });
        })

        /*弹出框input改变图标样式*/
    $("#input_id").focusin(function() {
        $(".icon-user").addClass("icon-user-light");
    });
    $("#input_id").focusout(function() {
        $(".icon-user").removeClass("icon-user-light");
    });
    $("#input_password").focusin(function() {
        $(".icon").addClass("icon-light");
    });
    $("#input_password").focusout(function() {
        $(".icon").removeClass("icon-light");
    });
});

// function chang_color(num) {
//     for (var i = 1; i <= 7; i++) {
//         if (i == num) {
//             $("#nav_color_" + i).addClass("bg_color");
//         } else {
//             $("#nav_color_" + i).removeClass("bg_color");
//         }
//     }
// }
 
function main() {

    (function() {
        'use strict';

        /* ==============================================
  	Testimonial Slider
  	=============================================== */

        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
        Show Menu on Book
        ======================================*/
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 400;
            /*导航栏大于1024*/
            if (window.innerWidth > 1024) {
                if ($(window).scrollTop() > navHeight) {
                    $('.navbar').addClass('on');
                    $('.navbar-nav>li>a').css({
                        'padding-top': '32px'
                    });
                    $('.navbar-brand').css({
                        'margin-top': '9px'
                    });
                    $('.navbar-toggle').css({
                        'margin-top': '16px'
                    });
                } else {
                    $('.navbar').removeClass('on');
                    $('.navbar-nav>li>a').css({
                        'padding-top': '23px'
                    });
                    $('.navbar-brand').css({
                        'margin-top': ''
                    });
                    $('.navbar-toggle').css({
                        'margin-top': '28px'
                    })
                }
            }

            /*导航栏小于1024*/
            if (window.innerWidth < 1024) {
                if ($(window).scrollTop() > navHeight) {
                    $('.navbar').addClass('mon');
                    $('.navbar-nav>li>a').css({
                        'padding-top': '32px'
                    });
                    $('.navbar-brand').css({
                        'margin-top': '17px'
                    });
                    $('.w_nav_menu').css({
                        'top': '1.8em'
                    });
                    $('.navbar-nav').css({
                        'margin': '15px -15px'
                    });
                    $('.navbar-collapse').css({
                        'margin-top': '-12px'
                    });
                } else {
                    $('.navbar').removeClass('mon');
                    $('.navbar-nav>li>a').css({
                        'padding-top': '23px'
                    });
                    $('.navbar-brand').css({
                        'margin-top': ''
                    });
                    $('.w_nav_menu').css({
                        'top': '1em'
                    });
                    $('.navbar-nav').css({
                        'margin': '25px -15px'
                    });
                    $('.navbar-collapse').css({
                        'margin-top': '-25px'
                    });
                }
            }
        });
        $('body').scrollspy({
            target: '.navbar',
            offset: 10
        })
    }());
}
main();

/*手机端&& pc端 大于一定值时才出现 回到顶部*/
$("#top_top").click(function(){
    $('html,body').animate({scrollTop:'0px'},800);
    return false;
});
function rightBar(){
    $(window).scroll(function(){
        var scroll_top=$(document).scrollTop();
        if(scroll_top > 300){

            $("#top_top").show();
        }
        else
        {
            $("#top_top").hide();
        }
    });
    $("#top_top").click(function(){
        location.hash="top";
        $(this).hide();
    })
}
rightBar();





