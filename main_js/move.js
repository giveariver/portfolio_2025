// 비주얼 처리코드

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').fadeIn('slow'); //첫번째 불켜
    // $('.btn1').css('width','30px'); // 버튼의 너비 증가
    // $('.btn1').css('height','30px')
    $('.btn1').addClass('on');
    
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.gallery .link'+cnt).find('span:eq(0)').delay(500).animate({top:545, opacity:1},'slow');
    $('.gallery .link'+cnt).find('span:eq(1)').delay(800).animate({top:545, opacity:1},'slow');

 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
    // $('.gallery .link:eq(+'(cnt-1)+')').fadeIn('slow');    //위에랑 같은 말~         

    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      
    $('.mbutton').fadeOut('fast'); //버튼불다꺼!!
    // $('.mbutton').css('width','30px'); // 버튼 원래의 너비
    // $('.mbutton').css('height','30px');
    $('.mbutton').removeClass('on');
    $('.btn'+cnt).fadeIn('slow');//자신만 불켜
    // $('.btn'+cnt).css('width','30px');
    // $('.btn'+cnt).css('height','30px');  
    $('.btn'+cnt).addClass('on'); 

      $('.gallery li span').css('top',565).css('opacity',0);
      $('.gallery .link'+cnt).find('span:eq(0)').delay(500).animate({top:545, opacity:1},'slow');
      $('.gallery .link'+cnt).find('span:eq(1)').delay(800).animate({top:545, opacity:1},'slow');


       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 6000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


    $('.dock div span').click(function(event){  //각각의 버튼 클릭시
	     //var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.

      var ind = $(this).index('.dock div span')
      //console.log(ind);
      cnt = ind+1;        //해당 버튼 클릭 시 인덱스 번호 +1 값을 cnt로 반환


		  // if($(this).is('.btn1')){  //첫번째 버튼 클릭??
			// 	 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  // }else if($(this).is('.btn2')){  //두번째 버튼 클릭??
			// 	 cnt=2; 
		  // }else if($(this).is('.btn3')){ 
			// 	 cnt=3; 
		  // }else if($(this).is('.btn4')){
			// 	 cnt=4; 
		  // }else if($(this).is('.btn5')){
			// 	 cnt=5; 
		  // } 

		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
      $('.mbutton').fadeOut('fast'); //버튼불다꺼!!
      // $('.mbutton').css('width','30px'); // 버튼 원래의 너비
      // $('.mbutton').css('height','30px');
      $('.mbutton').removeClass('on');
      $('.btn'+cnt).fadeIn('slow');//자신만 불켜
      // $('.btn'+cnt).css('width','30px');
      // $('.btn'+cnt).css('height','30px');  
      $('.btn'+cnt).addClass('on'); 
      
      $('.gallery li span').css('top',565).css('opacity',0);
      $('.gallery .link'+cnt).find('span:eq(0)').delay(500).animate({top:545, opacity:1},'slow');
      $('.gallery .link'+cnt).find('span:eq(1)').delay(800).animate({top:545, opacity:1},'slow');

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 6000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-solid fa-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 6000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>');
		   onoff=true; 
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){     //왼쪽 or 오른쪽 버튼을 클릭하면 타이머 중지 → 

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초.. //와진~짜 헷갈려
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').fadeOut('slow'); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    $('.mbutton').fadeOut('fast'); //버튼불다꺼!!
    // $('.mbutton').css('width','30px'); // 버튼 원래의 너비
    // $('.mbutton').css('height','30px');
    $('.mbutton').removeClass('on');
    $('.btn'+cnt).fadeIn('slow');//자신만 불켜
    // $('.btn'+cnt).css('width','30px');
    // $('.btn'+cnt).css('height','30px');  
    $('.btn'+cnt).addClass('on'); 

    $('.gallery li span').css('top',565).css('opacity',0);
    $('.gallery .link'+cnt).find('span:eq(0)').delay(500).animate({top:545, opacity:1},'slow');
    $('.gallery .link'+cnt).find('span:eq(1)').delay(800).animate({top:545, opacity:1},'slow');

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 6000); //부활

    if(onoff==false){   //타이머 중지일 때 오/왼 누르면 다시 재생으로. 그리고 아이콘 바꾸기
      onoff=true;
      $('.ps').html('<i class="fa-solid fa-pause"></i></i>');
    }
  });

});




