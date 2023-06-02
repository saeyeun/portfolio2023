let s1 = 0;

        setInterval(function(){

            s1++;
            if(s1==3)s1=0;

            $('.hero_img_wrap .main_img').eq(s1-1).css('left','0').stop().animate({'left':'-100%'},1600)
            $('.hero_img_wrap .main_img').eq(s1).css('left','100%').stop().animate({'left':'0'},1600)

        },3000)