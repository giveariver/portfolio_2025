
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
    'SUPPORT',
    'Guide',
    'Q &amp; A',
    'Download'
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


  // 가이드 토글01
  $(document).ready(function () {
    $(".read_more").click(function (e) {
      e.preventDefault();
  
      var $content = $(".pendant_guide_more");
  
      // slide toggle
      $content.stop().slideToggle(300);
      $(this).toggleClass("open");

      if ($(this).hasClass("open")) {
        $(this).find(".material-symbols-outlined").text("keyboard_arrow_up");
      } else {
        $(this).find(".material-symbols-outlined").text("keyboard_arrow_down");
      }
    });
  });

  //가이드 토글02
  $(document).ready(function () {
    $(".bottom strong a").click(function (e) {
      e.preventDefault();
  
      var $content = $(this).closest(".bottom").find(".bottom_guide_more");
  
      // slide toggle
      $content.stop().slideToggle(300);
      $(this).toggleClass("open");

      if ($(this).hasClass("open")) {
        $(this).find(".material-symbols-outlined").text("keyboard_arrow_up");
      } else {
        $(this).find(".material-symbols-outlined").text("keyboard_arrow_down");
      }
    });
  });


  //qna 여닫기
  $(document).ready(function () {
    var article = $('.faq .article');  //모든 질문 답변 리스트
    //article.find('.a').slideUp(100); // 모든 답변 닫아라
      article.find('.arrow').html('<i class="fas fa-chevron-down"></i>');   //화살표 열림
      $('.faq .article:first').find('.a').slideDown(100);     //첫번째 답변만 열어라
      $('.faq .article:first').find('.trigger').css('font-weight','700');
      $('.faq .article:first').find('.arrow').html('<i class="fas fa-chevron-up"></i>');        //화살표닫힘
  
  
    $('.faq .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
        e.preventDefault();  //<a href="#"> 태그 링크 처리
          var myArticle = $(this).parents('.article'); //클릭한 해당 list 
    
          if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
              article.find('.a').slideUp(100); //모든 답변을 닫아라
              article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
              article.find('.arrow').html('<i class="fas fa-chevron-down"></i>');
              article.find('.trigger').css('font-weight','500');
  
              myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
              myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
              myArticle.find('.arrow').html('<i class="fas fa-chevron-up"></i>');
              myArticle.find('.trigger').css('font-weight','700');
          } else {  // 'show' 답변이 열려있냐??
              myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
              myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
              myArticle.find('.arrow').html('<i class="fas fa-chevron-down"></i>');
              myArticle.find('.trigger').css('font-weight','500');
          }  
    });
  
  $('.faq .article .trigger').hover(
    function () { // mouseenter
      var myArticle = $(this).parents('.article');
      myArticle.find('.trigger').css('font-weight', '700');
    },
    function () { // mouseleave
      var myArticle = $(this).parents('.article');
      // 닫혀 있는 항목일 때만 색상 복구
      if (myArticle.hasClass('hide')) {
        myArticle.find('.trigger').css('font-weight', '500');
      }
      // 열린 항목은 스타일 유지
    }
  );
  $('.faq .article .trigger').on('focus', function () {  //탭포커스
    var myArticle = $(this).parents('.article');
    if (myArticle.hasClass('hide')) {
      myArticle.find('.trigger').css('font-weight', '700');
    }
  });
  
  $('.faq .article .trigger').on('blur', function () {  //포커스 잃을 때
    var myArticle = $(this).parents('.article');
    if (myArticle.hasClass('hide')) {
      myArticle.find('.trigger').css('font-weight', '500');
    }
  });
    
    //모두 여닫기 처리
    $('.all').toggle(function(e){
          e.preventDefault(); 
          article.find('.a').slideDown(100);
          article.removeClass('hide').addClass('show');
          article.find('.arrow').html('<i class="fas fa-chevron-up"></i>');
          article.find('.trigger').css('font-weight','700');
          
          $(this).text('모두닫기 ▲');
    },function(e){
          e.preventDefault(); 
          article.find('.a').slideUp(100);
          article.removeClass('show').addClass('hide');
          article.find('.arrow').html('<i class="fas fa-chevron-down"></i>');
          article.find('.trigger').css('font-weight','500');
          $(this).text('모두열기 ▼');
          
    });
  
  }); 