//슬로건..

$(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
  var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
  console.log(scroll);
  if(scroll>=540){
    $('.slogan div:eq(0)').css('opacity',1);
  }else
    $('.slogan div:eq(0)').css('opacity',0);

  if(scroll>=635){
    $('.slogan div:eq(1)').css('opacity',1);
  }else
    $('.slogan div:eq(1)').css('opacity',0);

  if(scroll>=730){
    $('.slogan div:eq(2)').css('opacity',1);
  }else
    $('.slogan div:eq(2)').css('opacity',0);

  if(scroll>=900){
    $('.slogan div span').css('width',180);
    $('.slogan div span').css('transform', 'scaleX(1)');
    $('.slogan div span').css('margin-left',15);
    $('.slogan div span').css('margin-right',15);
  }else{
    $('.slogan div span').css('width',0);
    $('.slogan div span').css('transform', 'scaleX(0)');
    $('.slogan div span').css('margin-left',0);
    $('.slogan div span').css('margin-right',0);
  }
});

        // // 슬로건 애니메이션 효과를 위한 IntersectionObserver
        // var observer = new IntersectionObserver((e) => {
        //   e.forEach((slogan) => {
        //     if (slogan.isIntersecting) {
        //       $(slogan.target).css('opacity', 1);
        //     } else {
        //       $(slogan.target).css('opacity', 0);
        //     }
        //   });

        // });

        //   // 각 슬로건 div를 DOM 요소로 observer에 등록
        //   $('.slogan div').each(function () {
        //     observer.observe(this); // this는 DOM 요소
        //   });


        //   ////////////////////////
        // var spanobserver = new IntersectionObserver((e) => {
        //   e.forEach((entry) => {
        //     const $span = $(entry.target).parent('.slogan').find('span');
        //     if (entry.isIntersecting) {
        //       $span.css({
        //         width: '180px',
        //         transform: 'scaleX(1)',
        //         'margin-left': '15px',
        //         'margin-right': '15px'
        //       });
        //     } else {
        //       $span.css({
        //         width: '0',
        //         transform: 'scaleX(0)',
        //         'margin-left': '0',
        //         'margin-right': '0'
        //       });
        //     }
        //   });
        // });


        //   // 각 슬로건 div를 DOM 요소로 observer에 등록
        //   $('.slogan div:eq(2)').each(function () {
        //     spanobserver.observe(this); // this는 DOM 요소
        //   });






//
// var aboutus = [
//   {
//     title: 'Create the world of New Food Culture',
//     description: `CJ푸드빌은 ‘새로운 식문화의 세계를 창조한다(Create the world of New Food Culture)’는 원대한 꿈과 비전을<br>
//       CJ의 경영철학인 최초, 최고, 차별화를 추구하는 온리원(Only One)정신에 맞게 실현, 구체화하고 있습니다.`,
//   },
//   {
//     title: '건강하고 즐거운 식문화를 만드는 GLOBAL F&B COMPANY',
//     description: `CJ푸드빌은 차별화된 외식 브랜드를 성공적으로 론칭함으로써,<br>
//       국내는 물론 해외에서도 인정받는 글로벌 식문화 기업으로 성장하고 있습니다.`,
//   },
//   {
//     title: '가족 이상의 감동 서비스를 전달하는 외식공간',
//     description: `CJ푸드빌은 Food(음식)와 Village(마을)의 합성어로 한 마을에 사는 가족과 이웃들이 단란한 식사공간을 통해<br>
//       행복과 사랑을 나누듯이 편안하고 부담 없이 즐길 수 있는 가족 레스토랑을 지향한다는 의미가 담겨 있습니다.`,
//   },
//   // ... 나머지도 같은 형식으로 추가
// ];

