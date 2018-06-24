/**
 * Created by Administrator on 2018/6/22.
 */
$(function(){
    $("nav ul li a").mouseenter(function(){
        $(this).siblings("span").animate({
            top:'-0.7em',
            opacity:'1'
        },"300");
    });
    $("nav ul li a").mouseleave(function(){
        $(this).siblings("span").stop();
        $(this).siblings("span").animate({
            top:'0.7em',
            opacity:'0'
        },"300");
    });
    $("body").mousemove(function(event){
        var middleX=$(this).width()/2;
        var middleY=$(this).height()/5;
        var X=middleX-(event.pageX-middleX)/(5*(middleX/Math.sqrt(Math.abs(event.pageX-middleX)))-10);
        var Y=middleY-(event.pageY-$(this).height()/2)/(5*($(this).height()/2/Math.sqrt(Math.abs(event.pageY-$(this).height()/2)))-10);
        $("#container_main").css("left",X).css("top",Y);
    });
    var textArray=new Array("中二之魂w(ﾟДﾟ)w","你怎么来到这里的？你到底是谁？","(*^▽^*)再来哦","风萧萧兮易水寒",
        "别戳了 凸(艹皿艹 )","竜が我が敌を喰らう","戳得开心么(*￣︿￣)","o(≧口≦)o","你奏是弟弟","咸鱼也有不腐烂的自尊");
    $("body").click(function(e){
        var $text=$("<span class='text' onselectstart='return false' style='left:"+ (e.pageX-15)+"px;top:"+ (e.pageY-25)+"px;'>"+textArray[rand(10)]+"</span>");
        $(this).append($text);
        var removeY=e.pageY-35;
        $text.animate({
            top:removeY+'px',
            opacity:'0'
        },1200,function(){
            $text.remove();
        });
    });
    //返回0到n-1的随机数
    function rand(n){
        return Math.floor(Math.random()*n);
    }
});