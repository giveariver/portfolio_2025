$(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
    var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
    console.log(scroll);
    if(scroll>900){
      $('.safety_title_txt').addClass('on');
    }else
      $('.safety_title_txt').removeClass('on');
  });

  // $(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
  //   var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
  //   console.log(scroll);
  //   if(scroll>=1400 && scroll<2000){
  //     $('.safety_foods li:eq(0) div').addClass('show');
  //   }else if(scroll>=2000 && scroll<2600){
  //     $('.safety_foods li:eq(1) div').addClass('show');
  //   }else if(scroll>=2600 && scroll<3600){
  //     $('.safety_foods li:eq(2) div').addClass('show');
  //   }else if(scroll>=3600 && scroll<4200){
  //     $('.safety_foods li:eq(3) div').addClass('show');
  //   }
  //   else
  //     $('.safety_foods li div').removeClass('show');
  // });
  