// $(document).ready(function () {
//   // 페이지 로드 시 표시
//   var firstData = aboutus[0];
//   var txt = '';

//   txt += '<div>';
//   txt += '<strong>'+firstData.title+'</strong>';
//   txt += '<span>'+firstData.description+'</span>';
//   txt += '</div>';

//   $('.about_us_txt li:eq(1)').html(txt);  // 또는 .html(txt).fadeIn()
// });




///브랜드 영역
$(document).ready(function() {
  var $brandsList = $('.brands_list');
  var position = 0;
  var movesize = 1;
  var timeonoff = null;

  // 리스트 무한 복제
  $brandsList.append($brandsList.children('ul').clone());

  var halfWidth = $brandsList.width() / 2;

  // 자동 슬라이드 함수
  function partnerMove() {
    position -= movesize;
    if (position <= -halfWidth) {
      position = 0;
    }
    $brandsList.css('left', position);
  }

  // 타이머 관리 함수
  function startAutoSlide() {
    if (!timeonoff) {
      timeonoff = setInterval(partnerMove, 10);
    }
  }

  function stopAutoSlide() {
    if (timeonoff) {
      clearInterval(timeonoff);
      timeonoff = null;
    }
  }

  // 초기 자동 슬라이드 시작
  startAutoSlide();

  // 호버 시 자동 슬라이드 멈춤, 떠나면 재생
  $brandsList.hover(stopAutoSlide, startAutoSlide);

  // 드래그 변수
  var isDragging = false;
  var startX = 0;
  var startLeft = 0;

  function dragStart(e) {
    stopAutoSlide();
    isDragging = true;
    startX = e.pageX || e.originalEvent.touches[0].pageX;
    startLeft = position;
    e.preventDefault(); // 터치 스크롤 방지
  }

  function dragMove(e) {
    
    if (!isDragging) return;
    var currentX = e.pageX || e.originalEvent.touches[0].pageX;
    var deltaX = currentX - startX;

    position = startLeft + deltaX;

    // 드래그 중 위치 보정: 무한 루프 영역을 벗어나면 위치 재설정
    if (position <= -halfWidth) {
      position += halfWidth;
      startX = currentX;
      startLeft = position;
    } else if (position >= 0) {
      position -= halfWidth;
      startX = currentX;
      startLeft = position;
    }

    $brandsList.css('left', position);
  }

  function dragEnd(e) {
    if (isDragging) {
      isDragging = false;
      startAutoSlide();
    }
  }

  // 마우스 이벤트
  $brandsList.on('mousedown', dragStart);
  $(document).on('mousemove', dragMove);
  $(document).on('mouseup', dragEnd);
});


//브랜드 리스트 슬라이드 애니메이션 코드
// $(document).ready(function() {
// 	var position=0;  //최초위치(left목적지)
// 	//var movesize=$('.brands_list ul li').width(); //이동 크기(속도)
//   var movesize=1;
// 	var timeonoff; //자동기능
	
// 	$('.brands_list ul').after($('.brands_list ul').clone()); //복재
// 	//$('가져다 놓을 태그').after('기준태그');
	
// 	function partnerMove(){
// 			position-=movesize;  // 감소
// 			$('.brands_list').css('left',position);
			
// 			if(position < -3360){					//li 전체길이+칸에서 나가 있는 li 길이 -((105*12)+(105*3)) or -105*15
// 				$('.brands_list').css('left',0);	//나가 있는 li 길이 (105*3)
// 				position=-0;
// 			} 
			
// 	};

// 		timeonoff= setInterval(partnerMove, 10);	//0.1초마다 호출/속도
		
// 		$('.brands_list').hover(function(){
// 			clearInterval(timeonoff);					//호버 시 타이머 정지
// 		},function(){
// 			timeonoff= setInterval(partnerMove, 10);	//리브 시 타이머 부활
// 		});
	
// });

