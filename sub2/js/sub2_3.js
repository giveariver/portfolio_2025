$('.location a').click(function(e){
    e.preventDefault();

    if($(this).parent('li').find('div').hasClass('drop')){

        $(this).parent('li').find('div').css('transform','translateY(-190px)');
        $(this).parent('li').find('div').removeClass('drop');



    } else {
        $(this).parent('li').find('div').addClass('drop');
        $(this).parent('li').find('div').css('transform','translateY(0px)');
    }  
    
});


function emailCopy() {
    // 해당 div 요소를 변수에 받고,
    const code = document.querySelector(".email");
  
    // window.navigator.clipboard.writeText() 메서드에
    // div 요소의 텍스트 내용을 (code.textContent) 인자로 넣어주면 끝!
    window.navigator.clipboard.writeText(code.textContent).then(() => {
      alert('이메일이 복사되었습니다.');
    });
  };

  function telCopy() {
    // 해당 div 요소를 변수에 받고,
    const code = document.querySelector(".tel");
  
    // window.navigator.clipboard.writeText() 메서드에
    // div 요소의 텍스트 내용을 (code.textContent) 인자로 넣어주면 끝!
    window.navigator.clipboard.writeText(code.textContent).then(() => {
      alert('전화번호가 복사되었습니다.');
    });
  };