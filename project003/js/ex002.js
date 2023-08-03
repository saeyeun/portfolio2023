$(document).ready(function(){
    //마우스가 움직이는 값을 찾아라

    $(window).mousemove(function(e){
        let x = e.pageX;
        let y = e.pageY;

        $('.cursor').css({'left':x,'top':y})
    })

//cursor가 em 안에 들어갔을 때, cursor에 보더색이 바뀌어라.

$('.main p em').mouseenter(function(){
    $('.cursor').addClass('style1')
    $('.cursor').css({'background-color':'rgba(228, 0, 245, 0.51)'})
    $('.main').addClass('show')
})

$('.main p em').mouseleave(function(){
    $('.cursor').removeClass('style1')
    $('.cursor').css({'background-color':'#000'})
    $('.main').removeClass('show')
})


$('.main p span').mouseenter(function(){
    $('.cursor').addClass('style2')
})

$('.main p span').mouseleave(function(){
    $('.cursor').removeClass('style2')
})

})