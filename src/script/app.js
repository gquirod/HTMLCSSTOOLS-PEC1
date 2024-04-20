var footer = document.getElementById('footerMenu');
var menuButton = document.getElementById('menuButton');
import VanillaTilt from 'vanilla-tilt';

footer.addEventListener('mouseover', function () {
  menuButton.classList.add('hovered');
});


footer.addEventListener('mouseout', function () {
  menuButton.classList.remove('hovered');

});

menuButton.addEventListener('touchstart', function () {
  if (menuButton.classList.contains('hovered')) {
    footer.classList.remove('footerActive');
    menuButton.classList.remove('hovered');
  } else {
    footer.classList.add('footerActive');
    menuButton.classList.add('hovered');
  }
})