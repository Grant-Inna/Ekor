$(document).ready(function () {
   'use strict';
   const width = $(document).width();
   const container_width = $('.container').width();

   
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
      $('#black_back').removeClass('up')
   }
   
   appendToMobile(width);
   function appendToMobile( width ) {
      if ( width <= 1190 ) {
         $('.header__menu, .header__contact').appendTo('.header__menu_mobile .column.start');
         $('.header__social').appendTo('.header__menu_mobile .column.start');
         $('.header__main .burger__holder').show().on( 'click', showMobileMenu);
         
         if ( width <= 890 ) {
            $('.header__to-catalog.row_flex-10, .header__aside_icons').prependTo('.header__menu_mobile .column.start');
            $('.header__aside .header__search').prependTo('.header__menu_mobile .column.start');
            $('.header__aside').hide();
         } else {
            $('.header__to-catalog.row_flex-10, .header__search, .header__aside_icons').prependTo('.header__aside .wrapper');
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
   const carousel_holder = $('.carousel__holder'),
         variety_products = $('.variety_products__list'),
         choose_block = $('.choose__block_photo'),
         programs_carousel = $('.programs__carousel');
   
   if (carousel_holder.length > 0) {
      carousel_holder.slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 1200,
         lazyLoad: 'ondemand',
         arrows: true,
         dots: true,
         infinite: true,
         autoplay: true,
         focusOnSelect: true,
         pauseOnDotsHover: true
      });
      carousel_holder.css({ marginRight: '-5px', marginLeft: '-5px' });
      carousel_holder.find('.slick-slide').css('padding', '0 5px' )
   }

   // console.log($('.container_main').width());
   // console.log($('.variety_products__list').length > 0);
   if( container_width <= 486 && $('.variety_products__list').length > 0 ) {
      variety_products.slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 700,
         lazyLoad: 'ondemand',
         arrows: true,
         dots: false,
         autoplay: true,
         infinite: true,
         focusOnSelect: true
      });
      variety_products.css({ marginRight: '-5px', marginLeft: '-5px' });
      variety_products.find('.slick-slide').css('padding', '0 5px' )
   }
   if (container_width <= 590 && choose_block.length > 0) {
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
   if (programs_carousel.length > 0) {
         programs_carousel.slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 700,
         lazyLoad: 'ondemand',
         infinite: false,
         autoplay: true,
         arrows: true,
         dots: false
      });
      programs_carousel.css({ marginRight: '-5px', marginLeft: '-5px' });
      programs_carousel.find('.slick-slide').css('padding', '0 5px' )
   }
   
   /* нажатие на disabled ссылки или кнопки */
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
   if ($('#openModal_callme').length > 0) {
      checkboxChecked( '#callme_form', '#callme_checkbox', '#callme_btn', '#callme_name', '#callme_number');
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
     $('input').on( 'input, change', function() {
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
         // console.log($(this));
         $('.offer__info  .focus').not($(this)).removeClass('focus');
         $(this).addClass('focus');
      });
   }
   
   /* ГЛАВНАЯ  читать далее */
   $('.watch-more').slideUp(0);
   if ( container_width <= 475 && $('.reputation__tile').length > 0 ) {
      $('.watch-more').slideDown(0);
      $('.reputation__block-6, .reputation__block-7, .reputation__block-8').appendTo('.reputation__tile .reputation__more');
      $('.reputation__tile .watch-more').on( 'click', showMore);
   } else if ( container_width > 470 ) {
      $('.reputation__block-6, .reputation__block-7, .reputation__block-8').appendTo('.reputation__tile');
   }
   if ( container_width <= 475 && $('.cameras__row').length > 0 ) {
      $('.watch-more').slideDown(0);
      $('.cameras__row').appendTo('.cameras__wrapper .cameras__more');
      $('.cameras__wrapper .watch-more').on( 'click', showMore);
   } else if ( width > 470 ) {
      $('.cameras__row').appendTo('.cameras__wrapper');
   }
   
   function showMore() {
      let btn = $('.watch-more');
      $(btn).siblings('.more').slideDown(300);
      $(btn).slideUp(300)
   }
   
   /* ГЛАВНАЯ блок с рукой подписка whatsapp */
   if ( width > 470 && $('.subscribe__socials').length > 0) {
      $('label.subscribe__social-whatsapp').on( 'click', showTelInput);
      $('.subscribe__social-whatsapp a').on( 'click', false)
   } else if ( width <= 470) {
      $('.subscribe__social-whatsapp a').on( 'click', true)
   }
   function showTelInput() {
      let input = $('.subscribe__social-whatsapp input');
      $(input).fadeIn(200);
      $('.subscribe__social-whatsapp span').fadeOut(100)
   }
   
   /* ГЛОБАЛЬНОЕ ввод номера при наведении на вотсап */
   if ($('.header__input input').length > 0) {
      $('.social__icon-whatsapp').hover( showHeaderInput)
   }
   function showHeaderInput() {
      $('.input_number-holder').toggleClass('show')
   }
   /* ГЛОБАЛЬНЫЙ ввод номера по маске */
   if ($('input[type="tel"]')) {
      $('input[type="tel"]').on( 'input', function() {
         $.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]";
         $(this).mask("+7 (h99) 999-99-99");
     });
   }
  
   /* ГЛОБАЛЬНЫЙ открытие модального окна */
   if ($('.openModal_callme')) {
      $('.openModal_callme').on( 'click', (event) => openModal(event.target));
   }
   function openModal( target ) {
      // console.log(target);
      let click = $(target).data( 'modal');
      $('#openModal_' + click).removeAttr( 'style').addClass('show');
      $('#black_back').addClass('up').fadeIn();
      $('.header__menu_mobile').slideUp(300);
      $('.header__main .burger__holder').removeClass('close');
      
            // Клик по ссылке "Закрыть".
      $('.modal__close').on( 'click', function() {
         $(this).parents('.modal').fadeOut();
         hideMobileMenu();
         $('div[id^="openModal_"]').removeClass('show');
      });

      // Закрытие по клавише Esc.
      $(document).keydown(function(event) {
         if (event.keyCode === 27) {
            event.stopPropagation();
            hideMobileMenu();
            hideModal();
         }
      });

      // Клик по фону, но не по окну.
      $('#black_back').on( 'click', function(event) {
         // // event.stopPropagation();
         // console.log(event.target);
         // if (event.target !== $('#openModal_' + click)) {
         //    console.log('сама модалка');
         //    return false
         // }
         hideMobileMenu();
         hideModal()
      });
      
      $('#openModal_' + click).find('button').on( 'click', function(event) {
         event.stopPropagation();
         hideMobileMenu();
         hideModal();
      });
   }
   function hideModal() {
      $('.modal').fadeOut();
      $('div[id^="openModal_"]').removeClass('show');
   }
  
 });
