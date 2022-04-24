let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
//------------------------------------------------------
//const btns = document.querySelectorAll('.btn');
//const modalOverlay = document.querySelectorAll('.modal_overlay');

//btns.forEach((el) => {
 // el.addEventListener("click", (e) => {
//let path = e.currentTarget.getAttribute('data-path');
//modalOverlay.classList.add('modal_overlay--visible');
//document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
  //})  
//});

//--------modal-----------------------------------------------------------------------------
const btns = document.querySelectorAll('.btn-modal');
const modalOverlay = document.querySelector('.modal-overlay');


btns.forEach(element => {
  element.addEventListener('click', (e) => {
let path = e.currentTarget.getAttribute('data-path');
document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
modalOverlay.classList.add('.modal-overlay--visible');
  });
});