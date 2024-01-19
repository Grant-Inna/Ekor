$(document).ready(function () {
   const width = $(document).width();
   
   /* мобилка */
   $(window).resize(function() {
      let new_width = $(document).width();
      if ( width <= 1190 && new_width > 1190 || width > 1190 && new_width <= 1190 ) {
         appendToMobile(new_width);
      }
   });
   appendToMobile(width);
   function appendToMobile( width ) {
      if ( width <= 1190 ) {
         $('.header__menu, .header__contact').appendTo('.header__menu-mobile .column.start');
         $('.header__social').appendTo('.header__menu-mobile .column.start');
         $('.header__main .burger__holder').show().on( 'click', showMobileMenu);
         
         if ( width <= 890 ) {
            $('.header__to-catalog.row_flex-10, .header__aside-icons').prependTo('.header__menu-mobile .column.start');
            $('.header__search').prependTo('.header__menu-mobile .column.start');
            $('.header__aside').hide();
         } else {
            $('.header__to-catalog.row_flex-10, .header__search, .header__aside-icons').prependTo('.header__aside .wrapper');
         }
      }
      else {
         $('.header__menu, .header__social').appendTo('.header__main');
         $('.header__contact').appendTo('.header__main');
         $('.burger__holder').hide();
         
      }
   }
   
   
   function showMobileMenu() {
      let style_blackLayer = {
         display: "block",
         opacity: "1"
      };
      if ( $('.header__menu-mobile').css('display') !== 'block' ) {
         $('.header__menu-mobile').slideDown(500);
         $('#black_back').css(style_blackLayer); // Появление заднего фона
         $('.header__main .burger__holder').addClass('close');
      } else {
         hideMobileMenu();
      }
      $('#black_back').on('click', function (event) { // Скрытие меню при клике по заднику
         event.stopPropagation();
         hideMobileMenu()
      });
   }
   function hideMobileMenu() {
      $('.header__menu-mobile').slideUp(200);
      $('#black_back').prop('style', '');  // Скрытие задника
      $('.header__main .burger__holder').removeClass('close');
   }
   
   
   /* select */
   
   $('.select2').select2({ // Преобразуем селект #regions в select2 и заполняем данными из json
      "language": {
            "noResults": function () {
               return "Результаты не найдены";
            }
         }
      });
   
  /* каруселька */
   
   /* плавный скрол */
   
   if ($('#totop').length > 0) {
    
      $('#totop').on( 'click', function() {
         $('body, html').animate({scrollTop: 0 }, 600); // плавно переходим наверх
      });
      
   }
   
   /* полоса прокрутки */
   
   if ($('#container_main').length > 0) {
      $('.scrollbar-inner').scrollbar();
   }
   
 });
