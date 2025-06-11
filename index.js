const swiperCard = (function() {
let init = false;
let swiper;
return function() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 'auto', 
        spaceBetween: 25,
        pagination: {
          el: '.swiper-pagination',
        },
      });
      }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
})();
swiperCard();
window.addEventListener("resize", swiperCard);

{
  const toggleBtn = document.querySelector('.open-button');

  toggleBtn.addEventListener('click', () => {

  const gridContainer = document.querySelector('.swiper-wrapper--layout');
  const icon = document.querySelector('.open-button__img');
  const textElement = document.querySelector('.open-button_text');

  textElement.textContent = textElement.textContent === "Показать все" ? "Скрыть все" : "Показать все";
  gridContainer.classList.toggle('hidden');
  icon.classList.toggle('rotate');
  
});
}