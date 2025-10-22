
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
    'MEDIA',
    'Gallery',
    'ILKW Presents'
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


  //유튜브 팝업
  $(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });
});

$(function(){
  $(window).on("scroll", function(){
    var winTop = $(window).scrollTop();
    var winH = $(window).height();


    var ddT = $(".sec01 .main_vid dd").offset().top;
    var ddH = $(".sec01 .main_vid dd").outerHeight();
    
    if (winTop + winH > ddT + ddH) {
      $(".sec01 .main_vid dt").removeClass("hide").addClass("show");
    } else {
      // dd가 다 안 보이면 다시 숨김
      $(".sec01 .main_vid dt").removeClass("show").addClass("hide");
    }


    // $(".sub_vid li").each(function(){
    //   var subT = $(this).find("a").offset().top;
    //   var subH = $(this).find("a").outerHeight(); 

    //   if (winTop + winH > subT + subH) {
    //     $(this).find("dt span").addClass("show");
    //   } else {
    //     $(this).find("dt span").removeClass("show");
    //   }
    // });


    // $(".sub_vid li a").hover(
    //   function(){
    //     $(this).siblings("dl").find("dd").addClass("show");
    //   },
    //   function(){
    //     $(this).siblings("dl").find("dd").removeClass("show");
    //   }
    // );
  });
});

//index페이지에서 갤러리 링크 시
$(function(){
  const params = new URLSearchParams(window.location.search);
  const scrollTarget = params.get("scroll");

  if(scrollTarget === "sec02"){
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: $(".sec02").offset().top
      }, 1000); // 0.8초 동안 부드럽게 이동
    }, 400); // 페이지 로드 안정화 대기 (AOS와 충돌 방지)
  }
});