$(function() {

  const carouselWidth = $(".works-part").width(); //560
  const length = $("#carousel-inner li").length; // 4
  const innerWidth = carouselWidth * length; // 2240
  const time = 400; // transition = 0.4秒

  const carouselinner = $("#carousel-inner");//ul
  const prev = $("#prev");
  const next = $("#next");

  let c = 1;//現在表示されてる画像を表示させるもの

  // ハンバーガーメニュー
  $('#humburger').click(function() {
    $(this).toggleClass("active");
    $('#menu').toggleClass("open");
    $('#main').toggleClass("hide");
  });


// 次へのボタン処理
    $('#carousel-nav img').eq(0).css("opacity",0.5);
next.click(function(){

  if(c == length){
    carouselinner.stop().animate({
      left:"0"},time);
    c=1;
    $('#carousel-nav img').css("opacity",1);
    $('#carousel-nav img').eq(c-1).css("opacity",0.5);
  } else {
    carouselinner.stop().animate({
      left: -c * carouselWidth
    },time);
    c++;
    $('#carousel-nav img').css("opacity",1);
    $('#carousel-nav img').eq(c-1).css("opacity",0.5);
  }
});

// 前へのボタン処理
prev.click(function(){

  if(c==1){
    carouselinner.stop().animate({
      left:"-1680px"
    },time);
    c=length
    $('#carousel-nav img').css("opacity",1);
    $('#carousel-nav img').eq(c-1).css("opacity",0.5);
  }else{
    carouselinner.stop().animate({
      left:(-c+2)*carouselWidth
    },time);
    c--;
    $('#carousel-nav img').css("opacity",1);
    $('#carousel-nav img').eq(c-1).css("opacity",0.5);
  }
});

// $(window).scroll(function() {

  //   let value = $(this).scrollLeft();
  //   $('#scrollValue').text('scrollLeft: '+value);
  //
  // });

// $(function(){
//
//   /* TOP-Pageボタン */
//   var topBtn = $('.move-right');
//   topBtn.hide();
//   //スクロールしてトップ
//   topBtn.click(function () {
//       $('body,html').animate({
//           scrollLeft: 0
//       }, -1000);
//       return false;
//   });
// });

});
