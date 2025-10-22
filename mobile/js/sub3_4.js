
$(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
    var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
    //console.log(scroll);
    if(scroll>=200){
      $('.saftey_list01').addClass('visible');
      $('.saftey_list01 li:eq(0)').stop(true,true).delay(700).animate({opacity:1},700);
      $('.saftey_list01 li:eq(1)').stop(true,true).delay(800).animate({opacity:1},700);
      $('.saftey_list01 li:eq(2)').stop(true,true).delay(900).animate({opacity:1},700);
    }else{
      $('.saftey_list01').removeClass('visible');
      $('.saftey_list01 li').css('opacity',0);
    }
  });