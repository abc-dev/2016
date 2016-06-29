'use strict';

window.onscroll = scrollMenu;
window.onload = onLoad;
showMenu();

function scrollMenu(){
  let menu = document.querySelector('nav');
  let top = window.pageYOffset || document.documentElement.scrollTop;
  let wHeight = window.innerHeight;
  let navHeight = menu.offsetHeight;
  let vHeight = wHeight - navHeight;

  if (top > vHeight) {
    menu.classList.add('fixed');
  } else {
    menu.classList.remove('fixed');
  }
}

function showMenu(){
  let mediaQuery = window.window.matchMedia('(max-width: 959px)');
  let hamburger = document.querySelector('.hamburger');
  let mainMenu = document.querySelector('.main-menu');
  let socials = document.querySelector('.socials');
  let linkMenu = mainMenu.querySelectorAll('a');
  let link = document.querySelector('a[href="#code-of-conduct"]');

  if (mediaQuery.matches) {
    link.href = 'codigo-de-conduta.html';

    let li = document.createElement('li');
    li.classList.add('close');
    let span = document.createElement('span');
    let img = document.createElement('img');
    img.src = 'images/close.svg';

    span.appendChild(img);
    li.appendChild(span);
    mainMenu.insertBefore(li, mainMenu.firstChild);

    span.addEventListener('click', hideMainMenuAndSocials);
  }

  hamburger.addEventListener('click', showMainMenuAndSocial);
  linkMenu.forEach(addEventClick);

  function hideMainMenuAndSocials(){
    mainMenu.classList.remove('showup');
    socials.classList.remove('showup');
  }

  function showMainMenuAndSocial(){
    mainMenu.classList.add('showup');
    socials.classList.add('showup');
  }

  function addEventClick(link) {
    link.addEventListener('click', hideMainMenuAndSocials);
  }
}

function onLoad(){
  let mq = window.matchMedia('(min-width: 1200px)');
  let locationMap = document.querySelector('#local');
  mq.addListener(loadMap);
  loadMap();

  function loadMap() {
    if (mq.matches) {
      let mapa = document.createElement('iframe');
      mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.768169955343!2d-46.60344278501935!3d-23.71997148460445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce440ff947bb3f%3A0x6f9921c66133ad06!2sEstr.+Samuel+Aizemberg%2C+1707+-+Alves+Dias%2C+S%C3%A3o+Bernardo+do+Campo+-+SP%2C+09851-550!5e0!3m2!1spt-BR!2sbr!4v1464792640965';
      mapa.style.border = '0';
      locationMap.insertBefore(mapa, locationMap.firstChild);
      mq.removeListener(loadMap);
    }
  }
}
