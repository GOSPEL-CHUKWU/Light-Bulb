'use strict';

const switchControl = document.querySelector('.switch-control');
const changeImage1 = document.querySelector('.change-img-1');
const changeImage2 = document.querySelector('.change-img-2');

switchControl.addEventListener('click', function () {
  changeImage1.classList.toggle('hidden');
  changeImage2.classList.toggle('hidden');
});
