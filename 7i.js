"use strict";
   alert("Приятного просмотра! Это мой первый сайт!")
   var num = 5;
   console.log("hello+" + num + "= 5hello")
   document.querySelector('a[href="#bottom"]').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('bottom').scrollIntoView({ behavior: 'auto' });
  });
  document.querySelector('a[href="#main"]').addEventListener('click', function(e) {
   e.preventDefault();
   document.getElementById('main').scrollIntoView({ behavior: 'auto' });
});
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
