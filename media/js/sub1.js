
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
    'OUR STORY',
    'Since 1962',
    'We make light.'
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


  
  var ourstory_sec02 = new Swiper('.ourstory_sec02', {
    slidesPerView: 'auto', //단수
    spaceBetween: 16,  //단사이 여백
    //loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // autoplay: {  //자동
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
    breakpoints: {
      1025: {
        slidesPerView: 'auto',
        spaceBetween: 24
      }}

  });

  $(document).ready(function () {
    const $label = $('.sec02_gird > span');
  
    function updateArrow() {
      if ($(window).width() <= 1024) {
        $label.text('▲ 초대 일광전구공업사 고 김만규 회장');
      } else {
        $label.text('◀ 초대 일광전구공업사 고 김만규 회장');
      }
    }
  
    // 처음 로딩할 때 실행
    updateArrow();
  
    // 화면 크기 변경 시 실행
    $(window).resize(function () {
      updateArrow();
    });
  });

  $(document).ready(function () {

    function updateArrow() {
      if ($(window).width() <= 480) {
        $('.sec02 li span:eq(0)').html('1962. 09 <br>일광전구공업사 창립, 대구시 서구 내당동');
        $('.sec02 li span:eq(1)').html('1973. 08 <br>대구광역시 제3공단 신축이전, 대구시 북구 노원3가');
        $('.sec02 li span:eq(2)').html('1984. 03 <br>대구광역시 제3공단 확장이전, 대구시 북구 노원3가');
      } else {
        $('.sec02 li span:eq(0)').html('1962. 09&nbsp;&nbsp;일광전구공업사 창립, 대구시 서구 내당동');
        $('.sec02 li span:eq(1)').html('1973. 08&nbsp;&nbsp;대구광역시 제3공단 신축이전, 대구시 북구 노원3가');
        $('.sec02 li span:eq(2)').html('1984. 03&nbsp;&nbsp;대구광역시 제3공단 확장이전, 대구시 북구 노원3가');
      }
    }
  
    // 처음 로딩할 때 실행
    updateArrow();
  
    // 화면 크기 변경 시 실행
    $(window).resize(function () {
      updateArrow();
    });
  });