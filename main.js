
// swiper js (testimonial section)
const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

//  SHOW MENU
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

//   HIDE MENU
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');
// remove active class from clicked nav item
const changeActiveItem = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}
// Add active class to clicked nav item
navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem();
    link.classList.add('active');
  })
})

// show more in about section

const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
  readMoreContent.classList.toggle('show-content');
  if(readMoreContent.classList.contains('show-content')){
    readMoreBtn.textContent = "Show Less";
  } else {
    readMoreBtn.textContent = "Show More";
  }
})

// add box shadow to nav bar on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY
  > 0)
})
