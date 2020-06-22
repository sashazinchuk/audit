const sectionLink = document.querySelector('.section-link');
const more = document.querySelector('.more');

sectionLink.addEventListener('click', more);

function more() {
  more.classList.toggle("is-open");
}