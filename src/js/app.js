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

(function showMenu(){
  var mediaQuery = window.matchMedia('(max-width: 959px)')
  var hamburger = document.querySelector('.hamburger');
  var mainMenu = document.querySelector('.main-menu');
  var socials = document.querySelector('.socials');
  var linkMenu = mainMenu.querySelectorAll('a');

  var link = document.querySelector('a[href="#code-of-conduct"]');

  if (mediaQuery.matches) {
    link.href = 'codigo-de-conduta';

    var li = document.createElement('li');
    li.classList.add('close');
    var span = document.createElement('span');
    var img = document.createElement('img');
    img.src = '../images/close.svg';

    span.appendChild(img);
    li.appendChild(span);
    mainMenu.insertBefore(li, mainMenu.firstChild);

    span.addEventListener('click', function(){
      mainMenu.classList.remove('showup');
      socials.classList.remove('showup');
    })
  }
  hamburger.addEventListener('click', function(){
    mainMenu.classList.add('showup');
    socials.classList.add('showup');

  })
  for (var i = 0; i < linkMenu.length; i++) {
    linkMenu[i].addEventListener('click', function(){
      mainMenu.classList.remove('showup');
      socials.classList.remove('showup');
    })
  };
})();


window.onload = function(){
  var mq = matchMedia('(min-width: 1200px)');
  var locationMap = document.querySelector('#local');
  var carregaMapa = function() {
    if (mq.matches) {
      var mapa = document.createElement('iframe');
      mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.768169955343!2d-46.60344278501935!3d-23.71997148460445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce440ff947bb3f%3A0x6f9921c66133ad06!2sEstr.+Samuel+Aizemberg%2C+1707+-+Alves+Dias%2C+S%C3%A3o+Bernardo+do+Campo+-+SP%2C+09851-550!5e0!3m2!1spt-BR!2sbr!4v1464792640965';
      mapa.style.border = "0";
      locationMap.insertBefore(mapa, locationMap.firstChild);
      mq.removeListener(carregaMapa);
    }
  }
  mq.addListener(carregaMapa);
  carregaMapa();
}
