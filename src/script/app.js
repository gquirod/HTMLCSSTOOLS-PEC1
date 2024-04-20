var footer = document.getElementById('footerMenu');
var menuButton = document.getElementById('menuButton');
import VanillaTilt from 'vanilla-tilt';

footer.addEventListener('mouseover', function () {
  menuButton.classList.add('hovered');
});


footer.addEventListener('mouseout', function () {
  menuButton.classList.remove('hovered');

  footer.classList.remove('shouldClose')
});

menuButton.addEventListener('click', function () {
  if (menuButton.classList.contains('hovered')) {
    footer.classList.remove('footerActive')
    footer.classList.add('shouldClose')
  } else {
    footer.classList.remove('shouldClose')
    footer.classList.add('footerActive')
  }
});




