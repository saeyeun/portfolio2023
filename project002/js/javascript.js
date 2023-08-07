$(document).ready(function () {
    // 새로고침했을 때, 스크롤 맨위로 이동
    window.onload = function () {
        setTimeout(function () {
            scrollTo(0, 0);
        }, 100);
    }

    // 2뎁스 메뉴 설정
    $('nav').mouseenter(function () {
            // height값 0으로 숨기기
            $('.depth2').css({ 'height': '0' })
            // height값을 줘서 아래로 나타나게 하기
            $(this).find('.depth2').css({ 'height': '250px', 'transition': '0.4s' })
            // 배경 높이값
            $('.depth2_bg').css({ 'height': '210px' })
    })

    $('nav').mouseleave(function () {
            //sub_bg와 sub 메뉴 위로 사라지게 하기
            $('.depth2').css('height', '0')
            $('.depth2_bg').css({ 'height': '0' })
    })


    // hero영역 - 텍스트와 이미지가 양쪽 끝에서 중앙으로 순차적으로 모이게 설정    
    setTimeout(function () {
        $('#h_wrap .hero .hero_contents .title').addClass('on')
    }, 100);

    setTimeout(function () {
        $('#h_wrap .hero .hero_contents .img').addClass('on')
    }, 500);

    // 스크롤이벤트
    $(window).scroll(function (e) {
        e.preventDefault()

        let sc = $(this).scrollTop();
        // $('h1').text(sc)

        // 헤더의 nav부분이 스크롤을 내리면 색깔이 바뀌게 설정
        if(sc>=50) {
            $('#h_wrap header').addClass('active')
        } else {
            $('#h_wrap header').removeClass('active')
        }

        //story영역 - 이미지와 텍스트가 서서히 나타나게 설정
        let aa = $('#wrap .text_slide_wrap').offset().top;
        if(sc>=aa-200) {
            $('.story').addClass('on')
        }
        if(sc<aa-200){
            $('.story').removeClass('on')
        }

        // vision 영역 - 2개의 원이 순차적으로 아래에서 위로 나타나게 설정
        let cc = $('#wrap .vision').offset().top;
        if (sc >= cc-200) {
            $('.vision_contents').addClass('on')
        }
        if (sc < cc-200) {
            $('.vision_contents').removeClass('on')
        }

    });


    // 메뉴영역에서 양쪽 화살표를 클릭했을 때, 이미지 슬라이드 이동
    let a = 0
    // 오른쪽 화살표를 클릭했을 때
    $('.menu .arrow .right').click(function () {
        if (a < 5)
            a++;

        $('.menu article .imgList .listBox').css({ 'left': (-200) * a })
    })

    // 왼쪽 화살표를 클릭했을 때
    $('.menu .arrow .left').click(function () {
        if (a > 0)
            a--;

        $('.menu article .imgList .listBox').css({ 'left': (-200) * a })
    })

    // TOP버튼 설정
    $(function () {
        // 화면 맨위에서는 TOP버튼이 사라지도록 설정
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.top_btn').fadeIn();
            } else {
                $('.top_btn').fadeOut();
            }
        });
        // TOP버튼 클릭 시 화면 위로 이동
        $(".top_btn").click(function () {
            $('html, body').animate({ scrollTop: 0 }, 400);
        });
    });


    // 서브페이지
    // 수량부분에서 마이너스와 플러스를 클릭했을 때, 숫자가 늘어나거나 줄어들게 설정
    let i = 0;
    
    $('.product .p_wrap .p_buy .num ul li').eq(2).click(function(){
        $('.product .p_wrap .p_buy .num ul li').eq(1).text(++i)
        $('.h_r_btn p').text(i)
    })

    $('.product .p_wrap .p_buy .num ul li').eq(0).click(function(){
        // 0미만으로 내려가지 않도록 설정
        if(i-1<0){
            i = 1
        }

        $('.product .p_wrap .p_buy .num ul li').eq(1).text(--i)
        $('.h_r_btn p').text(i)
    })

});//자바스크립트 끝