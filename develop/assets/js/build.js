$(document).ready(function () {
   const width = $(document).width();
   
   /* полоса прокрутки */
   
   if ($('#container_main').length > 0) {
      $('.scrollbar-inner').scrollbar();
   }
   
   
   
   /* мобильное меню */
   $(window).resize(function() {
      let new_width = $(document).width();
      if ( width <= 1190 && new_width > 1190 || width > 1190 && new_width <= 1190 ) {
         appendToMobile(new_width);
      }
   });
   function showBlackBack() {
      let style_blackLayer = {
         display: "block",
         opacity: "1"
      };
      $('#black_back').css(style_blackLayer); // Появление заднего фона
   }
   function hideBlackBack() {
      $('#black_back').prop('style', '');  // Скрытие задника
   }
   
   appendToMobile(width);
   function appendToMobile( width ) {
      if ( width <= 1190 ) {
         $('.header__menu, .header__contact').appendTo('.header__menu_mobile .column.start');
         $('.header__social').appendTo('.header__menu_mobile .column.start');
         $('.header__main .burger__holder').show().on( 'click', showMobileMenu);
         
         if ( width <= 890 ) {
            $('.header__to-catalog.row_flex-10, .header__aside-icons').prependTo('.header__menu_mobile .column.start');
            $('.header__search').prependTo('.header__menu_mobile .column.start');
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
      
      if ( $('.header__menu_mobile').css('display') !== 'block' ) {
         $('.header__menu_mobile').slideDown(500);
         $('.header__main .burger__holder').addClass('close');
         hideCatalog();
         showBlackBack() // Появление заднего фона
      } else {
         hideMobileMenu();
      }
      $('#black_back').on('click', function (event) { // Скрытие меню при клике по заднику
         event.stopPropagation();
         hideMobileMenu()
      });
   }
   function hideMobileMenu() {
      $('.header__menu_mobile').slideUp(200);
      hideBlackBack();  // Скрытие задника
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
   const carousel_holder = $('.carousel__holder');
   if (carousel_holder.length > 0) {
      carousel_holder.slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 1500,
         arrows: false,
         dots: true,
         infinite: true,
         autoplay: true
      });
   }
   
   /* нажатие на disabled ссылки */
   $('a[disabled="disabled"], button[disabled="disabled"]').on( 'click', function(event) { event.preventDefault(); event.stopPropagation(); return false; });
   
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
   
   /* чекбокс и кнопка */
    if ( $('#request_form').length > 0 ) {
       checkboxChecked( '#request_form', '#request_checkbox', '#reguest_btn', '#request_name', '#request_mail');
    }
   
   function checkboxChecked( form, box, btn, input1, input2 ) {
       $(btn).prop('disabled', true);
      $(form).on('input', function() {
         $(btn).prop('disabled', ![
         $(input1).val().length !== 0,
         $(input2).val().length !== 0,
         $(box).prop('checked'),
      ].every(Boolean));
   })}
    
    /* placeholder */
  if ($('.sup').length > 0) {
     // $('input').val().length === 0 ? $('input').siblings('.sup').hide() : $('input').siblings('.sup').show();
     $('input').on( 'input', function() {
        let sup = $(this).siblings('.sup');
        $(this).val().length > 1 ? sup.hide() : sup.show()
     });
  }
   /* catalog */
   if ($('.header__to-catalog').length > 0) {
      let label = $('#catalog_trigger');
      label.on( 'click', showCatalog );
   }
   function showCatalog() {
      let height_header = $('.header__main').outerHeight(),
          height_aside =  $('aside.header__aside').outerHeight(),
          catalog_top;
      if ( width <= 890) {
         catalog_top = 0
      } else {
         catalog_top = height_header + height_aside + 10;
      }
      
      if ( $('#catalog').css('display') !== 'block' ) {
         $('#catalog').slideDown(500).offset({top: catalog_top});
         
         $('#catalog_trigger').addClass('open');
         hideMobileMenu();
         showBlackBack(); // Появление заднего фона
      } else {
         hideCatalog();
      }
      $('#black_back').on('click', function (event) { // Скрытие меню при клике по заднику
         event.stopPropagation();
         hideCatalog()
      });
   }
   function hideCatalog() {
      $('#catalog').slideUp(200);
      hideBlackBack();  // Скрытие задника
      $('#catalog_trigger').removeClass('open');
   }
   
   /* catalog inner */
    if ($('#catalog').length > 0) {
      $('.catalog__section .icon__angle').on( 'click', (event) => showCatalogArticles(event.target) )
   }
    function showCatalogArticles( target ) {
       let articles = $(target).closest('.catalog__section').find('.catalog__articles');
       // console.log(articles);
       if ( $(target).hasClass('open')) {
          articles.slideUp();
          $(target).removeClass('open')
       } else {
          articles.slideDown();
          $(target).addClass('open')
       }
    }
 });
