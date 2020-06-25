const testButton = document.querySelector('.test');
const moreElem = document.querySelector('.more');


const testFirst = document.querySelector('.test-first');
const moreFirst = document.querySelector('.more-first');
const upMore = document.querySelector('.up-more');

const testSecond = document.querySelector('.test-second');
const moreSecond = document.querySelector('.more-second');
const upMoreThird = document.querySelector('.four');

const testThird = document.querySelector('.test-third');
const moreThird = document.querySelector('.more-third');
const upMoreFour = document.querySelector('.four');

testButton.addEventListener('click', (e) => {
  e.preventDefault();
  moreElem.classList.toggle('is-open');
  testButton.classList.toggle('close-more');
});

testFirst.addEventListener('click', (e) => {
  e.preventDefault();
  moreFirst.classList.toggle('is-open');
  testFirst.classList.toggle('close-more');
});
upMore.addEventListener('click', (e) => {
  e.preventDefault();
  moreFirst.classList.toggle('is-open');
  testFirst.classList.toggle('close-more');
});

testSecond.addEventListener('click', (e) => {
  e.preventDefault();
  moreSecond.classList.toggle('is-open');
  testSecond.classList.toggle('close-more');
});

testThird.addEventListener('click', (e) => {
  e.preventDefault();
  moreThird.classList.toggle('is-open');
  testThird.classList.toggle('close-more');
});
upMoreFour.addEventListener('click', (e) => {
  e.preventDefault();
  moreThird.classList.toggle('is-open');
  testThird.classList.toggle('close-more');
});

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
