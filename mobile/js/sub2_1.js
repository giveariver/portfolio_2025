var brandimg = new Swiper('.brandimg', {
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
    pagination: {   //페이지 네이션
      el: '.swiper-pagination',
      //dynamicBullets: true,
      clickable: true,
      //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
    // autoplay: {  //자동
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
  });

  $('.brands .open_btn').toggle(function(e){    //홀수번째 → 리스트 보이게
    e.preventDefault();
    $(this).prev('.brands dl').slideDown('slow');
    $(this).text('-');

  },function(e){   //짝수번째 → 리스트 안보이게
      e.preventDefault();
      $(this).prev('.brands dl').slideUp('slow');
      $(this).text('+');
  });
  