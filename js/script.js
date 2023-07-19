$(document).ready(function () {
        //화면이 리사이즈 되었을때 높이값 설정
        $(window).resize(function () {
                var ht = $(window).height();
                $('section').height(ht);
        });

        // 기본 스크롤 이벤트 제거
        window.addEventListener("wheel", function (e) {
                e.preventDefault();
        }, { passive: false });


        // 랜딩페이지 제외한 섹션에서 마우스휠 돌릴 때, 풀페이지로 스크롤
        $('section').mousewheel(function (event, delta) {

                // 이전 섹션으로 이동
                if (delta < 0) {

                        let next = $(this).next().offset().top
                        $('html,body').stop().animate({ scrollTop: next }, 600)
                }

                // 다음 섹션으로 이동
                if (delta > 0) {
                        let prev = $(this).prev().offset().top
                        $('html,body').stop().animate({ scrollTop: prev }, 600)
                }

        })

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
                $('.bg_circle').css({ 'background': 'linear-gradient(180deg, #E43030, #250000)' })
                $('section').eq(1).find('.bg_circle').addClass('active');
        });
        $('.project ul>li:nth-child(3)').mouseleave(function (e) {
                $('section').eq(1).find('.bg_circle').removeClass('active');
        })

})