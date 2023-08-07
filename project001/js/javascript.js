$(document).ready(function () {
    // 2뎁스 메뉴 설정
    $('header .header_bottom nav .gnb>li').mouseenter(function () {
        if ($(window).width() > 996) {
            // height값 0으로 숨기기
            $('.sub').css({ 'height': '0' })
            // height값을 줘서 아래로 나타나게 하기
            $(this).find('.sub').css({ 'height': '250px', 'transition': '0.5s' })
            // 배경 높이값
            $('.sub_bg').css({ 'height': '280px' })
        }
    })
    $('header .header_bottom nav').mouseleave(function () {
        if ($(window).width() > 800) {
            //sub_bg와 sub 메뉴 위로 사라지게 하기
            $('.sub').css('height', '0')
            $('.sub_bg').css({ 'height': '0' })
        }
    })

    //스크롤이벤트
    $(window).scroll(function (e) {
        e.preventDefault()

        let sc = $(this).scrollTop();

        let aa = $('#wrap .program').offset().top;
        if(sc>aa-600) {
            $('.program .imgList').addClass('on')
        } else {
            $('.program .imgList').removeClass('on')
        }

    });

    // 모바일 메뉴 버튼 설정
    $('.m_menu_btn').click(function () {
        $('nav').animate({right:'0'}, 300, "linear");
        $('.m_menu_top .close').animate({right:'0'}, 300, "linear");
        })
        
    $('.close').click(function(){
        $('header .header_bottom nav').animate({right:'-100vw'}, 300, "linear");
        $('.m_menu_top .close').animate({right:'-100vw'}, 300, "linear");
            
        });

    // hero영역 슬라이드
    //btn li를 클릭했을 때 slide의 li가 같은 순번을 찾아 움직여라
    $('#wrap .hero .btn li').click(function () {

        let i = $(this).index()
        // console.log(i)
        $('#wrap .hero .hero_slide ul li').eq(i - 1).css({ 'left': '0' }).stop().animate({ 'left': '-100%' }, 1000)
        $('#wrap .hero .hero_slide ul li').eq(i).css({ 'left': '100%' }).stop().animate({ 'left': '0' }, 1000)

        //btn설정
        $('#wrap .hero .btn li').removeClass('on')
        $(this).addClass('on')
    });

    // 일정한 시간에 한번씩 자동으로 컴퓨터가 btn li를 클릭
    let a = 0;
    setInterval(function () {
        a++;
        if (a == 3) a = 0;
        $('#wrap .hero .btn li').eq(a).trigger('click')
    }, 5000);


    // info영역
    // 썸네일 이미지를 클릭했을 시 큰 이미지가 바뀜
    $('.info .info_contents .rightBox .thumb li').click(function () {
        // 썸네일 이미지의 순번 설정
        let ii = $(this).index()
        console.log(ii)
        // 썸네일 클릭 시, 파란색 테두리 유지
        $('.info .info_contents .rightBox .thumb li').removeClass('on')
        $(this).addClass('on')
        // li의 해당 순번을 클릭했을 때, leftBox의 이미지가 변경
        $('.info .info_contents .leftBox .imgList ul li').removeClass("on")
        $('.info .info_contents .leftBox .imgList ul li').eq(ii).addClass("on")
    });


    // 포토갤러리 슬라이드
    let b = 0;
    // 오른쪽 화살표를 클릭했을 때
    $('.program .right').click(function () {
        if (b < 4)
            b++;
        console.log(b)

        let liWd = $('.program .imgList li').width()
        $('.program .imgList ul').css({ 'left': (-liWd + 30) * b })

    })

    // 왼쪽 화살표를 클릭했을 때
    $('.program .left').click(function () {
        if (b > 0)
            b--;
        // console.log(b)

        let liWd = $('.program .imgList li').width()
        $('.program .imgList ul').css({ 'left': (-liWd + 30) * b })
    });

    // notice영역
    //공지사항의 li를 클릭하였을 때, 해당 내용이 바뀌도록 설정
    $('.notice .btnList p').click(function () {
        let c = $(this).index()
        // console.log(c)

        $('.notice .tabBar ul').hide()
        $('.notice .tabBar ul').eq(c).show()

        //  li를 클릭했을 때, 클릭 상태 유지
        $('.notice .btnList p').removeClass('on')
        $(this).addClass('on')

    })

})//자바스크립트 끝