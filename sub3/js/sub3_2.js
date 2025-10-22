$(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
    var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
    console.log(scroll);
    if(scroll>=1150 && scroll<1650){
        $('.ceo_message').removeClass('end');
        $('.ceo_message').addClass('on');
    }else if(scroll>=1650){
        $('.ceo_message').removeClass('on');
        $('.ceo_message').addClass('end')
    }else{
        $('.ceo_message').removeClass('on end');
    }
    if(scroll>=2100){
        $('.ethics_ceo_img').addClass('focus');
    
    }else{
        $('.ethics_ceo_img').removeClass('focus');
    }
  });


// $(window).on('scroll', function () {
//     var scroll = $(window).scrollTop();
//     var ceoTop = $('.ceo').offset().top;                 // ceo 섹션 시작 위치
//     var ceoHeight = $('.ceo').outerHeight();             // ceo 섹션 높이
//     var fixedHeight = $('.ceo_message').outerHeight();   // 고정되는 영역 높이
//     var endPoint = ceoTop + ceoHeight - fixedHeight - 50; // 끝나는 지점(50px은 여유)

//     if (scroll >= ceoTop && scroll < endPoint) {
//         $('.ceo_message')
//             .removeClass('end')
//             .addClass('on')
//             .css({ position: 'fixed', top: '50px', bottom: 'auto' });
//     } 
//     else if (scroll >= endPoint) {
//         $('.ceo_message')
//             .removeClass('on')
//             .addClass('end')
//             .css({ position: 'absolute', top: ceoHeight - fixedHeight + 'px', bottom: 'auto' });
//     } 
//     else {
//         $('.ceo_message')
//             .removeClass('on end')
//             .css({ position: 'relative', top: '0', bottom: 'auto' });
//     }
// });