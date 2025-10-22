
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
    'PROJECT',
    'Special',
    'Collaboration'
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



  var con02 = new Swiper('.con02', {
    slidesPerView: 'auto', //단수
    spaceBetween: 24,  //단사이 여백
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    resistance : false,
    autoplay:{
		  delay: 0, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
      // loop: true,  //무한 loop
      
      },
    speed: 4000,
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // pagination: {   //페이지 네이션
    //     el: '.swiper-pagination',
    //     //dynamicBullets: true,
    //     clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    }
  );

$(".con02 .swiper-slide a").hover(
  function () {
    con02.autoplay.stop();   // a에 마우스 올리면 슬라이더 전체 멈춤
  },
  function () {
    con02.autoplay.start();  // 마우스 떼면 다시 흐름
  }
);


const con03Data = [
  {
    img: "./images/sub3/project_25.png",
    title: "삼성전자 X 일광전구",
    date: "2019.05.01 · 성수동 가로수길",
    desc: "삼성전자 VD Lifestyle Pop-up Store - '새로보다' <br><br>삼성전자가 가로수길에서 오픈한 Lifestyle Pop-up store '새로보다'에 일광전구가 콜라보레이션 브랜드로 전시를 진행했습니다. 2019년 5월 1일부터 2019년 6월 16일까지 약 6주간 진행되었고 전시기간중 약 4만명이 다녀가며 많은 분들의 호응을 얻었습니다. <br><br>일반적인 TV가 아닌 디자인적으로 아름다운 오브제가 되는 'The Serif', 베젤이 액자가 되어 TV에 예술 작품을 담아 걸어놓을 수 있는 'The Frame', 모바일 컨텐츠를 TV의 세로 화면으로 즐길 수 있는 'The Sero'를 만나볼 수 있는 팝업 이벤트로 일반적으로 'TV 이벤트' 하면 떠오르는 기능 위주의 이벤트가 아닌, 라이프스타일 제품과 함께 다양한 라이프스타일을 경험하고 즐길 수 있는 공간으로 구성되었습니다."
  },
  {
    img: "./images/sub3/project_24.png",
    title: "AUDI X 일광전구",
    date: "2018.09.14 · 성수동 어반소스",
    desc: "AUDI URBAN CULTURE SPACE <br><br>AUDI A4가 제안하는 어반 컬쳐 스페이스에 메인 콜라보레이터로 일광전구가 참여했습니다. '또 다른 Progress의 시작'을 주제로 일광전구, worksout, hyunye, longchimseoul, tartine과 협업하고 오프닝 파티에는 아우디 코리아 홍보대사인 가수 '최시원'의 축하 스피치, 디제잉 파티도 함께 했습니다."
  },
  {
    img: "./images/sub3/project_23.png",
    title: "STUDIO TOMBOY",
    date: "2017.11.01 · 신세계 하남 스타필드",
    desc: "스튜디오 톰보이 크리스마스 전구 디스플레이 <br><br>하남 스타필드내의 스튜디오 톰보이 150평의 매장 곳곳에 일광전구 파티라이트를 설치하여 크리스마스, 연말 분위기를 가장 클래식한 아이템인 전구로 모던하게 표현하였습니다. 그동안 야외용 조명으로만 사용하던 파티라이트를 실내 디스플레이 오브제로 잘 활용된 공간입니다."
  },
  {
    img: "./images/sub3/project_22.png",
    title: "WINTER JAZZ LAND",
    date: "2016.12.25 · 경복궁역",
    desc: "2016 Christmas Sunday Live &lt;WINTER JAZZ LAND&gt; <br>12월 25일 12:00 - 19:00 <br><br>매혹적인 선율이 흐르는 재즈 하우스와 따듯함으로 가득 찬 크리스마스 마켓이 함께하는 선물같은 일요일. 당신이 꿈꾸던 크리스마스의 모든것 윈터재즈랜드<br>일광전구는 윈터재즈랜드가 펼쳐지는 대림미술관 외부, 디라인지, 정원&주차장 공간을 아름다운 조명으로 수놓았습니다."
  },
  {
    img: "./images/sub3/project_21.png",
    title: "2nd Exhibition 'WE MAKE LIGHT.'",
    date: "2016.12.10 · 동대문 디자인 플라자",
    desc: "동대문 디자인플라자 살림터 1층(모던마켓플레이스)에서 일광전구의 팝업스토어를 운영중입니다. 한국의 뛰어난 공예 작가들의 작품과 함께 한옥을 모티브로 제작한 공간에 밀도감있게 전시되어 있으며 현장에서 구입도 가능합니다."
  },
  {
    img: "./images/sub3/project_20.png",
    title: "제주도 물고기 카페",
    date: "2016.11.28 · 제주도 대평리",
    desc: "일광전구 x 물고기카페 <br><br>제주 남쪽 바다를 바라보며 뒤쪽으로는 기암 절벽이 감싸고 있는 대평리의 물고기카페. 잘 정돈된 정원이 인상적인 'ㄴ'자 구조의 제주집 둘레에 일광전구 파티라이트가 설치되었습니다. 변덕스러운 제주날씨에도 끄덕없이 여행객들을 반길 파티라이트가 아름답게 빛을 밝히고 있습니다. 제주에 가신다면 꼭 한번 들려보시기 바랍니다."
  },
  {
    img: "./images/sub3/project_19.png",
    title: "P2 Movie Making in JEJU",
    date: "2016.11.27 · 제주도",
    desc: "일광전구 x hnh <br><br>새롭게 출시한 파티라이트 P2의 영상촬영을 제주도에서 진행하였습니다. 제주의 숲, 바다, 제주 전통돌집을 개조해서 만든 멋진 카페 공간까지. 이번 촬영은 일광전구 디자인팀과 크리에이티브 그룹 hnh이 함께 하였습니다. "
  },
  {
    img: "./images/sub3/project_18.png",
    title: "TORi Cottage JEJU",
    date: "2016.09.12 · 제주시 구좌읍 동북리 1305",
    desc: "일광전구 & TORi Cottage <br><br>STAY Brand, TORi Cottage와 일광전구가 함께 기획한 스테이 공간이 제주도 동북리에 오픈하였습니다. 토리코티지는 ‘머뭄’이라는 키워드를 다양한 분야의 크리에이터들과 해석하여 함께 STAY공간을 만들어갑니다. 토리코티지 여섯번째 스테이의 컨셉은 ‘빛이 머무는 공간’으로, 공간기획, 건축 및 조명 설계, 인테리어, 사인시스템 디자인에 이르기까지 크고 작은 건축의 모든 과정을 일광전구에서 디렉팅하였습니다. ‘빛은 어떻게 STAY 공간을 밝혀줄 수 있는가?’라는 근본적인 질문에서 시작해 2년 가까이 진행했던 건축프로젝트가 이제 드디어 공개됩니다. <br><br>WE LOVE LIGHT. WE MAKE LIGHT. <br>자연이 아름다운 제주에서 진행했던 건축 프로젝트의 과정에서는 빛에 대한 예찬이 끊이지 않았습니다. 제주 가옥 본질적인 구조 만을 남기고 비워둔 공간에서, 공간과 사물의 소재 매치를 통해 빛이 우리 일상을 아름답게 감싸 줄 수 있도록 정성과 심혈을 다했습니다. 빛이 만들어내는 일상의 변화를 토리코티지 x 일광전구에서 보다 많은 분들이 경험해보셨으면 좋겠습니다."
  },
  {
    img: "./images/sub3/project_17.png",
    title: "Lighting Design Spot 6th",
    date: "2016.08.01 · 창신기지2 크래프트베이스",
    desc: "일광전구 & 창신기지2 크래프트베이스 <br><br>서울 종로구 창신동에 위치한 창신기지2 크래프트베이스는 일상의 공간을 재창조하는 크리에이터 그룹, 지랩이 만든 특별한 펍입니다. 시간의 흔적을 발판삼아 시대가 원하는 새로운 공간으로 변모시켜가는 지랩의 활동에 장인정신과 혁신을 지향하는 일광전구가 함께했습니다.<br><br>사람과 문화가 깃들 수 있는 좋은 공간을 만들기 위해 지랩, 코리아크래프트브류어리, 손막걸리 복순도가, 라이마스, 그린샐러드플라워, 그리고 일광전구가 힘을 모았습니다. 폐가로 방치되어 오랫동안 빛의 흔적이 사라졌던 곳에 일광전구의 클래식 전구가 다시금 새 빛을 불어넣었습니다. 골목에서부터 시작된 일광전구의 파티라이트는 크래프트베이스와 이웃한 건물들까지도 환하게 밝혀주며, 방문객들을 맞이합니다. 70년의 세월을 견뎌낸 한옥 내부에도 클래식 전구와 파티라이트를 설치하여, 경쾌하면서도 클래식한 무드를 연출하였습니다. 특히나 한옥 구조의 특징인 중정부에 파티라이트를 설치함으로써 ,일상을 축제와 같이 변화시키는 빛의 힘을 다시금 확인할 수 있었습니다."
  },
  {
    img: "./images/sub3/project_16.png",
    title: "백제병원 부산",
    date: "2016.02.28 · 부산 동구 초량동 백제병원",
    desc: "일광전구 & 브라운핸즈 백제병원 <br><br>부산의 근대건조물 백제병원에 일광전구가 빛을 밝힙니다. <br>부산역 앞에 위치한 구 백제병원은 1927년 설립된 부산 최초의 근대식 종합병원으로 약 90여년의 세월동안 다양한 용도로 활용되어진 근대건조물입니다. 백제병원이 위치한 초량동은 과거 대한민국 전역을 밝히는 백열전구를 생산하던 공장이 많이 위치했던 동네이기도 합니다. 초량동. 백제병원. 그곳에 일광전구가 다시 빛을 밝힙니다. 3월초 '브라운핸즈'의 이름으로 다시 태어나는 백제병원을 기대합니다. "
  },
  {
    img: "./images/sub3/project_15.png",
    title: "Art Project LEE KWANGHO",
    date: "2015 · 리움미술관",
    desc: "Art Project LEE KWANGHO <br><br>일광전구 아트프로젝트는 빛을 모티브로 동시대 젊은창작그룹과 함께하는 협업 프로젝트입니다. 일광전구 아트 프로젝트의 두번째 협업 작가는 아티스트 이광호입니다. 이광호 작가는 금속디자인을 전공한 후 스틸, 구리, EPS 등 새로운 소재와 그 소재의 완벽한 조형을 연구해왔습니다. 특히나 대량생산 제품이 일상화된 현대사회에서 단순한 재료를 기반으로 한 수작업을 진행함으로써 공예와 예술의 중요성을 깨닫게 해줍니다. 이광호 작가의 손과 일광전구의 빛이 리움미술관에서 함께 만났습니다"
  },
  {
    img: "./images/sub3/project_14.png",
    title: "Art Project KIM TAE KYUNG",
    date: "2015.12.17 · 대구 봉산문화회관",
    desc: "Art Project KIM TAE KYUNG <br><br>일광전구가 동시대 젊은창작그룹과 함께 다양한 활동을 진행합니다. 일광전구 첫번째 아트 프로젝트에서는 조각가 김태경과 EEFL램프가 만났습니다. EEFL, 외부전극 형광램프는 높은 에너지효율, 긴 수명, 고휘도인 장점 덕분에 산업용 램프로 사용되어 왔습니다. 조각가 김태경은 제품 고유의 슬림한 형태를 살려, EEFL을 실용적인 램프에서 나아가 영감을 불어넣는 아트오브제로 재탄생 시켰습니다. 이 프로젝트를 통해 일광전구는, EEFL을 새로운 관점에서 바라보고 그 활용의 무한한 가능성에 대해 알게 되었습니다. 일상에 영감이 되는 빛을 만들어갈 일광전구 아트프로젝트, 그리고 가정용으로도 출시 될 EEFL 램프를 기대해주세요."
  },
  {
    img: "./images/sub3/project_13.png",
    title: "ST64 tree & Art work",
    date: "2015.11.28",
    desc: "New Product ST64 tree & GreenSaladFlower <br><br>일광전구 첫번째 크리스마스 전구를 소개합니다. 유리구 외형은 클래식 시리즈 st64와 닮았지만 크리스마스 트리를 연상시키는 필라멘트의 모양이 조금더 특별합니다. 백열전구 특유의 따뜻한 색감과 필라멘트 형상으로 공간을 더욱 아름답게 만들어보세요."
  },
  {
    img: "./images/sub3/project_12.png",
    title: "Grand Mint Festival 2015",
    date: "2015.10.17 - 10.18",
    desc: "일광전구 in 그랜드민트페스티벌 GMF 2015 <br><br>올해로 아홉 번째 해를 맞이하는 그랜드민트페스티벌에 일광전구가 함께 합니다. 한국에서 가장 큰 콘서트에 해당하는 GMF에서 일광전구가 무대 한곳을 조금더 아름답게 만들어 보려합니다. 감성적인 전구와 아티스트와의 조화를 곧 공개하겠습니다. 공연전까지 열심히 준비하겠습니다. "
  },
  {
    img: "./images/sub3/project_11.png",
    title: "wedding project 2nd",
    date: "2015.09.11",
    desc: "일광전구 웨딩프로젝트 <br><br>뻔한 결혼식이 아닌 멋진 테이블 세팅과 환상적인 조명이 만들어내는 파티는 어떨까요? <br>일광전구 파티라이트 p1을 사용한 제주 노리매 공원의 파티 사진을 공개합니다."
  },
  {
    img: "./images/sub3/project_10.png",
    title: "Lighting Design Spot 5th",
    date: "2015.07.05 · 코리아크래프트브류어리",
    desc: "일광전구 & 코리아크래프트브류어리 <br><br>한국 맥주의 정체성에 대한 근본적인 질문으로, 충북 음성군에 코리아크래프트브류어리가 오픈하였습니다. 새로운 맥주 문화를 만들어가기 위한 코리아크래프트브류어리의 브류어리 콘서트는 정통기법을 고수하는 맥주 제조 과정을 지켜보는 동시에, 흥겨운 음악과 함께 하는 맥주 파티입니다. 파티가 있는 곳이라면 일광전구의 파티라이트가 빠질 수 없습니다. 해질녘의 어스름한 하늘과 묵직한 벽돌 양조장, 맥주의 빛깔에 일광전구의 클래식한 불빛이 어우러져 한 폭의 그림과도 같은 파티였습니다."
  },
  {
    img: "./images/sub3/project_09.png",
    title: "Wedding Project",
    date: "2015.06.06 · 유어빅데이",
    desc: "일광전구 & 유어빅데이 <br><br>일광전구는 삶의 빛나는 순간에 함께하고자 합니다. 신랑 신부가 하나되어 더욱 빛나는 삶을 살아갈 수 있도록 웨딩디렉터 유어빅데이와 함께 웨딩프로젝트를 진행하였습니다. 일광전구 파티라이트를 통해 전해진 축복의 빛은 결혼식장을 축제의 흥겨움으로 가득차게 해주었습니다."
  },
  {
    img: "./images/sub3/project_08.png",
    title: "Lighting Design Spot 4th",
    date: "2015.06.01 · 해방촌 더백푸드트럭",
    desc: "일광전구 & 더백푸드트럭 <br><br>일광전구 라이팅 디자인 스팟 4번째로 서울 남산 소월로의 작은 레스토랑 '더백푸드트럭'을 선정하였습니다. 이동하는 푸드트럭에서 후암동의 1, 2층의 작은 가게를 오픈한 더백푸드트럭에는 서울시내가 시원하게 펼쳐지는 멋진 옥상공간이 있습니다. 이곳에 일광전구 파티라이트 P1이 함께 합니다. 곧 공개됩니다. 기대해주세요!"
  }
];

$(".con02 li a").on("click", function(e){
  e.preventDefault();

  const idx = $(this).closest(".swiper-slide").attr("data-swiper-slide-index");
    // console.log("클릭 인덱스:", idx);  // idx 제대로 나오는지 확인
    // console.log("대상 이미지:", con03Data[idx].img);
    // console.log("$con03 요소:", $con03.length); // 요소 선택 여부 확인

    // 내용 교체
  $(".con03").fadeOut(500, function() {
    $(".con03").find("img").attr("src", con03Data[idx].img);
    $(".con03").find("h3").text(con03Data[idx].title);
    $(".con03").find("span.date").text(con03Data[idx].date);
    $(".con03").find("p").html(con03Data[idx].desc);
  $(".con03").fadeIn(500);
  });
});