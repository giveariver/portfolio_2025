
$(document).ready(function() {

    //글로벌 내비게이션 처리코드
     var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
     var on_off=false;  //(헤더에 마우스) false(안오버)  true(오버)
      
          $('#headerArea').mouseenter(function(){
            // var scroll = $(window).scrollTop();
              $(this).css('background','#fff');
              $('.dropdownmenu li .depth1').css('color','#333');   //마우스엔터 시 백그라운드 글자색변경
              $('.logo a').css('background','url(../../common/images/logo_black.png)');
              $('.top_menu a').css('color','#333');
              $('.top_menu .membership').css('border','1px solid #333');
             on_off=true; //헤더에 마우스 오버
          });
          
          $('#headerArea').mouseleave(function(){
             var scroll = $(window).scrollTop();  //스크롤의 거리 (마우스 벗어날때 스크롤 거리에 따라 상황이 다르니까 체크한것임)
  
             if(scroll<smh-100){  //스크롤이 비주얼높이-헤더높이보다 작을때(=비주얼이미지 위에 헤더가 잇을때)
                  $(this).css('background','none').css('border-bottom','none'); 
                  $('.dropdownmenu li .depth1').css('color','#fff');     //마우스 떠나면 글자색,배경 복구
                  $('.logo a').css('background','url(../../common/images/logo.png)');
                  $('.top_menu a').css('color','#fff');
                  $('.top_menu .membership').css('border','1px solid #fff');
              }else{   //비주얼 벗어낫을때
                  $(this).css('background','#fff'); 
                  $('.dropdownmenu li .depth1').css('color','#333');
                  $('.logo a').css('background','url(../../common/images/logo_black.png)');
                  $('.top_menu a').css('color','#333');
                  $('.top_menu .membership').css('border','1px solid #333');
              }
            on_off=false;    //헤더에 마우스 안오버
          });
  
          
          $(window).on('scroll',function(){//스크롤의 거리가 발생하면
             var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
             //console.log(scroll);
  
              if(scroll>150){//스크롤의 높이가 비주얼 높이-헤더높이보다 클 떼(=해더가 내용 위에 있을때) (맘에 안들면 변수에 담아도 됨~)
                  $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
                  $('.dropdownmenu li .depth1').css('color','#333');
                  $('.logo a').css('background','url(../../common/images/logo_black.png)');
                  $('.top_menu a').css('color','#333');
                  $('.top_menu .membership').css('border','1px solid #333');
              }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
                if(on_off==false){   //헤더에 마우스가 아웃 되었을 때+스크롤 위일때
                  $('#headerArea').css('background','none').css('border-bottom','none');
                  $('.dropdownmenu li .depth1').css('color','#fff'); //스크롤 올리면 원복
                  $('.logo a').css('background','url(../../common/images/logo.png)');
                  $('.top_menu a').css('color','#fff');
                  $('.top_menu .membership').css('border','1px solid #fff');
                  }
              }; 
  
          });
  
          
      //2depth 열기/닫기
      $('ul.dropdownmenu').hover(
         function() {     //마우스 오버시
            $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
            $('#headerArea').animate({height:300},'fast').clearQueue();  //서브내비 추가 높이로 변경
         },function() {  //마우스 아웃 시
            $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
            $('#headerArea').animate({height:105},'fast').clearQueue();  //헤더 높이 원복
       });
      
       //1depth 효과
       $('ul.dropdownmenu li.menu').hover(
         function() { 
             $('.depth1',this).css('color','#EF151E');    //,this → 이벤트 발생 객체로 한정. 발생태그의 자식!
         },function() {
            $('.depth1',this).css('color','#333');
       });
  
  
       //tab 처리
       $('ul.dropdownmenu li.menu .depth1').on('focus', function () {         //첫번째 1depth가 포커스 당햇을때 서브메뉴가 열림
          $('ul.dropdownmenu li.menu ul').slideDown('normal');
          $('#headerArea').animate({height:300},'fast').clearQueue();
       });
  
      $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        //마지막 메뉴가 포커스를 잃을때 서브메뉴 닫기
          $('ul.dropdownmenu li.menu ul').slideUp('fast');
          $('#headerArea').animate({height:105},'normal').clearQueue();
      });
  });
  
  
  //상단 top 이동 코드
  $('.top_move').click(function(e){
    e.preventDefault();
  
    $('html,body').stop().animate({'scrollTop':0},1000);  //상단으로 부드럽게 스크롤 이동
  })
  
  $(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
    var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
    var visual = $('.visual').height();
    //console.log(scroll);
    if(scroll>visual){
      $('.top_move').fadeIn('slow');
    }else
      $('.top_move').fadeOut('fast');
  });
  
  //패밀리사이트 이동코드
  $('.family .arrow').toggle(function(e){    //홀수번째 → 리스트 보이게
      e.preventDefault();
      $('.family .aList').fadeIn('slow');
      $(this).children('span').html('-');
  
  },function(e){   //짝수번째 → 리스트 안보이게
      e.preventDefault();
      $('.family .aList').fadeOut('fast');
      $(this).children('span').html('+');
  });