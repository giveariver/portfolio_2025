
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
    'CONTACT',
    'HQ &amp; Factory',
    'Showroom',
    'Office'
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

  
  $(document).ready(function () {

    function updateArrow() {
      if ($(window).width() <= 640) {
        $('.sec02 li:eq(0) address').html('Ilkwang Co., Ltd, 2-1, <br>Toegye-ro 4-gil, Jung-gu, Seoul');
        $('.sec02 li:eq(1) address').html('Ilkwang Co., Ltd, 2F, 31-1, <br>Sowol-ro, Jung-gu, Seoul');
      } else {
        $('.sec02 li:eq(0) address').html('Ilkwang Co., Ltd, 2-1, Toegye-ro 4-gil, <br>Jung-gu, Seoul, South Korea&#40;#04635&#41;');
        $('.sec02 li:eq(1) address').html('Ilkwang Co., Ltd, 2F, 31-1, Sowol-ro, <br>Jung-gu, Seoul, South Korea&#40;#04635&#41;');
      }
    }
  
    // 처음 로딩할 때 실행
    updateArrow();
  
    // 화면 크기 변경 시 실행
    $(window).resize(function () {
      updateArrow();
    });
  });

