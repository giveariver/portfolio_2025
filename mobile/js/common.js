// 전체페이지 공통

//내비게이션 처리코드
$(document).ready(function() {
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    
  $(".nav_icon").click(function(e) { //메뉴버튼 클릭시
    e.preventDefault();
    var documentHeight =  $(document).height(); //전체 페이지의 높이
    $("#gnb").css('height','100vh'); //gnb의 높이를 전체 페이지 높이와 동일...
  
    if(op==false){
      $("#gnb").animate({right:0,opacity:1}, 'fast');
      $('.nav_icon').addClass('open');
      op=true;
    }else{
      $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
      $('.nav_icon').removeClass('open');
      op=false;
    }
    
  });
  

  //2depth 메뉴 교대로 열기 처리 
  var onoff=[false,false,false,false]; 
    //각각의 1depth메뉴의 열림(true)/닫힘(false) 변수
  var arrcount=onoff.length; //4개

  //console.log(arrcount);

  $('#gnb .depth1 > .m_title').click(function(e){
    e.preventDefault();
    var ind=$(this).parents('.depth1').index(); //0~5
    //var ind=$(this).index('#gnb .depth1 h3 a');
    
    //console.log(ind);
    
    if(onoff[ind]==false){  //클릭한 1depth메뉴가 닫혀있냐??
    //$('#gnb .depth1 ul').hide();
    $(this).parents('.depth1').find('ul').slideDown('slow'); 
          //해당 서브메뉴는 열어라
    $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
          //나머지 모든 서브메뉴를 닫아라
    $('.m_title').removeClass('open');
    $(this).addClass('open');
      for(var i=0; i<arrcount; i++) onoff[i]=false; //모든 상태를 false
      onoff[ind]=true; //해당메뉴 상태만 true
        
      $('.depth1 span').text('keyboard_arrow_down'); //모두 +   
      $(this).find('span').text('keyboard_arrow_up');   // 해당메뉴만 -
        
    }else{  //클릭한 1depth메뉴가 열려있냐??
      $(this).parents('.depth1').find('ul').slideUp('fast'); 
        //자신의 메뉴만 닫아라
        $(this).removeClass('open');
      onoff[ind]=false; //해당메뉴 false   
        
      $(this).find('span').text('keyboard_arrow_down');     // 해당메뉴만 +
    }
  });   
  
  $('.brand_site_btn').toggle(function(e){    //홀수번째 → 리스트 보이게
    e.preventDefault();
    $('.brand_site').fadeIn('slow');
    $(this).children('span').text('keyboard_arrow_down');

  },function(e){   //짝수번째 → 리스트 안보이게
      e.preventDefault();
      $('.brand_site').fadeOut('fast');
      $(this).children('span').text('keyboard_arrow_up');
  });
  


//헤더 스크롤 처리


  var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴
  var on_off=false;  //(헤더에 마우스) false(안오버)  true(오버)
  
  $('#headerArea').on("touchstart", function(){
    // var scroll = $(window).scrollTop();
    $(this).css('background','#fff');
    $('#headerArea h1 a').addClass('black');
    $('.nav_icon span').css('background','#222');
    on_off=true; //헤더에 마우스 오버
  });
      
  $('#headerArea').on("touchend",function(){
      //var scroll = $(window).scrollTop();  //스크롤의 거리 (마우스 벗어날때 스크롤 거리에 따라 상황이 다르니까 체크한것임)

      if(scroll<smh-300){  //스크롤이 비주얼높이-헤더높이보다 작을때(=비주얼이미지 위에 헤더가 잇을때)
        $(this).css('background','none').css('border-bottom','none'); 
        $('#headerArea h1 a').removeClass('black');
        $('.nav_icon span').css('background','#fff');
      }else{   //비주얼 벗어낫을때
        $(this).css('background','#fff'); 
        $('#headerArea h1 a').addClass('black');
        $('.nav_icon span').css('background','#222');
      }
    on_off=false;    //헤더에 마우스 안오버
  });

  $('.top_move').click(function(e){
    e.preventDefault();
  
    $('html,body').stop().animate({'scrollTop':0},1000);  //상단으로 부드럽게 스크롤 이동
  })
  $(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
    var winH = $(window).height();
    var footerTop = $("#footerArea").offset().top;
    //console.log(scroll);

    //top버튼 나타나고 사라지기
    if(scroll>=smh){
      $('.top_move').fadeIn('slow');
    }else{
      $('.top_move').fadeOut('fast');
    }

    if (scroll + winH > footerTop) {
      $('.top_move').addClass('bot');   // absolute로 전환
    } else {
      $('.top_move').removeClass('bot'); // 다시 fixed
    }


    //헤더 배경처리
    if(scroll>smh-300){//스크롤의 높이가 비주얼 높이-헤더높이보다 클 떼(=해더가 내용 위에 있을때) (맘에 안들면 변수에 담아도 됨~)
        $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
        $('#headerArea h1 a').addClass('black');
        $('.nav_icon span').css('background','#222');
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
      if(on_off==false){   //헤더에 마우스가 아웃 되었을 때+스크롤 위일때
        $('#headerArea').css('background','none').css('border-bottom','none');
        $('#headerArea h1 a').removeClass('black');
        $('.nav_icon span').css('background','#fff');
      }
    }; 

  });

  //패밀리사이트 이동코드
    $('.family_btn').toggle(function(e){    //홀수번째 → 리스트 보이게
      e.preventDefault();
      $('.family_list').fadeIn('slow');
      $(this).children('span').html('-');

  },function(e){   //짝수번째 → 리스트 안보이게
      e.preventDefault();
      $('.family_list').fadeOut('fast');
      $(this).children('span').html('+');
  });
});


