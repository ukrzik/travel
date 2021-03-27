// робимо header помітним при прокрутці
(function (){
   const header = document.querySelector('.header');
   let height = document.body.clientWidth < 450 ? 50 : 150;
      window.onscroll = () => {
         if (window.pageYOffset > height) {/*прокрутили на 50(150) виконується команда*/
            header.classList.add('header__active');
         } else {
            header.classList.remove('header__active');
         }
      }
}());
// Burger handler
(function (){//при зменшенні екрану визивається вертикальне верхнє меню подорожі по сайту
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.header__nav');
   const menuCloseItem = document.querySelector('.header__nav-close');
//   const menuLinks = document.querySelectorAll('.header__link')//закриваємо меню header__nav_active при click на пункт меню при ширині екрану < 767px
   burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
        // console.log(1);
   });
      menuCloseItem.addEventListener('click', () => {
         menu.classList.remove('header__nav_active');
   });
//   if (window.innerWidth <= 767) {//закриваємо меню header__nav_active при click на пункт меню при ширині екрану < 767px
//      for (let i = 0; i < menuLinks.length; i +=1) {
//         menuLinks[i].addEventListener('click', () => {
//            menu.classList.remove('header__nav_active');
//         });
//      }
//   }
}());

// Scroll to anchors
(function () {

   const smoothScroll = function (targetEl, duration) {//Функція плавний Scroll, перехід
      const headerElHeight =  document.querySelector('.header').clientHeight;// змінна висота header
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;

      const ease = function(t,b,c,d) {//функці ease обробки Scroll, як іде анімація переходу
         t /= d / 2;
         if (t < 1) return c / 2 * t * t + b;
         t--;
         return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animation = function(currentTime){//функція анімації
         if (startTime === null) startTime = currentTime;
         const timeElapsed = currentTime - startTime;
         const run = ease(timeElapsed, startPosition, targetPosition, duration);
         window.scrollTo(0,run);
         if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

   };

   const scrollTo = function () {//фукція підвісити scroll на зсилки
      const menu = document.querySelector('.header__nav');//закриваємо меню header__nav_active другий спосіб
      const links = document.querySelectorAll('.js-scroll');//клас js-scroll
      links.forEach(each => {
         each.addEventListener('click', function () {
            const currentTarget = this.getAttribute('href');
            smoothScroll(currentTarget, 1000);
            menu.classList.remove('header__nav_active');//закриваємо меню header__nav_active другий спосіб
         });
      });
   };
   scrollTo();
}());