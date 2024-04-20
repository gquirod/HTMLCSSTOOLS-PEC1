var footer = document.getElementById('footerMenu');
var menuButton = document.getElementById('menuButton');
import VanillaTilt from 'vanilla-tilt';

function removeHoveredState(){
  menuButton.classList.remove('hovered');
  footer.classList.remove('footerActive');
}

function addHoveredState(){
  menuButton.classList.add('hovered');
  footer.classList.add('footerActive');
}

if (window.innerWidth < 768){
  footer.removeEventListener('mouseover', addHoveredState);
  footer.removeEventListener('mouseout', removeHoveredState);

} else {
  footer.addEventListener('mouseover', addHoveredState);
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