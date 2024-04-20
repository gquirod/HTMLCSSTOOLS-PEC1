var footer = document.getElementById('footerMenu');
var menuButton = document.getElementById('menuButton');
import VanillaTilt from 'vanilla-tilt';

if (window.innerWidth > 768){
  footer.addEventListener('mouseover', function () {
    menuButton.classList.add('hovered');
  });
  
  
  footer.addEventListener('mouseout', function () {
    menuButton.classList.remove('hovered');
  });
}

menuButton.addEventListener('touchend', function () {
    footer.classList.toggle('footerActive');
    menuButton.classList.toggle('hovered');
})