//서브 타이틀 눌러서 뎁스 이동
$(document).ready(function(){
    //var cnt=3;  //탭메뉴 개수 ***
    $('.title_area .sub_title').toggle(function(e){    //홀수번째 → 리스트 보이게
      e.preventDefault();
      $('.title_area .sub_nav').slideDown('fast');
      $(this).find('span').html('keyboard_arrow_up');
  
    },function(e){   //짝수번째 → 리스트 안보이게
        e.preventDefault();
        $('.title_area .sub_nav').slideUp('fast');
        $(this).find('span').html('keyboard_arrow_down');
    });

    
  });


// $(document).ready(function(){
//   //var cnt=3;  //탭메뉴 개수 ***
//   $('.tab_menu .tab_trigger').toggle(function(e){    //홀수번째 → 리스트 보이게
//     e.preventDefault();
//     $('.tab_menu .tab_list').slideDown('fast');
//     $(this).find('span').html('keyboard_arrow_up');

//   },function(e){   //짝수번째 → 리스트 안보이게
//       e.preventDefault();
//       $('.tab_menu .tab_list').slideUp('fast');
//       $(this).find('span').html('keyboard_arrow_down');
//   });
// 

//   var cnt=$('#content .tab_list li').length;
//   $("#content .contlist").hide();
//   $('#content .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
//   $('#content .tab1').addClass('current') //첫번째 탭메뉴 활성화
//              //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
  
//   //탭클릭이벤트
//   $('#content .tab').click(function(e){
//         e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
//         var ind = $('#content .tab').index(this);  // 클릭시 해당 index를 뽑아준다 0 1 2
//         //console.log(ind);

//           $("#content .contlist").hide(); //모든 탭내용을 안보이게...
//           $(".contlist:eq("+ind+")").fadeIn('slow', function(){
//           // 탭 내용 보이게 한 뒤 AOS 다시 초기화
//           //AOS.init();
//           });
//           $('.tab').removeClass('current'); //모든 탭메뉴를 비활성화
//           $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

//           var selectedText = $(this).text();
//           $('.tab_menu .tab_trigger').contents().first()[0].nodeValue = selectedText + '';
//           $('.tab_menu .tab_list').slideUp('fast');
//           $('.tab_menu .tab_trigger span').html('keyboard_arrow_down');
//   });
// });

$('.contlist:eq(0)').show();  //첫번째 탭내용 열어라

$('.tab_trigger').click(function(e){ //탭메뉴 클릭 시
  e.preventDefault();
  $('.tab_list').slideDown('slow');  //탭서브메뉴를 열어라
  $('.tab_trigger span').text('keyboard_arrow_up');
});

$('.tab_list a').click(function(e){  //탭서브메뉴 클릭 시
  e.preventDefault();
  var txt = $(this).text(); //탭 서브메뉴의 텍스트를 추출
  var ind = $(this).index('.tab_list a');  //클릭 시 인덱스 추출
  //console.log(txt);
  $('.tab_trigger p').text(txt);  //탭메뉴의 텍스트를 바꾸어라
  $('.tab_list').slideUp('fast'); //탭서브메뉴를 닫아라
  $('.tab_list a').removeClass('current');
  $('.tab_list a:eq('+ ind +')').addClass('current');
  $('.tab_trigger span').text('keyboard_arrow_down');

  $('#content .contlist').hide();           //모든 탭 내용을 안보이게..
  $('#content .contlist:eq('+ ind +')').fadeIn('slow', function(){  //클릭한 메뉴에 해당하는 탭 내용만 열어라
  AOS.init();
            });
});