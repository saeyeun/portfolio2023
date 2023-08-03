$(document).ready(function () {
    // 서브 페이지  메뉴
    $('#sub .menu nav ul li').click(function (e) {
        let a = $(this).index()
        console.log(a);

        //tab의 li를 클릭했을 때, 클릭상태 유지
        $('#sub .menu nav ul li').removeClass('on')
        $(this).addClass('on')
    });



    // profile영역 가로슬라이드 구현
    // 갯수구하기
    let numAC = $('.profile ul li').size()
    console.log(numAC);
    // nth갯수랑 똑같음



    // 가로값구하기
    let widAC = $('.profile ul li').width()
    // console.log(widAC)



    //세로값구하기

    let htAC = $('.profile ul li').height()
    // console.log(htAC);

    let winht = $(window).height()
    // console.log(winht)

    // 중앙 위치
    let secTop = (winht / 2) - (htAC / 2)
    // console.log(secTop)



    // 섹션가로값 설정하기
    $('.profile').width(600 + (widAC) * numAC)

    // section위치 고정
    $('.profile').css({ 'top': secTop })


    $(window).scroll(function () {
        let sc = $(this).scrollTop()
        // $('h1').text(sc)
        $('.profile').css({ 'left': -sc })


    });



    // brand 영역 ------------

    // btn을 클릭했을 때, .circle이 90deg만큼 돌아가도록 설정
    $('.brand .tab ul li').click(function (e) {
        let a = $(this).index()
        console.log(a);
        $('.brand .circle').css({ 'transform': 'rotate(' + 90 * a + 'deg)' })

        //tab의 li를 클릭했을 때, 클릭상태 유지
        $('.brand .tab ul li').removeClass('on')
        $(this).addClass('on')
    });

    // tab의 li를 클릭했을 때, 배경색도 같이 변경
    $('.brand .tab ul li').eq(0).click(function(){
        $('.brand').css({'background':'linear-gradient(180deg, #000, #6d0000)'})
    })

    $('.brand .tab ul li').eq(1).click(function(){
        $('.brand').css({'background':'linear-gradient(180deg, #c0c0c0, #47e3ff)'})
    })
    $('.brand .tab ul li').eq(2).click(function(){
        $('.brand').css({'background':'linear-gradient(180deg, #c0c0c0, #ff6913)'})
    })
    $('.brand .tab ul li').eq(3).click(function(){
        $('.brand').css({'background':'linear-gradient(180deg, #c0c0c0, #e3f821)'})
    })






    // // .btn에 마우스 오버시 전체 화면이 왼쪽으로 움직임
    // $('.brand .btn').mouseenter(function () {
    //     $('.brand .btn').parent('.brand').css({ 'left': -30 });
    // })
    // $('.brand .btn').mouseleave(function () {
    //     $('.brand .btn').parent('.brand').css({ 'left': 0 });
    // })

    // btn을 클릭하면 뒤에 play영역이 나오도록 설정
    $('.btn').click(function () {
        // $(this).off('mouseleave');

        $('.brand').toggleClass('on')
    })




    // gallery 영역---------------

    // tab의 li를 클릭했을 때, 순번을 찾고,imgBox의 div에게 순번에 맞추어 on값을 설정.
    $('.gallery .gallery_contents .tab ul li').click(function () {
        let i = $(this).index()
        console.log(i);

        $('.gallery .gallery_contents .imgBox>div').removeClass('on')
        $('.gallery .gallery_contents .imgBox>div').eq(i).addClass('on')

        //tab의 li를 클릭했을 때, 클릭상태 유지
        $('.gallery .gallery_contents .tab ul li').removeClass('on')
        $(this).addClass('on')
    });

// video영역-----------------
$('.video_contents .video1 iframe').mouseenter(function (e) {
    // $('.bg_circle').css({ 'background': 'linear-gradient(180deg, #5C82EE, #FFEEAC)' })
    $('.video').find('.video_contents .video1 div').addClass('active');
});
$('.video_contents .video1 iframe').mouseleave(function (e) {
    // $('.bg_circle').css({ 'background': 'linear-gradient(180deg, #5C82EE, #FFEEAC)' })
    $('.video').find('.video_contents .video1 div').removeClass('active');
});
    


})