$(document).ready(function () {
        //화면이 리사이즈 되었을때 높이값 설정
        $(window).resize(function () {
                var ht = $(window).height();
                $('section').height(ht);
        });



        // 메뉴설정
        $('#menu ul li').click(function () {
                let i = $(this).index();
                let sht = $('section').height();

                $('html,body').stop().animate({ scrollTop: i * sht }, 1200)

                $('nav li').removeClass('on')
                $(this).addClass('on')
        });

        $('h1').click(function () {
                //logo를 클릭했을 때,scroll의 위치를 0으로 이동해라.
                $('html,body').stop().animate({ scrollTop: 0 }, 1200);
                $('nav').fadeOut()
                $('nav li').removeClass('on')

        });

        // project li에 마우스를 올렸을 때 배경색 원이 커지게 설정
        // pj01
        $('.project ul>li:nth-child(1)').mouseenter(function (e) {
                $('.bg_circle').css({ 'background': 'linear-gradient(180deg, #5C82EE, #FFEEAC)' })
                $('section').eq(1).find('.bg_circle').addClass('active');
        });
        $('.project ul>li:nth-child(1)').mouseleave(function (e) {
                $('section').eq(1).find('.bg_circle').removeClass('active');
        })

        // pj02
        $('.project ul>li:nth-child(2)').mouseenter(function (e) {
                $('.bg_circle').css({ 'background': 'linear-gradient(180deg, #FF7347, #FFF2D1)' })
                $('section').eq(1).find('.bg_circle').addClass('active');
        });
        $('.project ul>li:nth-child(2)').mouseleave(function (e) {
                $('section').eq(1).find('.bg_circle').removeClass('active');
        })

        //pj03 
        $('.project ul>li:nth-child(3)').mouseenter(function (e) {
                $('.bg_circle').css({ 'background': 'linear-gradient(180deg, #E8E8E8, #810000)' })
                $('section').eq(1).find('.bg_circle').addClass('active');
        });
        $('.project ul>li:nth-child(3)').mouseleave(function (e) {
                $('section').eq(1).find('.bg_circle').removeClass('active');
        })


        //팝업창 설정
        // pop1
        $('.project .pj01 .btn .btn01').click(function () {
                $('.pop1 .img').animate({ scrollTop: 0 }, 0.1)
                $('.pop1').fadeIn()
                window.addEventListener("wheel", function (e) {
                        e.preventDefault();
                }, { passive: true});
        })

        $('.pop1 .close').click(function () {
                $(this).parent().fadeOut()
        })

        // pop2
        $('.project .pj02 .btn .btn01').click(function () {
                $('.pop2 .img').animate({ scrollTop: 0 }, 0.1)
                $('.pop2').fadeIn()
                window.removeEventListener("wheel", function (e) {
                        e.preventDefault();
                }, { passive: true });
        })

        $('.pop2 .close').click(function () {
                $(this).parent().fadeOut()
        })
        // pop3
        $('.project .pj03 .btn .btn01').click(function () {
                $('.pop3 .img').animate({ scrollTop: 0 }, 0.1)
                $('.pop3').fadeIn()
        })

        $('.pop3 .close').click(function () {
                $(this).parent().fadeOut()
        })

        // 스킬영역 -------------
        $(window).scroll(function (e) {
                e.preventDefault()
                let sc = $(this).scrollTop();
                let a = $('#wrap .skill').offset().top;
                if (sc >= a - 200) {
                        $('.skill').addClass('on')
                } else {
                        $('.skill').removeClass('on')
                }
        })

})