//브랜드 로고 클릭 시 코드
var brandData = [
  {
    title: '뚜레쥬르',
    subtitle: '건강한 데일리 베이커리',
    description: `뚜레쥬르(프랑스어로 '매일 매일(Everyday)'이라는 뜻)는<br>
      날마다 매장에서 직접 구운 건강한 빵과 신선한 케이크를 선보이는<br>
      프리미엄 베이커리 브랜드입니다.`,
    image: './main_images/brands_touslesjours_1.jpg',
    link: 'https://www.tlj.co.kr/index.asp'
  },
  {
    title: '빕스',
    subtitle: '프리미엄 스테이크 &amp; 시즈널 샐러드 바',
    description: `빕스는 고급 스테이크 하우스에서만 맛볼 수 있던 프리미엄 스테이크와 <br>
      계절마다 변하는 다채롭고 신선한 샐러드바로<br>
      국내 외식 업계를 선도해왔습니다.`,
    image: './main_images/brands_vips_1.jpg',
    link: 'https://www.ivips.co.kr/intro/250624/intro.asp'
  },
  {
    title: '더플레이스',
    subtitle: '이탈리안 비스트로',
    description: `더 플레이스는 정통 이탈리안을 현대적으로<br>
      재해석한 트렌디한 이탈리안 비스트로입니다.`,
    image: './main_images/brands_theplace_1.jpg',
    link: 'https://www.italiantheplace.co.kr:7022/theplace_end.asp'
  },
  {
    title: '제일제면소',
    subtitle: '제철 국수와 한식 일품요리',
    description: `국수는 우리에게 너무 친숙한 한 끼지만,<br>
      제일제면소는 조금 더 특별함을 선사하고 싶었습니다.`,
    image: './main_images/brands_cheiljemyunso_1.jpg',
    link: 'https://www.cheiljemyunso.co.kr:7014/the_end.asp'
  },
  {
    title: '더스테이크하우스',
    subtitle: '뉴 클래식 스테이크 다이닝',
    description: `더스테이크하우스는 정통 뉴욕식 스테이크하우스<br>
       메뉴 요소를 중심으로 차별화된 스테이크와 다채로운 해산물,<br>
      하우스 스페셜 메뉴가 있는 프리미엄 스테이크 하우스입니다.`,
    image: './main_images/brands_thesteakhouse_1.jpg',
    link: 'https://map.naver.com/p/search/%EB%8D%94%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4/place/31068326?placePath=/home?entry=pll&from=map&fromNxList=true&fromPanelNum=2&timestamp=202507310000&locale=ko&svcName=map_pcv5&searchText=%EB%8D%94%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4&from=map&fromNxList=true&fromPanelNum=2&timestamp=202507310000&locale=ko&svcName=map_pcv5&searchText=%EB%8D%94%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4&searchType=place&c=15.00,0,0,0,dh'
  },
  {
    title: 'N서울타워',
    subtitle: '서울의 대표 랜드마크',
    description: `서울 중심에 자리한 해발 480m 전망의 N서울타워는<br>
      남산의 자연과 전망 그리고 F&amp;B, 엔터테인먼트, 쇼핑 등<br>
      CJ그룹의 역량이 조화롭게 어우러진 복합문화공간입니다.`,
    image: './main_images/brands_nseoultower_1.jpg',
    link: 'https://www.nseoultower.co.kr/'
  },
  {
    title: '엔그릴',
    subtitle: '360도 회전전망으로 즐기는 프렌치 코스의 경험',
    description: `N서울타워에서도 가장 높은 자리에 위치한 엔그릴은<br>
    서울의 전경을 360도 즐길 수 있는 국내 유일의 레스토랑입니다.`,
    image: './main_images/brands_ngrill_1.jpg',
    link: 'https://www.nseoultower.co.kr/visit/restaurant.asp'
  },
  {
    title: '한쿡',
    subtitle: '남산 꼭대기에서 즐기는 모던 한우그릴',
    description: `남산 꼭대기에서 즐기는 풍미 절정의 모던 한우 그릴<br>
      참숯에 초벌한 한우에 스모크 우드칩, 솔잎 향을 겹겹이 입히는<br>
      한쿡만의 섬세한 그릴 방식으로 깊이 있는 맛의 여운을 만들어냅니다.`,
    image: './main_images/brands_hancook_1.jpg',
    link: 'https://www.nseoultower.co.kr/visit/restaurant2.asp'
  }
  
  // ... 나머지도 같은 형식으로 추가
];

