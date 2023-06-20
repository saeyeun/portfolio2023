$(document).ready(function () {


    // 스크롤값
    // let ht = $(window).height(),
    //     hht = $('header').height(),
    //     fht = $('footer').height();


    // 새로고침했을 때, 스크롤 맨위로 이동
    window.onload = function () {
        setTimeout(function () {
            scrollTo(0, 0);
        }, 100);
    }


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

        //story영역 - 이미지와 텍스트가 서서히 나타나게 설정
        let htop = $('#wrap .text_slide_wrap').offset().top;
        if(sc>=htop-200) {
            $('.story').addClass('on')
        }

        //history 영역 - 오른쪽 이미지와 텍스트영역이 우측에서 날아옴
        if (sc >= 1600) {
            $('.history .right').addClass('on')
        }

        // vision 영역 - 2개의 원이 순차적으로 아래에서 위로 나타나게 설정
        if (sc >= 3333) {
            $('.vision_contents').addClass('on')
        }

    });


    // 메뉴 슬라이드
    let a = 0
    $('.menu .arrow .right').click(function () {
        if (a < 4)
            a++;

        // let ulWd = $('.menu>.lmgList ul').width()
        $('.menu article .imgList ul').css({ 'left': (-200) * a })
    })

    $('.menu .arrow .left').click(function () {
        if (a > 0)
            a--;

        // let ulWd = $('.menu>.lmgList ul').width()
        $('.menu article .imgList ul').css({ 'left': (-200) * a })
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
    //수량을 선택하면 숫자가 늘어나거나 줄어들게 설정
    




    
});//자바스크립트 끝