var footer = document.getElementById('footerMenu');
var menuButton = document.getElementById('menuButton');
var svgArrow = document.getElementById('drawableArrow')
var headerHomeCard = document.getElementById('headerHomeCard')
var topText = document.getElementById('topText')
var homeCardText = document.getElementById('homeLink')
var snakeImage = document.getElementById('snakeImage')
var scrollReference = document.getElementById('scrollReference')

import VanillaTilt from 'vanilla-tilt';

function removeHoveredState(){
  menuButton.classList.remove('hovered');
  footer.classList.remove('footerActive');
}

function addHoveredState(){
  menuButton.classList.add('hovered');
  footer.classList.add('footerActive');
}

function addHoveredStateToText(){
  topText.classList.add('blink');
}

function hideText(){
  topText.classList.remove('blink');
  topText.classList.add('hide');
}

function goToTop(){
  scrollReference.scrollIntoView(true)
}

function activeHeaderState(){
  homeCardText.textContent = "HOME"
  snakeImage.classList.add('snakeMove')
  snakeImage.classList.remove('snakeReturn')
}

function normalHeaderState(){
  homeCardText.textContent = "VVV"
  snakeImage.classList.remove('snakeMove')
  snakeImage.classList.add('snakeReturn')
}

if (window.innerWidth < 768){
  footer.removeEventListener('mouseover', addHoveredState);
  if (svgArrow){
    svgArrow.removeEventListener('mouseover', addHoveredStateToText);
    svgArrow.removeEventListener('mouseout', hideText);
    svgArrow.removeEventListener('click', goToTop);
    svgArrow.addEventListener('touchstart', goToTop);
  }
  if(headerHomeCard){
    headerHomeCard.removeEventListener('mouseover', activeHeaderState);
    headerHomeCard.removeEventListener('mouseout', normalHeaderState);
  }

  footer.removeEventListener('mouseout', removeHoveredState);

} else {
  footer.addEventListener('mouseover', addHoveredState);
  if (svgArrow){
  svgArrow.addEventListener('mouseout', hideText);
  svgArrow.addEventListener('mouseover', addHoveredStateToText);
  svgArrow.addEventListener('click', goToTop);
  svgArrow.removeEventListener('touchstart', goToTop);
  }
  if(headerHomeCard){
    headerHomeCard.addEventListener('mouseover', activeHeaderState);
    headerHomeCard.addEventListener('mouseout', normalHeaderState);
  }
  footer.addEventListener('mouseout', removeHoveredState);
}


menuButton.addEventListener('touchend', function () {
  if (menuButton.classList.contains('hovered')) {
    footer.classList.remove('footerActive');
    menuButton.classList.remove('hovered');
  } else {
    footer.classList.add('footerActive');
    menuButton.classList.add('hovered');
  }
})