$(document).ready(function () {
  // 페이지 로드 시 기본으로 뚜레쥬르 정보 표시
  var firstData = brandData[0];
  var txt = '';

  txt += `<img src="${firstData.image}" alt="">`;
  txt += '<div class="main_brands_text">';
  txt += `<span>${firstData.subtitle}</span>`;
  txt += `<h4>${firstData.title}</h4>`;
  txt += `<p>${firstData.description}</p>`;
  txt += `<a href="${firstData.link}" target="_blank" title="브랜드 사이트 새창열림">브랜드 홈페이지 바로가기 →</a>`;
  txt += '</div>';

  $('.brands_txt>div').html(txt);  // 또는 .html(txt).fadeIn()
});

$(document).on('click', '.brands_list ul li a', function (e) {  //각 버튼 클릭 시 브랜드 정보 표시
  e.preventDefault();

    var index = $(this).parent().index() % brandData.length;
    var data = brandData[index];

    var txt = '';


    txt += `<img src="${data.image}" alt="">`;
    txt += '<div class="main_brands_text">';
    txt += `<span>${data.subtitle}</span>`;
    txt += `<h4>${data.title}</h4>`;
    txt += `<p>${data.description}</p>`;
    txt += `<a href="${data.link}" target="_blank" title="브랜드 사이트 새창열림">브랜드 홈페이지 바로가기 →</a>`;
    txt += '</div>';


    $('.brands_txt>div').fadeOut('fast', function () {
      $('.brands_txt>div').html(txt).fadeIn('slow');
    });
  });


// $(document).ready(function () {
//   $('.brands_list ul li').each(function (index) {
//     $(this).on('click', function (e) {
//       e.preventDefault(); // 링크 이동 방지

//       const data = brandData[index];

//       // 텍스트 및 이미지 변경
//       $('.brands_txt img').attr('src', data.image);
//       $('.brands_txt .main_brands_text span').html(data.subtitle);
//       $('.brands_txt .main_brands_text h4').text(data.title);
//       $('.brands_txt .main_brands_text p').html(data.description);
//       $('.brands_txt .main_brands_text a').attr('href', data.link);
//     });
//   });
// });


//글로벌

$(document).ready(function () {
    // 처음엔 모든 global_store 항목 숨김
    $(".global_store li").removeClass('fade');

    var lastIndex = null; // 마지막으로 클릭한 인덱스 저장

    $(".country_list li a").on("click", function(e){
        e.preventDefault();

        var ind = $(this).index('.country_list li a');
        //console.log("clicked:", ind);

        if(lastIndex === ind && $(".global_store li:eq("+ind+")").is(":visible")){
            // 같은 항목을 다시 클릭 → 닫기
            $(".global_store li:eq("+ind+")").removeClass('fade');
            $(".country_list li a").removeClass('active');
            lastIndex = null; // 초기화
        } else {
            // 다른 항목 클릭 → 기존 닫고 새 항목 열기
            $(".global_store li").removeClass('fade');
            $(".global_store li:eq("+ind+")").addClass('fade');
            $(".country_list li a").removeClass('active');
            $(this).addClass('active');
            lastIndex = ind;
        }
    });
});

// $(document).ready(function () {
//     // 처음엔 모든 global_store 항목 숨김
//     $(".global_store li").hide();

//     $(".country_list li a").on("click", function(e){
//         e.preventDefault();

//         var ind = $(this).index('.country_list li a');
//         console.log(ind);

//         $(".global_store li").hide();
//         $(".global_store li:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
//     });
// });



// 커리어
$(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
  var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
  console.log(scroll);
  if(scroll>=6350){
    $('.bg_img .gradient_box').slideUp('3000');
  }else
    $('.bg_img .gradient_box').slideDown('fast');

});