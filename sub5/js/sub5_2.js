function emailCopy(e) {
    e.preventDefault();
    // 해당 div 요소를 변수에 받고,
    const code = document.querySelector(".email");
  
    // window.navigator.clipboard.writeText() 메서드에
    // div 요소의 텍스트 내용을 (code.textContent) 인자로 넣어주면 끝!
    window.navigator.clipboard.writeText(code.textContent).then(() => {
      alert('이메일이 복사되었습니다.');
    }).catch(err => {
        console.error('복사 실패:', err);
    });
}