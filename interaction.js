(document).ready(function () { 
    var top = $('#mySidenav', '#optButton').offset().top - parseFloat($('#mySidenav', '#optButton').css('marginTop').replace(/auto/, 0));
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        if (y >= top) {
           var difference = y - top;
           $('#mySidenav', '#optButton').css("top",difference);
       }
   });
});
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}