$(function () {

  var mixer = mixitup('.works__container');

 $('.reviews__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});

const iconMenu = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__list');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}