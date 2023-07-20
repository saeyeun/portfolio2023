$(document).ready(function(){
    // 2뎁스 메뉴 설정
    $('header .header_bottom nav .gnb>li').mouseenter(function(){
        if($( window ).width() > 996){
            // height값 0으로 숨기기
            $('.sub').css({'height': '0'})
            // height값을 줘서 나타나게 하기
            $(this).find('.sub').css({ 'height': '250px' ,'transition':'0.5s'})
            // 배경 높이값 설정
            $('.sub_bg').css({'height': '280px' })
        }
    })

    $('nav').on('mouseleave',function(){
        if($( window ).width() > 800){
        //sub_bg와 모든 dep2 메뉴 위로 사라지게
        $('.sub').css('height','0')
        $('.sub_bg').css({ borderWidth : '0', height: '0' })
        }
    })

    // hero영역 슬라이드
    //btn li를 클릭했을 때 slide의 li가 같은 순번을 찾아 움직여라
    $('#wrap .hero .btn li').click(function(){

        let i = $(this).index()
        // console.log(i)
        $('#wrap .hero .hero_slide ul li').eq(i-1).css({'left':'0'}).stop().animate({'left':'-100%'},1000)
        $('#wrap .hero .hero_slide ul li').eq(i).css({'left':'100%'}).stop().animate({'left':'0'},1000)
    
        //btn설정
        $('#wrap .hero .btn li').removeClass('on')
        $(this).addClass('on')
    });

    // 일정한 시간에 한번씩 자동으로 컴퓨터가 btn li를 클릭
    let a = 0;
    setInterval(function(){
        a++;
        if(a==3)a=0;
        $('#wrap .hero .btn li').eq(a).trigger('click')
    },5000);
    

    // info영역
    $('.info .info_contents .rightBox .thumb li').click(function(){
        // 썸네일 이미지의 순번 설정
        let ii = $(this).index()
        console.log(ii)

        // li의 해당 순번을 클릭했을 때, leftBox의 이미지가 변경
        $('.info .info_contents .leftBox .imgList ul li').eq(ii-1).animate({'opacity':'0'},800)
        $('.info .info_contents .leftBox .imgList ul li').eq(ii).animate({'opacity':'1'},800)
        });


    // 포토갤러리 슬라이드
    let b = 0;
    // 오른쪽 화살표를 클릭했을 때
    $('.program .right').click(function(){
        if(b<4)
        b++;
        console.log(b)

        let liWd = $('.program .imgList li').width()
        $('.program .imgList ul').css({'left':(-liWd+30)*b})

    })

    // 왼쪽 화살표를 클릭했을 때
    $('.program .left').click(function(){
        if(b > 0)
        b--;
        // console.log(b)

        let liWd = $('.program .imgList li').width()
        $('.program .imgList ul').css({'left':(-liWd+30)*b})
    });

    // let b = 0;
    // // 오른쪽 화살표를 클릭했을 때
    // $('.program .imgSlide .btn .right').click(function(){
    //     if(b<4)
    //     b++;
    //     console.log(b)
    //     let liWd = $('.program .imgList li').width()
    //     $('.program .imgSlide .imgList_wrap .imgList').css({'left':(-liWd+20)*b})
    // })

    // // 왼쪽 화살표를 클릭했을 때
    // $('.program .imgSlide .btn .left').click(function(){
    //     if(b > 0)
    //     b--;
    //     console.log(b)
    //     let liWd = $('.program .imgList li').width()
    //     $('.program .imgSlide .imgList_wrap .imgList').css({'left':(-liWd+20)*b})
    // });

    // notice
    //공지사항의 li를 클릭하였을 때, 해당 내용이 바뀌도록 설정
    $('.notice .btnList p').click(function(){
        let c = $(this).index()
        // console.log(c)

        $('.notice .tabBar ul').hide()
        $('.notice .tabBar ul').eq(c).show()

        //  li를 클릭했을 때, 클릭 상태 유지
        $('.notice .btnList p').removeClass('on')
        $(this).addClass('on')

    })

})//자바스크립트 끝