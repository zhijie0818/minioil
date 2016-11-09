
/* 个人中心 个人信息内容修改*/
$(".personal_left li a").click(function(){
    $(".personal_left ul li a").removeClass("momo");
    $(".personal_right").hide();
    var id_name=$(this).attr("id");
    $("#"+"desc_"+id_name).show();
    $(this).addClass("momo");
})
/*个人概况部分*/
$(".personal_account").click(function(){
    $(".personal_account").removeClass("loss_bg");
    $(".p_income").hide();
    var loss_name=$(this).attr("id");
    $("#"+"get_"+loss_name).show();
    $(this).addClass("loss_bg");
})
