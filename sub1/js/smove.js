//연혁 페이지 - 해당 연도로 부드럽게 이동 코드


var target_value = 0;
//각각의 목적지
var y2020 = $('.y2020').offset().top;
var y2010 = $('.y2010').offset().top;
var y2000 = $('.y2000').offset().top;
var y1990 = $('.y1990').offset().top;

$('.history_menu li a').click(function(e){       //각각의 연도 버튼을 클릭하면
    e.preventDefault();




    if ($(this).hasClass('link1')) {    //첫번째 버튼 클릭 시
        var target_value = y2020-600;
    } else if ($(this).hasClass('link2')){
        var target_value = y2010-600;
    } else if ($(this).hasClass('link3')){
        var target_value = y2000-600;
    } else if ($(this).hasClass('link4')){
        var target_value = y1990-600;
    }

    $('html,body').stop().animate({'scrollTop':target_value},1000); 
     //해당목적지로 부드럽게 스크롤 이동
});

// $(window).on('scroll',function(){
//     var scroll = $(window).scrollTop();
//     console.log(scroll);

//     if(scroll>=y2020-400){
//         $('header').slideUp('fast');
//         $('#content .content_area .history_title').addClass('fix');
//     }else{
//         $('header').slideDown();   
//         $('#content .content_area .history_title').removeClass('fix');
//     }

// });