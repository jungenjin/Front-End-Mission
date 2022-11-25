jQuery(document).ready(function () {
   // .navi 의 li 태그에 mouseover 이벤트 설정
   $('.navi > li')
      .mouseover(function () {
         // $(this) : 현재 선택된 태그(요소)
         // find('.submenu') : 선택된 태그의 자식 태그 중 .submenu와 일치하는
         // 태그를 찾아서 반환함. 만약에, children()를 사용할 경우 직계 자식
         // 태그를 반환함
         // stop() : 현재 동작하고 있는 애니메이션 동작을 즉시 중단함
         // slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로
         // 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의
         // height값을 낮추거나 높혀가며 슬라이드 업 또는 다운 전환되게 함.
         // 매개변수값(인수) 500은 0.5초를 의미함
         $(this).find('.submenu').stop().slideDown(500);
      })
      .mouseout(function () {
         $(this).find('.submenu').stop().slideUp(500);
      });

   // (".notice li:first").click : .notice 요소의 후손 요소
   // 중에서 첫 번째 요소를 클릭하면
   $('.notice li:first').click(function () {
      // #modal과 일치하는 요소에 'active' 클래스를 추가함
      $('#modal').addClass('active');
   });

   // .btn 요소(닫기 버튼)를 클릭하면
   $('.Btn').click(function () {
      // #modal의 'active' 클래스를 삭제함
      $('#modal').removeClass('active');
   });
});
//cookie
$(function () {
   //쿠키("popup")의 값이 'none'이면 id 값이 인 요소를 숨김니다.
   if ($.cookie('popup') == 'none') {
      $('#modal').hide();
   }
   var $expireChk = $('#expireChk');
   $('.Btn').on('click', closePop);
   function closePop() {
      if ($expireChk.is(':checked')) {
         $.cookie('popup', 'none', {expires: 3, path: '/'});
      }
      $('#modal').fadeOut('fast');
   }
});
