$(function(){
    //'./product.html?pname=베이스'
    var key, value;

    function getParams() {

    // 현재 페이지의 url   ./product.html?pname=베이스
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex2.html?num=1'

    var params='';
    // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
    params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
    // '문자열'.substring(시작인덱스 , 자를개수) 
    // 'abcdefg'.substring(2 , 3) ->  'cde'
    // params = 'pname=베이스' 
    
    key = params.split("=")[0];  //'pname' 0: '='을 기준으로 앞
    value = params.split("=")[1];  // '베이스'  '='을 기준으로 뒤
    }   
    getParams();  //함수호출



   //ajax 처리

    $.ajax({
        url: './data/sam.json',  //json파일에 연결이 완료되면 자동으로 호출되는 함수
                                //data매개변수 > json파일에 있는 모든 객체배열이 자동 저장된다
        dataType: 'json',
        success: function(data){
            var useData = data.sam;      //usedata > 모든 객체배열이 담겨있다. 
            
            function dataPrint(arr){     //검색된 or 전체 상품 리스트를 출력
                    //arr = useData(전체상품) or newArray(검색된상품)
                var txt = '<ul>';
                
                for(var i in arr){
                
                    var $title = arr[i].title;
                    var $subtitle = arr[i].subtitle;
                    var $Image = arr[i].Image;

                    txt+='<li>';
                    txt+='<a href="#" class="pop_open">';
                    txt+='<img src="'+ $Image +'" alt="">';
                    txt+='<div>';
                    txt+='<p>'+$subtitle+'</p>'; 
                    txt+='<h3>'+$title+'</h3>';
                    txt+='<span>→</span>';
                    txt+='</div>';
                    txt+='</a>';
                    txt +='</li>';
                }

                txt += '</ul>';

                $('.brand_list').html(txt);
                enableDragScroll(); //스크롤을 위한 코드

            };

            var newArray = [];       //검색된 상품을 담기 위한 배열
            var search_on =false;  //검색어가 넘어오지 않았을 때 false , 검색어가 넘어왔을 때 true
            //초기실행, 함수호출
            
            if(value){
                //다른페이지에서 검색어 입력을 하였을때...
                newArray = useData.filter(function(element){
                    return element.title.includes(value);    //상품명에 검색어가 포함되어 있는 배열을 return
                });
                //newArray > 검색된 상품만 배열에 담김
                //console.log(newArray);

                if(newArray.length!=0){ //검색된 상품이 배열에 있으면
                    dataPrint(newArray);
                }else{                  //검색된 상품이 배열에 없으면
                    $('.brand_list').html('<span style="display:block;text-align:center; margin:100px 0; font-size:30px; color:red">검색된 브랜드가 없습니다</span>');
                }
                search_on =true;
            }else{                  //다른 페이지에서 검색어가 넘어오지 않았을 때
                dataPrint(useData); //전체상품을 모두 출력
                search_on =false;   //검색어가 넘어오지 않았따
            }
            

            //검색버튼을 클릭했을때...
            $('#btn').click(function(e){
                e.preventDefault();

                if($('.search_box #title').val()){  //검색어가 있으면
                    newArray = useData.filter(function(element){
                        //console.log($('#title').val());
                        //return element.Name == $('#title').val();
                        return element.title.includes($('.search_box #title').val());
                    });
                    //console.log(newArray);
                    if(newArray.length!=0){
                        dataPrint(newArray);
                    }else{
                        $('.brand_list').html('<span style="display:block;text-align:center; margin:100px 0; font-size:30px; color:red">검색된 브랜드가 없습니다</span>');
                    }
                    $('.tab').removeClass('current');
                    search_on =true;        //검색어를 입력했다.
                    $('.search_box #title').val('');        //입력했던 검색어 텍스트 없어지게
                }else{                  //검색어가 없으면
                    alert('검색어를 입력하세요');
                }

                
            });

            $('.btn_all').click(function(e){  //모두보기 클릭시
                e.preventDefault();
                dataPrint(useData);
                search_on =false;       //검색어가 입력되지 않았다
                $('.tab').removeClass('current');
            });

            $('.tab1').click(function (e) {  //베이커리를 클릭하면
                e.preventDefault();
                newArray = useData.filter(function(element){
                    //element == [{"Name":"정샘물 립프레션","Price":30000,"Descript":"인상을 결정짓는 3초 컬러초경량무중력매트","Image":"images/product01.jpg"},...]
                      //return element.Price >= $('#title').val();
                  //console.log($('#title').val());
                  //return element.Name == $('#title').val();
                    return element.Type =='베이커리';
                  });
                  //console.log(newArray);
                  dataPrint(newArray);  //검색된 배열로 리스트 출력
                  $('.tab').removeClass('current');
                  $('.tab1').addClass('current');
                  search_on =true; 
            });

            $('.tab2').click(function (e) {    //외식을 클릭하면
                e.preventDefault();
                newArray = useData.filter(function(element){
                //element == [{"Name":"정샘물 립프레션","Price":30000,"Descript":"인상을 결정짓는 3초 컬러초경량무중력매트","Image":"images/product01.jpg"},...]
                    //return element.Price >= $('#title').val();
                //console.log($('#title').val());
                //return element.Name == $('#title').val();
                return element.Type =='외식';
                });
                //console.log(newArray);
                dataPrint(newArray);  //검색된 배열로 리스트 출력
                $('.tab').removeClass('current');
                $('.tab2').addClass('current');
                search_on =true; 
            });



            //팝업처리 함수
            var pop_txt="";     //팝업에 삽입할 태그를 만든 변수
            var pop_load="";
            function popchange(obj){
                //obj > 클릭한 제품에 대한 객체만 전달
                pop_txt="";     //팝업에 삽입될 태그를 초기화 (이전 태그를 모두 삭제)
                pop_load="";
                //팝업 이미지 버튼
                // 팝업 이미지 처음 상태에서 첫 번째만 보이게
                setTimeout(function(){
                    $('.pop_con ul li').hide().eq(0).show();
                    $('.pop_img_btn a').removeClass('active').eq(0).addClass('active');
                }, 0);

                pop_load+='<div class="load">';
                pop_load+='<div class="wave '+ obj.brandno +'"></div>';
                pop_load+='<img src="'+ obj.pop_logo +'" alt="">';
                pop_load+='</div>';
                $('.popup .load').html(pop_load);

                pop_txt+='<ul>';
                pop_txt+='<li>';
                pop_txt+='<img src="'+ obj.pop_img1 +'" alt="">';
                pop_txt+='</li>';
                pop_txt+='<li>';
                pop_txt+='<img src="'+ obj.pop_img2 +'" alt="">';
                pop_txt+='</li>';
                pop_txt+='<li>';
                pop_txt+='<img src="'+ obj.pop_img3 +'" alt="">';
                pop_txt+='</li>';
                pop_txt+='</ul>';

                pop_txt+='<dl>';
                pop_txt+='<dt>';
                pop_txt+='<span>'+ obj.subtitle +'</span>'
                pop_txt+= obj.title+'</dt>';

                pop_txt+='<dd>';
                pop_txt+='<strong>'+obj.highlight+'</strong>';
                pop_txt+='</dd>';

                pop_txt+='<dd>'+obj.Descript1+'</dd>';

                pop_txt+='<dd>'+obj.Descript2+'</dd>';
                pop_txt+='</dl>';
                pop_txt+='<a class="brand_page" href="'+obj.link+'" target="_blank" title="'+obj.title+' 사이트 새창열림">'+obj.title+' 홈페이지 바로가기</a>';
                pop_txt+='<div class="pop_img_btn">';
                pop_txt+='<a href="#"></a>';
                pop_txt+='<a href="#"></a>';
                pop_txt+='<a href="#"></a>';
                pop_txt+='</div>';
                $('.popup .pop_con').html(pop_txt);
            }



            //팝업창 열기
            //$('pop_open')는 계속해서 재랜더링이 되어 만들어지기 때문에 $('pop_open')에 직접 이벤트를 연결하면 처리되지 않음.
            //↓로 해결 (document에 연결!!!)
            $(document).on('click', '.pop_open', function(e) {//json 파일을 불러와서 dom을 새로만들때... <a> 태그가 처리되지 않을때.. 
                e.preventDefault();
                $('.modal_box, .modal_box2, .popup').fadeIn('slow'); //팝업창 열기
                $('.popup .load').delay(2500).fadeOut('fast');
                $('.popup .popup_con').delay(2500).fadeIn('slow');
                $('.modal_box2').delay(1900).fadeOut('fast'); 
                ind = $(this).index('.pop_open');

                if(search_on==false){//검색 안되었을때
                    popchange(useData[ind]); //전체 객체 배열에서 클릭한 인덱스에 해당하는 객체를 전달
                }else if(search_on==true){//검색 되었을때
                    popchange(newArray[ind]);   //검색된 객체 배열에서 클릭한 인덱스에 해당하는 객체를 전달
                }
            });

            //팝업창 닫기
            $('.close_pop, .modal_box').click(function(e){
                e.preventDefault();
                $('.modal_box, .popup').fadeOut('fast');
                $('.popup .load').fadeIn();
                $('.popup .popup_con').fadeOut();
            });



        } 
    });


});

$(document).on('click', '.pop_img_btn a', function(e) {
    e.preventDefault();
    
    // 몇 번째 버튼을 클릭했는지 index 확인
    var idx = $(this).index();

    // 모든 li를 숨기고
    $('.pop_con ul li').fadeOut();

    // 해당 index의 li만 보이게
    $('.pop_con ul li').eq(idx).fadeIn();

        // 버튼에 불 들어오게 설정 (active 클래스 토글)
    $('.pop_img_btn a').removeClass('active');
    $(this).addClass('active');
});

function enableDragScroll() {
    const slider = $('.brand_list ul');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.on('mousedown', function(e) {
        isDown = true;
        startX = e.pageX - slider.offset().left;
        scrollLeft = slider.scrollLeft();
        e.preventDefault();
    });

    $(document).on('mouseup', function() {
        isDown = false;
    });

    $(document).on('mousemove', function(e) {
        if (!isDown) return;
        const x = e.pageX - slider.offset().left;
        const walk = (x - startX) * 1.5; // 속도 조절
        slider.scrollLeft(scrollLeft - walk);
    });
}