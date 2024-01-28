$(document).ready(function () {
   'use strict';
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
         },
      minimumResultsForSearch: Infinity
      });
   
  /* каруселька крутилка */
   const carousel_holder = $('.carousel__holder');
   const variety_products = $('.variety_products__list');
   const choose_block = $('.choose__block_photo');
   
   if (carousel_holder.length > 0) {
      carousel_holder.slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 1500,
         lazyLoad: 'ondemand',
         arrows: false,
         dots: true,
         infinite: true,
         autoplay: true,
         focusOnSelect: true,
        adaptiveHeight: true,
         pauseOnHover: true
      });
      carousel_holder.css({ marginRight: '-5px', marginLeft: '-5px' });
      carousel_holder.find('.slick-slide').css('padding', '0 5px' )
   }
   // console.log(width <= 450);
   // console.log($('.variety_products').length);
   if( width <= 485 && $('.variety_products').length > 0 ) {
      variety_products.slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 500,
         lazyLoad: 'ondemand',
         arrows: true,
         dots: false,
         infinite: true,
         autoplay: true,
         focusOnSelect: true
      });
      variety_products.css({ marginRight: '-5px', marginLeft: '-5px' });
      variety_products.find('.slick-slide').css('padding', '0 5px' )
   }
   if (width <= 590 && choose_block.length > 0) {
       choose_block.slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 700,
         lazyLoad: 'ondemand',
          infinite: false,
         arrows: true,
         dots: false,
         focusOnSelect: true
      });
      choose_block.css({ marginRight: '-5px', marginLeft: '-5px' });
      choose_block.find('.slick-slide').css('padding', '0 5px' )
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
   if ( $('.offer__contact').length > 0 ) {
       checkboxChecked( '#offer_form', '#offer_checkbox', '#offer_btn', '#offer_name', '#offer_mail');
    }
   
   function checkboxChecked( form, box, btn, input1, input2 ) {
      $(form).on( 'focus', function() {$(btn).prop('disabled', true)});
      $(form).on( 'input', function() {
         $(btn).prop('disabled', ![
         $(input1).val().length !== 0,
         $(input2).val().length !== 0,
         $(box).prop('checked'),
         ].every(Boolean));
      });
    }
    
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
         catalog_top = height_header + height_aside  + 10;
      }
      
      if ( $('#catalog').css('display') !== 'block' ) {
         $('#catalog').slideDown(500).offset({top: catalog_top});
         // $('#catalog').animate({ top: catalog_top }, 200);
         
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
    if ($('.scrollbar-inner').length > 0 && width > 970) {
      $('.catalog__section .catalog__section-caption').on( 'click', (event) => showCatalogArticles(event.target) )
   }
    function showCatalogArticles( target ) {
       let $articles = $(target).closest('.catalog__section').find('.catalog__articles'),
           $icon =  $(target).closest('.catalog__section').find('.icon__angle');
       if ( $icon.hasClass('open')) {
          $articles.slideUp(100);
          $icon.removeClass('open')
          
       } else {
          // $('.catalog__articles').slideUp(100);
          $articles.slideDown(300).css( 'display', 'flex');
          $icon.addClass('open')
       }
    }
    
    /* catalog на мобилках */
   
   // при нажатии на section эта страница должна пропадать и появляться блок со списком article
   // нужно при нажатии передовать инфу, чтобы открылось именно нужное
   
   if ($('#catalog').length > 0 && width <= 970 ) {
      let $section_caption = $('.catalog__section-caption');
      $section_caption.on( 'click', (event) => { showArticlesList(event.target)});
      
      $('.icon__close.cat').on( 'click', hideCatalog);
   }
   function showArticlesList( section_caption ) {
      let section = $(section_caption).closest('.catalog__section');
      let caption = $(section_caption).closest('.catalog__section-caption');
      let $id = caption.data( 'article');
      let current_article = $('#' + $id);
      console.log($id);
      console.log(current_article);
      let $back = $('.icon__angle.cat');
      
      if ($back.is(':visible')) {
         $('.catalog__holder').addClass('open')
      }
      
      $('.catalog__section').not(section).hide();
      $(current_article).show();
      $(caption).hide();
      
      $back.removeClass('dis');
      $back.on( 'click', hideArticlesList);
      
   }
   function hideArticlesList() {
      $('.catalog__section').show();
      $('.catalog__section-caption').show();
      $('.icon__angle.cat').addClass('dis');
      $('.catalog__articles').hide();
      $('.catalog__holder').removeClass('open');
      console.log();
   }
   
   /*  ГЛАВНАЯ предложение  */
   if ($('.offer__container').length > 0) {
      $('.offer__info .offer__label:first-child').addClass('focus');
      $('.offer__info .offer__label').on( 'click', function() {
         console.log($(this));
         $('.offer__info  .focus').not($(this)).removeClass('focus');
         $(this).addClass('focus');
      });
   }
   
   /* ГЛАВНАЯ  читать далее */
   $('.watch-more').slideUp(0);
   if ( width <= 475 && $('.reputation__tile').length > 0 ) {
      $('.watch-more').slideDown(0);
      $('.reputation__block-6, .reputation__block-7, .reputation__block-8').appendTo('.reputation__tile .reputation__more');
      $('.reputation__tile .watch-more').on( 'click', showMore);
   } else if ( width > 470 ) {
      $('.reputation__block-6, .reputation__block-7, .reputation__block-8').appendTo('.reputation__tile');
   }
   function showMore() {
      let btn = $('.watch-more');
      $(btn).siblings('.more').slideDown(300);
      $(btn).slideUp(300)
   }
   
 });
