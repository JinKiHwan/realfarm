//언어체크
const userLang = document.getElementsByTagName('html')[0].getAttribute('lang');

$(document).ready(function () {
  $('#lang > a').click(function () {
    $('.depth2').stop().slideToggle();
  });

  /* 햄버거 메뉴 */
  $('#mMenu').click(function () {
    $(this).toggleClass('on');
    $('.m-menu').toggleClass('on');
    $('.header').toggleClass('on');
    $('body').toggleClass('-noneScroll');
  });

  /* 팝업 */
  $('#popupPlay').click(function () {
    $('.movie-popup').addClass('on');
  });
  $('#popupClose').click(function () {
    $('.movie-popup').removeClass('on');
  });

  /* Video 하단영역 스와이퍼 */
  var movieSw = new Swiper('.movieSw', {
    slidesPerView: 'auto',
    autoplay: {
      delay: 0, //add
      disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 5,
  });

  /* 캐릭터 스와이퍼 */
  var charSw = new Swiper('.charSw', {
    effect: 'fade',
    navigation: {
      nextEl: '.char-prev',
      prevEl: '.char-next',
    },
    pagination: {
      el: '.character__pagi',
      clickable: true,
    },
  });

  /* 캐릭터 배경 바꾸기  */
  charSw.on('slideChange', function () {
    // 캐릭터 이미지 클래스를 지칭하는 배열
    const characterClasses = ['zero', 'first', 'second', 'third', 'fourth'];

    // 배경을 변경할 요소
    const changeImgElement = document.querySelector('#changeImg');

    // 현재 활성화된 슬라이드의 인덱스
    const activeSlideIndex = charSw.activeIndex;

    // 현재 클래스 이름
    let currentClasses = changeImgElement.className;

    // 현재 클래스에서 'zero', 'first', 'second', 'third'를 포함하는 클래스 삭제
    characterClasses.forEach((className) => {
      currentClasses = currentClasses.replace(className, '');
    });

    // 현재 클래스 이름에 해당하는 슬라이드 인덱스에 맞는 클래스를 추가
    const newCharacterClass = characterClasses[activeSlideIndex];
    changeImgElement.className = currentClasses + ' ' + newCharacterClass;
  });

  /* review */
  var reviewSw = new Swiper('.reviewSw', {
    effect: 'fade',
    loop: true,
    navigation: {
      nextEl: '#reviewNext',
      prevEl: '#reviewPrev',
    },
  });

  //AOS 효과
  AOS.init();
});
