window.onscroll = function(){
  var menu = document.querySelector('nav');
  var top = window.pageYOffset || document.documentElement.scrollTop
  if(top > 800) {
    menu.classList.add('fixed');
  }else{
    menu.classList.remove('fixed');
  }
}
