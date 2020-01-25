
$(window).scroll(function() {

  let value = $(this).scrollLeft();
  $('#scrollValue').text('scrollLeft: '+value);

});


$(function(){

  /* TOP-Pageボタン */
  var topBtn = $('.move-right');
  topBtn.hide();
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollLeft: 0
      }, -1000);
      return false;
  });
});
