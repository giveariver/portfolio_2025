$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    var win_height =$(window).height();
    var header_height =$('header').height();

    if(scroll>win_height){ //300이상의 거리가 발생되면
        $('.top_move').fadeIn('slow');  //top보여라~~~~
    }else{
        $('.top_move').fadeOut('fast');//top안보여라~~~~
    }

    if(scroll>win_height-header_height){ //300이상의 거리가 발생되면
        $('header').css('background','#fff');  //top보여라~~~~
        $('header').css('border-bottom','2px solid #111'); 
        
        $('#headerArea h1').addClass('black');
        $('#headerArea span').css('color','#111'); 
        $('#headerArea #gnb ul li a').css('color','#111');  
        $('#headerArea .top_menu .search').css('background','#adadad'); 
        $('.menu_ham span').css('background','#111');
    }else{
        $('header').css('background','transparent');//top안보여라~~~~
        $('header').css('border-bottom','2px solid transparent'); 

        $('#headerArea h1').removeClass('black');
        $('#headerArea span').css('color','#fff');
        $('#headerArea #gnb ul li a').css('color','#fff');  
        $('#headerArea .top_menu .search').css('background','rgba(0,0,0,.4)'); 
        $('.menu_ham span').css('background','#fff');
    }
});


$('.top_move').click(function(e){
    e.preventDefault();
     //상단으로 스르륵 이동합니다.
    $("#wrap .down").addClass('light');
    $("html,body").stop().animate({"scrollTop":0}, function(){
        // 잠깐 유지 후 다시 꺼짐 상태로
        setTimeout(()=> $("#wrap .down").removeClass('light'), 500);
      });
});



//반응형 내비게이션 처리
$(document).ready(function() {

    var onoff = false; //false(메뉴닫힘) true(메뉴열림)
    $(".menuOpen").click(function(e){
        e.preventDefault();
        if(onoff == false){
            $("#gnb").slideDown('slow');
            $('.menu_ham').addClass('open');//메뉴모양변경
            onoff = true;
        }else{
            $("#gnb").slideUp('slow');
            $('.menu_ham').removeClass('open');
            onoff = false;
        }
    });
    //  네비높이 맞추기(페이지 로딩시 1회)
    var screenSize = $(window).width();
    var winh =  $(document).height();

    if( screenSize > 1280){
        $("#gnb").height('auto');
    }else{
        $("#gnb").height('100vh');
    }

    var current=0; // 0(해상도가  일반pc ↓), 1(일반pc ↑)

    $(window).resize(function(){ 
        var screenSize = $(window).width();  //가로 해상도
        if( screenSize > 1280){  //일반pc ↑
            $("#gnb").show();
            $("#gnb").height('auto');
            $('.menu_ham').removeClass('open');
                current=1; //일반pc ↑
        }
        if(current==1 && screenSize <= 1280){
            $("#gnb").hide();
            $("#gnb").height('100vh');
            
            current=0; // 일반pc ↓
        }
        }); 
    
});


//다크모드
$(document).ready(function () {
    let isDark = false; // 현재 모드 상태 저장 (false = 라이트, true = 다크)
  
    $('.change_btn').click(function (e) {
      e.preventDefault();
  
      // 모드 토글
      $('body').toggleClass('dark_mode');
      $('.change_btn').toggleClass('dark');
      isDark = $('body').hasClass('dark_mode');
  
      // 각 section 글자색 및 content 배경색 변경
      if (isDark) {
        $('section').css('color', '#f5f5f5'); // 섹션 글자색: 흰색
        $('section a').css('color', '#f5f5f5');
        $('section a:visited').css('color', '#f5f5f5');
        $('#content').css('background-color', '#111'); // 컨텐츠 배경색: 어두운색
        $('.plug').text('Light'); // 버튼 텍스트 변경
        $('.power img').attr('src', './images/main/dark_plug.png'); // 다크모드 이미지
        $('#footerArea').css('color', '#f5f5f5');
        $('#footerArea a').css('color', '#f5f5f5');
        $('#footerArea a:visited').css('color', '#f5f5f5');
        $('#footerArea').css('background', '#111');
        $('.footer_logo img').attr('src', './images/common/Footer_logo_w.png');
        $('#footerArea .footer_top').css('border-color', '#fff');
        $('#footerArea .footer_bottom').css('border-color', '#fff');
        $('#footerArea p').css('border-color', '#fff');
      } else {
        $('section').css('color', '#221715'); // 섹션 글자색: 검정
        $('section a').css('color', '#221715');
        $('section a:visited').css('color', '#221715');
        $('#content').css('background-color', '#fff'); // 컨텐츠 배경색: 흰색
        $('.plug').text('Dark'); // 버튼 텍스트 변경
        $('.power img').attr('src', './images/main/light_plug.png'); // 라이트모드 이미지
        $('#footerArea').css('color', '#221715');
        $('#footerArea').css('background', '#fff');
        $('#footerArea a').css('color', '#221715');
        $('#footerArea a:visited').css('color', '#221715');
        $('.footer_logo img').attr('src', './images/common/Footer_logo.png');
        $('#footerArea .footer_top').css('border-color', '#111');
        $('#footerArea .footer_bottom').css('border-color', '#111');
        $('#footerArea p').css('border-color', '#111');
      }
    });
  });


$(function(){

  // ------------------------------
  // 헤더 검색 팝업 열기 / 닫기
  // ------------------------------
    $(".top_menu .search a").click(function(e){
        e.preventDefault();
        $(".search_popup").fadeIn(200);
        $("#popup_search_input").focus();
    });

    $(".search_popup .close_popup").click(function(e){
        e.preventDefault();
        $(".search_popup").fadeOut(200);
        $("#popup_search_input").val("");
    });

    $(".popup_bg").click(function(){
        $(".search_popup").fadeOut(200);
        $("#popup_search_input").val("");
    });

  // ------------------------------
  // 팝업 검색 기능
    function popupSearch(){
        const keywordInput  = $("#popup_search_input").val().trim();
        if(!keywordInput) return;

        // 검색 시 sub2.html로 이동
        const searchUrl = `sub2.html?keyword=${encodeURIComponent(keywordInput)}`;
        window.location.href = searchUrl;
    }

    // 버튼 클릭
    $(".popup_search_btn").click(function(e){
        e.preventDefault();
        popupSearch();
    });

    // 엔터 입력
    $("#popup_search_input").keypress(function(e){
        if(e.key === "Enter") popupSearch();
    });

    //1280이하에선 검색 팝업 사라지게
    $(window).resize(function(){
      if($(this).width() <= 1280){
          $(".search_popup").fadeOut(200);
          $("#popup_search_input").val("");
      }
  });

});