$(document).ready(function(){

    $('#menu ul li').click(function(){
        let i = $(this).index();
        let sht  = $('section').height();

        $('html,body').stop().animate({scrollTop:i*sht},1200)
        
        $('nav li').removeClass('on')
        $(this).addClass('on')
    });

    $('h1').click(function(){
        //logo를 클릭했을 때,scroll의 위치를 0으로 이동해라.
        $('html,body').stop().animate({scrollTop:0},1200);
        $('nav').fadeOut()
        $('nav li').removeClass('on')

    });

    // project li에 마우스를 올렸을 때 배경색 원이 커지게 설정
    // pj01
    $('.project ul>li:nth-child(1)').mouseenter(function (e) {
        $('.bg_circle').css({ 'background': 'linear-gradient(180deg, #5C82EE, #FFEEAC)' })
        $('section').eq(2).find('.bg_circle').addClass('active');
    });
    $('.project ul>li:nth-child(1)').mouseleave(function (e) {
        $('section').eq(2).find('.bg_circle').removeClass('active');
    })

    // pj02
    $('.project ul>li:nth-child(2)').mouseenter(function (e) {
        $('.bg_circle').css({ 'background': 'linear-gradient(180deg, #FFF2D1, #FF7347)' })
        $('section').eq(2).find('.bg_circle').addClass('active');
    });
    $('.project ul>li:nth-child(2)').mouseleave(function (e) {
        $('section').eq(2).find('.bg_circle').removeClass('active');
    })

    //pj03 
    $('.project ul>li:nth-child(3)').mouseenter(function (e) {
        $('.bg_circle').css({ 'background': 'linear-gradient(180deg, #000, #6d0000)' })
        $('section').eq(2).find('.bg_circle').addClass('active');
    });
    $('.project ul>li:nth-child(3)').mouseleave(function (e) {
        $('section').eq(2).find('.bg_circle').removeClass('active');
    })

})