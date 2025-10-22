// $(document).ready(function () {
//   let isDark = false; // 현재 모드 상태 저장 (false = 라이트, true = 다크)

//   $('.change_btn').click(function (e) {
//     e.preventDefault();

//     // 모드 토글
//     $('body').toggleClass('dark_mode');
//     $('.change_btn').toggleClass('dark');
//     isDark = $('body').hasClass('dark_mode');

//     // 각 section 글자색 및 content 배경색 변경
//     if (isDark) {
//       $('section').css('color', '#f5f5f5'); // 섹션 글자색: 흰색
//       $('a').css('color', '#f5f5f5');
//       $('a:visited').css('color', '#f5f5f5');
//       $('#content').css('background-color', '#111'); // 컨텐츠 배경색: 어두운색
//       $('.plug').text('DARK'); // 버튼 텍스트 변경
//       $('.power img').attr('src', './images/main/dark_plug.png'); // 다크모드 이미지
//       $('#footerArea').css('color', '#f5f5f5');
//       $('#footerArea').css('background', '#111');
//       $('.footer_logo img').attr('src', './images/common/Footer_logo_w.png');
//       $('#footerArea .footer_top').css('border-color', '#fff');
//       $('#footerArea .footer_bottom').css('border-color', '#fff');
//       $('#footerArea p').css('border-color', '#fff');
//     } else {
//       $('section').css('color', '#221715'); // 섹션 글자색: 검정
//       $('a').css('color', '#221715');
//       $('a:visited').css('color', '#221715');
//       $('#content').css('background-color', '#fff'); // 컨텐츠 배경색: 흰색
//       $('.plug').text('LIGHT'); // 버튼 텍스트 변경
//       $('.power img').attr('src', './images/main/light_plug.png'); // 라이트모드 이미지
//       $('#footerArea').css('color', '#221715');
//       $('#footerArea').css('background', '#fff');
//       $('.footer_logo img').attr('src', './images/common/Footer_logo.png');
//       $('#footerArea .footer_top').css('border-color', '#111');
//       $('#footerArea .footer_bottom').css('border-color', '#111');
//       $('#footerArea p').css('border-color', '#111');
//     }
//   });
// });





var swiper_ourstory = new Swiper('.swiper_ourstory', {
    slidesPerView: 2.4, //단수
    spaceBetween: 16,  //단사이 여백
    //loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // autoplay: {  //자동
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
    breakpoints: {
      1025: {
        slidesPerView: 1.1
      },
      1280: {
        slidesPerView: 1.3
      },
      1440:{
        slidesPerView: 1.5
      }}

  });

  var swiper_newproduct01 = new Swiper('.swiper_newproduct01', {
    slidesPerView: 1, //단수
    spaceBetween: 0,  //단사이 여백
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
    pagination: {   //페이지 네이션
                el: '.swiper-pagination',
                //dynamicBullets: true,
                clickable: true,
                //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
            }
    // autoplay: {  //자동
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
  });

  var swiper_newproduct02 = new Swiper('.swiper_newproduct02', {
    slidesPerView: 1, //단수
    spaceBetween: 0,  //단사이 여백
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    pagination: {   //페이지 네이션
                el: '.swiper-pagination',
                //dynamicBullets: true,
                clickable: true,
                //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
            }
  });

  var product_list = new Swiper('.product_list', {
    slidesPerView: 'auto', //단수
    spaceBetween: 16,  //단사이 여백
    //loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
      breakpoints: {
        1025: {
          spaceBetween: 24
        }}
    });

    var product_img = new Swiper('.product_img', {
    slidesPerView: 1, //단수
    spaceBetween: 0,  //단사이 여백
    loop: true,  //무한 loop
    effect: 'fade',   //페이드효과(단수가 1단이 된다)
    autoheight: true,
    allowTouchMove : false, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
    navigation: {    //이전/다음 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {   //페이지 네이션
        el: '.swiper-pagination',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    }
  });


  //sec05 media
$(document).ready(function(){
    // 영상 링크 배열
    var videoLinks = [
        "https://www.youtube.com/embed/oM9ehPsCodM?si=MTg8hJYO80is4AV9&playsinline=1",
        "https://www.youtube.com/embed/Y-Grpk6ywoY?si=qpAxhL2A3a3h5Emq&playsinline=1",
        "https://www.youtube.com/embed/-2u-OXszt8I?si=G8-W1rB8JPIQzp3w&playsinline=1"
    ];

    //제목 배열
    var videotitle = [
      "READY TO LIGHT, SNOWMAN.<span>, 2025</span>",
      "ADORABLE ANYWHERE, DUMBO13.<span>, 2024</span>",
      "RE-VIVED SNOWMAN, SPIN EDITION.<span>, 2024</span>"
    ];

    // a 태그 클릭
    $('.youtube_box a').click(function(e){
        e.preventDefault();
        var idx = $(this).index()-1; // 부모 안에서 클릭한 a의 순서
        $('.youtube_box .main_video iframe').attr('src', videoLinks[idx]);
        $('.youtube_box .main_video p').html(videotitle[idx]);

        //play버튼 활성화
        $('.youtube_box .play_btn').removeClass('active');
        $(this).find('.play_btn').addClass('active');
    });
});

$(document).ready(function() {
  var screenSize = $(window).width();
  if( screenSize > 480){
    $(".product_title p:eq(0)").html("백열전구에 대한 신념을 바탕으로 오래된 빛에 디자인을 더해<br> 새로운 제품으로 만들어나가는 도전을 계속합니다.");

  }else{
    $(".product_title p:eq(0)").html("백열전구에 대한 신념을 바탕으로<br> 오래된 빛에 디자인을 더해 새로운 제품으로<br> 만들어나가는 도전을 계속합니다.");

  }

  var current=0;

  $(window).resize(function(){ 
    var screenSize = $(window).width();  //가로 해상도
    if( screenSize > 480){  
        $(".product_title p:eq(0)").html("백열전구에 대한 신념을 바탕으로 오래된 빛에 디자인을 더해<br> 새로운 제품으로 만들어나가는 도전을 계속합니다.");
            current=1; 
    }
    if(current==1 && screenSize <= 480){
        $(".product_title p:eq(0)").html("백열전구에 대한 신념을 바탕으로<br> 오래된 빛에 디자인을 더해 새로운 제품으로<br> 만들어나가는 도전을 계속합니다.");
          current=0; 
    }
    });
  
});
  