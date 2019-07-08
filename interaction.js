(document).ready(function () { 
    var top = $('#mySidenav', '#optButton').offset().top - parseFloat($('#mySidenav', '#optButton').css('marginTop').replace(/auto/, 0));
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        //if y > top, it means that if we scroll down any more, parts of our element will be outside the viewport
        //so we move the element down so that it remains in view.
        if (y >= top) {
           var difference = y - top;
           $('#mySidenav', '#optButton').css("top",difference);
       }
   });
});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}