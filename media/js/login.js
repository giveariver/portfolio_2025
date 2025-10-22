
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