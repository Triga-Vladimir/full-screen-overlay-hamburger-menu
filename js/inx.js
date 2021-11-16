const menuBtn = document.querySelector('#toggle');
const overlay = document.querySelector('#overlay');

menuBtn.addEventListener('click', onClick);

function onClick(){
   menuBtn.classList.toggle('active');
   overlay.classList.toggle('open');
}