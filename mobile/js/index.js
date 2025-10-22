// 비주얼 swiper
var swiper1 = new Swiper('.swiper1', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1,  //단수
    spaceBetween: 0,  //단사이 여백
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {   //페이지 네이션
      el: '.swiper-pagination',
      //dynamicBullets: true,
      clickable: true,
      //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
    autoplay: {  //자동
      delay: 5000,
      disableOnInteraction: false
    }
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
  });


  //슬로건
  
$(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
    var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
    //console.log(scroll);
    if(scroll>=200){
      $('.slogan div:eq(0)').css('opacity',1);
    }else
      $('.slogan div:eq(0)').css('opacity',0);
  
    if(scroll>=250){
      $('.slogan div:eq(1)').css('opacity',1);
    }else
      $('.slogan div:eq(1)').css('opacity',0);
  
    if(scroll>=350){
      $('.slogan div:eq(2)').css('opacity',1);
    }else
      $('.slogan div:eq(2)').css('opacity',0);
  
    if(scroll>=400){
      $('.slogan div img').css('width',50);
      $('.slogan div img').css('transform', 'scaleX(1)');
      $('.slogan div img').css('margin-left',3);
      $('.slogan div img').css('margin-right',3);
    }else{
      $('.slogan div img').css('width',0);
      $('.slogan div img').css('transform', 'scaleX(0)');
      $('.slogan div img').css('margin-left',0);
      $('.slogan div img').css('margin-right',0);
    }
  });

//회사소개
//회사소개 swiper
var swiper_about = new Swiper('.swiper_about', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1,  //단수
    spaceBetween: 50,  //단사이 여백
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {   //페이지 네이션
      el: '.swiper-pagination',
      //dynamicBullets: true,
      clickable: true,
      //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
    autoplay: {  //자동
      delay: 5000,
      disableOnInteraction: false
    }
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
  });

//브랜드
//브랜드 swiper
$(document).ready(function(){
  var colors = [
    "#0C4630", // 1번 슬라이드
    "#8C202D", // 2번 슬라이드
    "#E14258", // 3번 슬라이드
    "#49443B", // 4번 슬라이드 ...
    "#D4BA97",
    "#C2D13A",
    "#111",
    "#E50057"
  ];

  var brands_list = new Swiper('.brands_list', {
    //autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1,  //단수
    spaceBetween: 0,  //단사이 여백
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // pagination: {   //페이지 네이션
    //   el: '.swiper-pagination',
    //   //dynamicBullets: true,
    //   clickable: true,
    //   //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    // },
    autoplay: {  //자동
      delay: 4500,
      disableOnInteraction: false
    },
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
    on: {
      slideChange: function () {
        // 현재 활성화된 인덱스
        var idx = this.realIndex;

        // 색상 배열에서 꺼내오기 (슬라이드 수보다 배열이 짧으면 % 연산으로 반복 가능)
        var bgColor = colors[idx % colors.length];  

        $(".circle_bg").css("background", bgColor);
      }
    }
  });
  $(".circle_bg").css("background", colors[brands_list.realIndex]);
});


//지속가능경영
var swiper_sustain = new Swiper('.swiper_sustain', {
  autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 1.3,  //단수
  spaceBetween: 35,  //단사이 여백
  loop: true,  //무한 loop
  //freeMode: true,  //터치 만큼 자유롭게 이동
  centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
  //effect: 'fade',   //페이드효과(단수가 1단이 된다)
  //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
  navigation: {    //이전/다음 버튼
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  // pagination: {   //페이지 네이션
  //   el: '.swiper-pagination',
  //   //dynamicBullets: true,
  //   clickable: true,
  //   //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  // },
  // autoplay: {  //자동
  //   delay: 5000,
  //   disableOnInteraction: false
  // },
  // scrollbar: {  //하단 스크롤바
  //   el: '.swiper-scrollbar',
  //   hide: true
  // }
});