/*图片轮播自动轮播部分*/
nowing=1;
maxing=4;
function show_img() {
    for (var i = 1; i <= 4; i++) {
        if (i == nowing) {
            $("#chang_month_" + i).show();
            $("#month_" + i).addClass("current");
        } else {
            $("#chang_month_" + i).hide();
            $("#month_" + i).removeClass("current");
        }
    }
    if(nowing==maxing)
    {
        nowing=1;
    }
    else
    {
        nowing++;
    }
}
var timer=setInterval("show_img()",5000);
// $(function(){
//      $(".carousel").onmouseover(function(){
//         clearInterval(timer);
//     })   
// })

/*图片轮播部分*/
// var nn = document.getElementById("bg_month_1");
// nn.onclick = function(){winners(1);}
// var nn1 = document.getElementById("bg_month_2");
// nn1.onclick = function(){winners(2);}
// var nn2 = document.getElementById("bg_month_3");
// nn2.onclick = function(){winners(3);}
// var nn3 = document.getElementById("bg_month_4");
// nn3.onclick = function(){winners(4);}

// $(".list_left span").click(function(){
//     $(".list_left span").removeClass("current");
//     $(".carousel").hide();
//     var name = $(this).attr("id");
//     $("#"+name+"_desc").show();
//     $(this).addClass("current");

// })


function winners(num) {
    for (var i = 1; i <= 4; i++) {
        if (i == num) {
            $("#chang_month_" + i).show();
            $("#month_" + i).addClass("current");
        } else {
            $("#chang_month_" + i).hide();
            $("#month_" + i).removeClass("current");
        }
    }
    nowing=num; 
}
/********/
$(".list_left span").click(function(){
    $(".list_left span").removeClass("current");
    $(".carousel").hide();
    var name = $(this).attr("id");

    $("#"+"chang_"+name).show();
    $(this).addClass("current");
    ani();
    winners(id);
})
/********/
function ani() {
    var idStr = $("span.current").attr("id");
    spstr = idStr.split('_');
    id = spstr[spstr.length - 1];
}

    $(".pre").click(function() {
        ani();
        if (--id < 1) {
            id = 4;
        }
        winners(id);
    })
    $(".next").click(function() {
        ani();
        if (++id > 4) {
            id = 1;
        }
        winners(id);


    });


/*公告*/

var s, s2, s3, timer;

// init
function roll_Init() {
    s = getRollId("roll_div1");
    s2 = getRollId("roll_div2");
    s3 = getRollId("roll_div3");
    s3.innerHTML = s2.innerHTML;
    timer = setInterval(roll_time, 30)
}

var last = 0;

function roll_time() {
    if (s2.offsetWidth <= s.scrollLeft) {
        s.scrollLeft -= s2.offsetWidth;
    } else {
        s.scrollLeft++;

        // 滚动停止的bug修复
        if (s.scrollLeft == last) {
            s.scrollLeft -= s2.offsetWidth;
        }
        last = s.scrollLeft;
    }
}

function getRollId(id) {
    return document.getElementById(id);
}

// Init
window.onload = roll_Init;

/*轮播*/


