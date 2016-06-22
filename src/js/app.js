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
  if (mediaQuery.matches) {
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

