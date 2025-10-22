$(document).ready(function(){
        
    //    회원가입 개인정보 동의 ------------------------------------
    
    $('.mailsend').on('click',check_agree);
    
    function check_agree(e){
        e.preventDefault();
                                                    //  .length => 자바스크립트 / .size(); => 제이쿼리
        var checkboxLength=$('input[type="checkbox"]').length;  //5
			            // 체크박스의 총개수
        var checkedLength=$('input[type="checkbox"]:checked').length;   //체크가 되어있는 체그박스 개
         //console.log(checkboxLength,$('input[type="checkbox"]:checked').length)

         // 라디오 버튼 그룹 체크 (둘 중 하나라도 체크됐는지 확인)
        var radioChecked = $('input[name="agree1"]:checked').length;
        
        if (checkboxLength !== checkedLength) {
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
        } else if (radioChecked === 0) {
            alert("이메일 회신에 대한 동의 여부를 선택해 주세요.");
        } else {
            alert("메일 전송이 완료되었습니다.");
        }
    }
    }
    
   );


// function join_cancel(){
//    history.go(-1);
// }

















