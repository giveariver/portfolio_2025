
$(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
  var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
  console.log(scroll);

    if(scroll>700){
        $('.mission_vision_wrap .mission').css('transform', 'scaleX(1)').css('opacity',1).css('width',1400);

    }else
        $('.mission_vision_wrap .mission').css('transform', 'scaleX(0)').css('opacity',0);

    if(scroll>900){
        $('.mission_vision_wrap .vision').css('transform', 'scaleX(1)').css('opacity',1).css('width',1400);


    }else
        $('.mission_vision_wrap .vision').css('transform', 'scaleX(0)').css('opacity',0);

});



$(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
    var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다

    if (scroll >= 2400 && scroll < 3600) {
        $('.CJ_value').addClass('fix').removeClass('unfix');
    } else if (scroll >= 3600) {
        $('.CJ_value').removeClass('fix').addClass('unfix');
    } else {
        $('.CJ_value').removeClass('fix unfix');
    }

    if (scroll >= 2500 && scroll < 2700) {
            $('.value_list li:eq(4)').removeClass('active');
            $('.value_list li:eq(0)').addClass('active');
            $('.value_list li:eq(1)').removeClass('active');
        } else if (scroll >= 2700 && scroll < 2900) {
            $('.value_list li:eq(0)').removeClass('active');
            $('.value_list li:eq(1)').addClass('active');
            $('.value_list li:eq(2)').removeClass('active');
        } else if (scroll >= 2900 && scroll < 3100) {
            $('.value_list li:eq(1)').removeClass('active');
            $('.value_list li:eq(2)').addClass('active');
            $('.value_list li:eq(3)').removeClass('active');
        } else if (scroll >= 3100 && scroll < 3300) {
            $('.value_list li:eq(2)').removeClass('active');
            $('.value_list li:eq(3)').addClass('active');
            $('.value_list li:eq(4)').removeClass('active');
        } else if (scroll >= 3300 && scroll < 3500) {
            $('.value_list li:eq(3)').removeClass('active');
            $('.value_list li:eq(4)').addClass('active');
        }
    });
    // if (scroll >= 2500 && scroll < 2600) {
    //     $('.value_list li:eq(4)').removeClass('active');
    //     $('.value_list li:eq(0)').addClass('active');
    //     $('.value_list li:eq(1)').removeClass('active');
    // } else if (scroll >= 2600 && scroll < 2700) {
    //     $('.value_list li:eq(0)').removeClass('active');
    //     $('.value_list li:eq(1)').addClass('active');
    //     $('.value_list li:eq(2)').removeClass('active');
    // } else if (scroll >= 2700 && scroll < 2800) {
    //     $('.value_list li:eq(1)').removeClass('active');
    //     $('.value_list li:eq(2)').addClass('active');
    //     $('.value_list li:eq(3)').removeClass('active');
    // } else if (scroll >= 2800 && scroll < 2900) {
    //     $('.value_list li:eq(2)').removeClass('active');
    //     $('.value_list li:eq(3)').addClass('active');
    //     $('.value_list li:eq(4)').removeClass('active');
    // } else if (scroll >= 2900 && scroll < 3000) {
    //     $('.value_list li:eq(3)').removeClass('active');
    //     $('.value_list li:eq(4)').addClass('active');
    // }