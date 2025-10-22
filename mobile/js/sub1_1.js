$(document).ready(function () {
    var $firstDl = $(".mvision .mvision_con02 .value dl").eq(0);
    $firstDl.find("dd").show();
    $firstDl.find("dt").addClass("active");
    // dl 클릭 시 dd 토글
    $(".mvision .mvision_con02 .value dl").on("click", function () {
        var $dd = $(this).find("dd");
        var $dt = $(this).find("dt");
        $dd.slideToggle(); // 열려있으면 닫고, 닫혀있으면 열기
        $dt.toggleClass("active");
    });
    });

    let isOpen = false;
    $(window).on('scroll', function(){    //스크롤 위치의 변화가 생기면...
        var scroll = $(window).scrollTop(); //스크롤 탑의 위치를 변수에 담는다
        //console.log(scroll);
        if(scroll>=800 && !isOpen){
          $('.story_txt02 div').slideDown('slow');
          isOpen = true;
        } else if (scroll < 800 && isOpen) {
            $('.story_txt02 div').slideUp('slow');
            isOpen = false;
          }
        });
