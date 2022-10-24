const toggleBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector(".nav-menu");
const icons = document.querySelector(".nav-icons");

toggleBtn.addEventListener('click',() =>{
  menu.classList.toggle('active')
  icons.classList.toggle('active')

});