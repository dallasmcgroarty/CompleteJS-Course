const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

btn.addEventListener('click', function (e) {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

closeModal.addEventListener('click', function (e) {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

body.addEventListener('keyup', function (e) {
  if (e.code === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.toggle('hidden');
  }
});