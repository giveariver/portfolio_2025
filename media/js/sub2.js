
  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'PRODUCT',
    'ILKW Collection',
    'Classic Bulb',
    'Party Light'
  ]
  
  const el = document.querySelector('.sub_title')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1500)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()


//스와이퍼
var product_swiper = new Swiper('.product_swiper', {
  slidesPerView: 1, //단수
  spaceBetween: 0,  //단사이 여백
  loop: true,  //무한 loop
  //effect: 'fade',   //페이드효과(단수가 1단이 된다)
  allowTouchMove : true, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
  watchOverflow : true,
  
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


//카테고리 클릭 시 이미지 변환
  $(document).ready(function () {
    // 상위 메뉴 클릭
    $(".con01 li a").click(function (e) {
      e.preventDefault();
  
      // 몇 번째 상위 메뉴인지
      var mainIndex = $(".con01 li a").index(this); 
      var mainNum = mainIndex + 1; // 1,2,3,...
  
      // current 처리
      $(".con01 li a").removeClass("current");
      $(this).addClass("current");
  
      // 리스트 전환
      $(".con02 .list").hide();
      var $currentList = $(".con02 .list").eq(mainIndex).show();
  
      // 하위 메뉴 첫 번째 자동 선택
      $currentList.find("a").removeClass("current");
      $currentList.find("ul li a").eq(0).addClass("current");
  
      var subNum = 1; // 첫 번째 하위 메뉴
  
      // 이미지 교체
      $(".con02 img").attr("src", "./images/sub2/con02_" + mainNum + "_" + subNum + ".png");
    });
  

    // 하위 메뉴 클릭
    $(".con02 .list li a").on("click", function (e) {
      e.preventDefault();
  
      var mainIndex = $(this).closest(".list").index(".con02 .list"); //.list 몇번째~
      var mainNum = mainIndex + 1;
  
      var subIndex = $(this).parent().index(); //.list ul li가 몇번째인지
      var subNum = subIndex + 1;
  
      // current 처리
      $(this).closest("ul").find("a").removeClass("current");
      $(this).addClass("current");
  
      //------------------------------------------------------
      // 이미지 교체
      $(".con02 img.next").attr("src", "./images/sub2/con02_" + mainNum + "_" + subNum + ".png").css("opacity",0);
      $(".con02 img.next").stop(true).animate({opacity: 1}, 300, function() {
        // 완료되면 main 이미지 src 교체 후 next 투명하게
        $(".con02 img.main").attr("src", "./images/sub2/con02_" + mainNum + "_" + subNum + ".png");
        $(".con02 img.next").css("opacity", 0);
      });

    });

    // 초기 상태
    $(".con02 .list").hide().eq(0).show();

  });




//json 제품목록 나타내기

$(function(){
  let products = [];

  // ------------------------------
  // JSON 불러오기
  $.getJSON("./data/sub2.json", function(data){
    products = data;

    // URL에서 keyword 가져오기
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword");

    if(keyword){
      doSearch(keyword);    //검색함수 실행
    }else{
      // 초기 화면 → ILKW Collection + Portable
      const initList = products.filter(p => p.main === "ILKW Collection" && p.sub === "Portable");
      renderProducts(initList);
      // 초기 상태: con01, con02도 표시
      $(".con02").show();
      }
  });

  //검색함수 doSearch(keyword)
    function doSearch(keyword){
      const filtered = products.filter(p =>
      p.name.toLowerCase().includes(keyword.toLowerCase()) ||
      p.sub.toLowerCase().includes(keyword.toLowerCase()) ||
      p.main.toLowerCase().includes(keyword.toLowerCase())
    );

    if(filtered.length > 0){
      renderProducts(filtered);
    } else {
      $(".con03>ul").html(`
        <li style="font-size:3rem; width:100%; text-align:center; padding:50px 0;">
          검색된 제품이 없습니다.
        </li>
      `);
    }

    $(".con02").hide(); // 검색 시 con02 숨김
  }
  // ------------------------------
  // 제품 목록 출력 함수
  function renderProducts(list){
    let item = "";
    $.each(list, function(i, p){
      item += `
        <li>
          <a href="#">
            <div class="swiper-container product_swiper">
              <ul class="swiper-wrapper">
                ${p.images.map(img => `
                  <li class="swiper-slide"><img src="${img}" alt=""></li>
                `).join('')}
              </ul>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          
            <dl>
              <dt>${p.name}</dt>
              <dd>${p.price}</dd>
            </dl>
          </a>
        </li>
      `;
    });
    
    $(".con03>ul").html(item);

    //--------------------------
    // Swiper 재초기화
    if(typeof Swiper !== "undefined"){
      new Swiper('.product_swiper', {
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
      });
    }
  }

  // ------------------------------
  // 메인 카테고리 (con01)
  $(".con01 ul li a").click(function(e){
    e.preventDefault();

    $(".con01 ul li a").removeClass("current");
    $(this).addClass("current");

    const mainCategory = $(this).text();

    //메인카테고리의 제품들~
    const mainProducts  = products.filter(p => p.main === mainCategory);


    if(mainProducts.length > 0){         // 첫번째 서브카테고리만 선택
      const firstSub = mainProducts[0].sub;

      // con02에서 해당 서브카테고리 표시
      $(".con02 .list ul li a").removeClass("current");
      $(".con02 .list ul li a").each(function(){
          if($(this).text() === firstSub){
            $(this).addClass("current");}
      });

      // 첫번째 서브카테고리 제품만 표시
      const filtered = mainProducts.filter(p => p.sub === firstSub);
      renderProducts(filtered);
    }else{//제품이 없을때
        $(".con03>ul").empty();
    }

    // con02 다시 보이기
    $(".con02").show();
  });

  //-----------------------
  // 서브 카테고리 (con02)
  $(".con02 .list ul li a").click(function(e){
    e.preventDefault();
    $(".con02 .list ul li a").removeClass("current");
    $(this).addClass("current");

    const subCategory = $(this).text();
    const filtered = products.filter(p => p.sub === subCategory);
    renderProducts(filtered);

    // 서브 선택 시에도도 → con02 유지
    $(".con02").show();
  });


  // --------------------------------
  // 검색 기능
  $("#btn").click(function(){
    const keyword = $("#title").val().trim();
    if(!keyword) return;

    doSearch(keyword);

  // 검색 후 입력창 비우기
  $("#title").val("");
});


  $("#title").keypress(function(e){     //엔터키로 검색기능
    if(e.key === "Enter") {$("#btn").click();}
  });


  // 동적으로 생성된 li a 클릭 막기 팝업 열기
  $(document).on("click", ".con03>ul>li>a", function(e){
      e.preventDefault();

    // 클릭한 li의 인덱스 가져오기
    const idx = $(this).parent().index(); // li 순서
    const currentProducts = $(".con03>ul>li"); // 현재 화면에 표시된 제품 목록

    // 클릭한 제품 데이터 가져오기
    //dt의 제품명 일치하면 가져오기
    const p = products.filter(product => product.name === $(this).find("dt").text())[0];

    if(!p) return; // 안전장치

    // 팝업 HTML 생성
    const pop = `
        <div class="popup_out"></div>
        <div class="popup_inner">
            <a href="#" class="close_btn">
                <span class="material-symbols-outlined">close</span>
            </a>
            <div class="img_wrap">
                <span class="right_img">
                    <img src="${p.popImages01}" alt="">
                </span>
                <div>
                    <ul class="left_img">
                        ${p.popImages.map(img => `<li><img src="${img}" alt=""></li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    $(".popup").html(pop).fadeIn(200);
  });

    // 팝업 닫기
  $(document).on("click", ".popup .close_btn, .popup_out", function(e){
      e.preventDefault();
      $(".popup").fadeOut(200);
  });
});



//카테고리 클릭 시 이동
$('.con01 li a').click(function(e){   //main카테고리 클릭시
  e.preventDefault();

  var con02 = $('.con02').offset().top;

  $('html,body').stop().animate({'scrollTop':con02-150},1000); 
    //해당목적지로 부드럽게 스크롤 이동
});

// $('.con02 li a').click(function(e){   //sub카테고리 클릭시
//   e.preventDefault();

//   var con03 = $('.con03').offset().top;

//   $('html,body').stop().animate({'scrollTop':con03},1000); 
//    //해당목적지로 부드럽게 스크롤 이동
// });

$(document).ready(function () {

  function updatePlaceholder() {
    if($(window).width() <= 768){
      $(".sec01 #title").attr("placeholder", "시리즈명, 제품명");
    }else if($(window).width() <= 1024){
      $(".sec01 #title").attr("placeholder", "시리즈명, 제품명을 입력하세요.");
    }else{
      $(".sec01 #title").attr("placeholder", "클래식, ST64 등의 시리즈명, 제품명");
    }
  }

  // 처음 로딩할 때 실행
  updatePlaceholder();

  // 화면 크기 변경 시 실행
  $(window).resize(function () {
    updatePlaceholder();
  });
});



//index페이지에서 신제품 링크 시
$(function(){
  const params = new URLSearchParams(window.location.search);
  const scrollTarget = params.get("scroll");

  if(scrollTarget === "con03"){
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: $(".con03").offset().top
      }, 1000); // 0.8초 동안 부드럽게 이동
    }, 400); // 페이지 로드 안정화 대기 (AOS와 충돌 방지)
  }
});