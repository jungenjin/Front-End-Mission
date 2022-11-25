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

   // vages
   $('.slide_box').vegas({
      slides: [
         {src: '../images/construct01.jpg'},
         {src: '../images/construct02.jpg'},
         {src: '../images/construct03.jpg'},
         {src: '../images/construct04.jpg'},

         {
            src: 'images/construct.jpg',
            video: {
               src: ['../video/construct.mp4'],
               loop: false,
               mute: true,
            },
         },
      ],
   });
});
