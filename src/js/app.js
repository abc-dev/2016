(function scrollMenu(){
  window.onscroll = function(){
    var menu = document.querySelector('nav');
    var top = window.pageYOffset || document.documentElement.scrollTop
    var wHeight = window.innerHeight;
    var navHeight = menu.offsetHeight;
    var vHeight = wHeight - navHeight;
    if(top > vHeight) {
      menu.classList.add('fixed');
    }else{
     menu.classList.remove('fixed');
    }
  }
})();
