$(document).ready(function () {
   'use strict';
   const width = $(document).width();
   const container_width = $('.container').width();

   
   /* полоса прокрутки */
   
   if ($('.container').length > 0 ) {
      $('.scrollbar-inner').scrollbar();
   }
   
   

   /* мобильное меню */
   appendToMobile(width);
   $(window).resize(function() {
      let new_width = $(document).width();
      if ( width <= 1190 && new_width > 1190 || width > 1190 && new_width <= 1190 ) {
         appendToMobile(new_width);
      }
      if ($('.absolute-img').length > 0) {
         dataImage('.carousel__item.slick-slide[id^="slick-slide"]', '.carousel__item-', '890', '590');
         dataImage('.busareas__block', '.busareas_image-', '890', '590');
         dataImage('.variety_products__block-rectangle', '.image__', '970', '485');
         dataImage('.variety_products__block-square', '.square__', '890', '485');
         dataImage('.delivery_index__image', '.delivery_index__img-', '890', '590');
         dataImage('.cover__holder', '.cover_holder-', '1190', '660');
         dataImage('.request__holder', '.request__image-', '890', '590');
         dataImage('.request__holder', '.request__image-', '590', '370');
      }
   });
   
   function showBlackBack() {
      let style_blackLayer = {
         display: "block",
         opacity: "1"
      };
      $('#black_back').css(style_blackLayer); // Появление заднего фона
   }
   function showBlackBackUP() {
      showBlackBack(); // Появление заднего фона
      $('#black_back').addClass('up');
   }
   function hideBlackBack() {
      $('#black_back').prop('style', '');  // Скрытие задника
      $('#black_back').removeClass('up')
   }
   
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
         programs_carousel = $('.programs__carousel'),
         cameras_carousel = $('.contact_cameras__row');
   
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
   // console.log( width <= 1150);
   
   
   /* нажатие на disabled ссылки или кнопки */
   $('a[disabled="disabled"], button[disabled="disabled"]').on( 'click', function(event) { event.preventDefault(); event.stopPropagation(); return false; });
   
   /* размер картинок через data */
   if ($('.absolute-img').length > 0) {
      dataImage('.carousel__item.slick-slide[id^="slick-slide"]', '.carousel__item-', '890', '590');
      dataImage('.busareas__block', '.busareas_image-', '890', '590');
      dataImage('.variety_products__block-rectangle', '.image__', '970', '485');
      dataImage('.variety_products__block-square', '.square__', '890', '485');
      dataImage('.delivery_index__image', '.delivery_index__img-', '890', '590');
      dataImage('.cover__holder', '.cover_holder-', '1190', '660');
      dataImage('.request__holder', '.request__image-', '890', '590');
      dataImage('.request__holder', '.request__image-', '590', '370');
      dataImage('.production__block', '.production_caption__img-', '1440', '768');
   }
   function dataImage( parent, item, media1, media2 ) {
      // console.log(item);
      $.each($(parent), function(index, v) {
         let $img = '.absolute-img';
         let i = index + 1;
         let large = $(item + i).find($img).data('large'),
             middle = $(item + i).find($img).data('middle'),
             small = $(item + i).find($img).data('small');
         let div = $(parent).find(item + i).find($img);
         if ( width >= media1 ) {
            div.css({"background-image": "url(" + large + ")"});
         }
         else if ( width >= media2) {
            div.css({"background-image": "url(" + middle + ")"});
         }
         else {
            div.css({"background-image": "url(" + small + ")"});
         }
      });
   }
   
   
   /* полоса прокрутки */
   
   if ($('#container_main').length > 0 || $('#container_catalog').length > 0 ) {
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
  
   /* catalog каталог */
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
        $(document).keydown(function(event) {
         if (event.keyCode === 27) {
            event.stopPropagation();
            hideCatalog();
         }
      });

   }
   function hideCatalog() {
      $('#catalog').slideUp(200);
      hideBlackBack();  // Скрытие задника
      $('#catalog_trigger').removeClass('open');
   }
   
   /* catalog inner */
       if (($('.scrollbar-inner').length > 0 && width > 970) || $('.catalog_main__container').length > 0) {
      $('.catalog__section .catalog__section_caption').on( 'click', (event) => showCatalogArticles(event.target));
      
       if ($('.catalog_main__container').length > 0) {
          $('.catalog__section.open').find('.catalog__articles').css( 'display', 'block');
       }
   }
    function showCatalogArticles( target ) {
       let $articles = $(target).closest('.catalog__section').find('.catalog__articles'),
           $icon =  $(target).closest('.catalog__section').find('.icon__angle');
       
       if ( $icon.hasClass('open')) {
          $articles.slideUp(200);
          $icon.removeClass('open');
          $(target).closest('.catalog__section').addClass('open');
          
       } else {
          $('.catalog__section.open').removeClass('open');
          
          if ($('.catalog_main__container').length > 0) {
             $('.catalog__articles').slideUp(200);
             // $articles.slideDown(300).css( 'display', 'flex');
             $articles.slideDown(300);
             $('.icon__angle.open').not($icon).removeClass('open');
             $icon.addClass('open');
          } else {
             $articles.slideDown(300).css( 'display', 'flex');
             $icon.addClass('open');
          }
       }
    }
       
       /* catalog на мобилках */
   
   if ($('#catalog').length > 0 && width <= 970 ) {
      let $section_caption = $('#catalog .catalog__section_caption');
      $section_caption.on( 'click', (event) => { showArticlesList(event.target)});
      
      $('.icon__close.cat').on( 'click', hideCatalog);
   }
   function showArticlesList( section_caption ) {
      let section = $(section_caption).closest('.catalog__section');
      let caption = $(section_caption).closest('.catalog__section_caption');
      let $id = caption.data( 'article');
      let current_article = $('#' + $id);
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
      $('.catalog__section_caption').show();
      $('.icon__angle.cat').addClass('dis');
      $('.catalog__articles').hide();
      $('.catalog__holder').removeClass('open');
   }
   
   /*  ГЛАВНАЯ предложение  */
   if ($('.offer__container').length > 0) {
      $('.offer__info .offer__label:first-child').addClass('focus');
      $('.offer__info .offer__label').on( 'click', function() {
      $('.offer__info  .focus').not($(this)).removeClass('focus');
      $(this).addClass('focus');
      });
   }
   
   /* ГЛАВНАЯ  читать далее */
   $('.watch-more').slideUp(0);
   if ( container_width <= 470 && $('.reputation__tile').length > 0 ) {
      $('.watch-more').css( 'display', 'flex');
      $('.reputation__block-6, .reputation__block-7, .reputation__block-8').appendTo('.reputation__tile .reputation__more');
      $('.reputation__tile .watch-more').on( 'click', showMore);
   } else if ( container_width > 470 ) {
      $('.reputation__block-6, .reputation__block-7, .reputation__block-8').appendTo('.reputation__tile');
   }
   if ( container_width <= 470 && $('.cameras__row').length > 0 ) {
      $('.watch-more').slideDown(0);
      $('.cameras__row').appendTo('.cameras__wrapper .cameras__more');
      $('.cameras__wrapper .watch-more').on( 'click', showMore);
   } else if ( width > 470 ) {
      $('.cameras__row').appendTo('.cameras__wrapper');
   }
   if ( container_width <= 470 && $('.contact_cameras__row').length > 0 ) {
      $('.watch-more').slideDown(0);
      $('.contact_cameras__row').appendTo('.cameras__wrapper .cameras__more');
      $('.cameras__wrapper .watch-more').on( 'click', showMore);
   } else if ( width > 470 ) {
      $('.contact_cameras__row').appendTo('.cameras__wrapper');
   }
   
   function showMore() {
      let btn = $('.watch-more');
      $(btn).siblings('.more').slideDown(300);
      $(btn).slideUp(300)
   }
   
   /* ГЛАВНАЯ блок с рукой подписка whatsapp */
   
   if ( width > 470 && $('.subscribe__socials').length > 0) {
      $('label.subscribe__social-whatsapp').on( 'click', showTelInput);
      $('.subscribe__social-whatsapp a').on( 'click', () => false)
   } else if ( width <= 470) {
      $('.subscribe__social-whatsapp a').on( 'click', () => true)
   }
   function showTelInput() {
      let input = $('.subscribe__social-whatsapp input');
      input.fadeIn(200);
      $('.subscribe__social-whatsapp span').fadeOut(100)
   }
   
   /* ГЛОБАЛЬНОЕ ввод номера при наведении на вотсап */
   if ($('.header__input input').length > 0) {
      $('.social__icon-whatsapp').hover( showHeaderInput);
      $('.social__icon-whatsapp').on( 'click', showHeaderInput);
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
  
   /* ГЛОБАЛЬНЫЙ открытие модального окна popup ввод номера */
   if ($('.openModal_callme').length > 0) {
      $('.openModal_callme').on( 'click', (event) => openModal(event.target));
   }
   function openModal( target ) {
      let click = $(target).data( 'modal');
      $('#openModal_' + click).removeAttr( 'style').addClass('show');
      showBlackBackUP();
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
      $('#black_back').on( 'click', function() {
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
    
    /* CATALOG фильтры на странице каталога  */
   if ($('.catalog_main__title').length > 0) {
      $('.catalog_main__title').on( 'click', showFiltersList);
      $('.catalog_main__title_14').on( 'click', (event) => {showFilters(event.target)});
      $('.catalog_main__buttons').hide();
   }
   function showFiltersList() {
      $('.catalog_main__title').toggleClass('open');
      if ($('.catalog_main__buttons').css( 'display') == 'flex') {
            $('.catalog_main__buttons').hide();
            $('.catalog_main__title + .catalog_main__list_holder').slideToggle(200);
      } else {
         $('.catalog_main__title + .catalog_main__list_holder').slideToggle(200, function () {
            $('.catalog_main__buttons').css( 'display', 'flex');
         });
      }
      
   }
   
   function showFilters( trigger ) {
      let parent = $(trigger).closest('.catalog_main__title_14');
      parent.find('.icon__angle').toggleClass('open');
      parent.next('.catalog_main__list').slideToggle(200);
   }
   
      /* фильтры разблокировать кнопку "применить"*/
   if ($('#catalog_filters_submit').length > 0 ) {
      $('.catalog_main__item').find('input').on( 'input', unlockButtonSubmit);
      $('#catalog_filters_reset').on( 'click', resetFormButton);
      
      $('.filters_mobile__content').on( 'click', (event) => {
         let current = event.target;
         if ($(current).hasClass('checkbox-hidden')) {
            unlockButtonSubmit();
         }
      });
      $('.filters_mobile__footer').on( 'click', (event) => {
         let current = event.target;
         if ($(current).prop('id') === 'catalog_filters_reset') {
            resetFormButton();
         }
      });
   }
   
   
   function unlockButton() {
      let btn = $('#catalog_filters_submit, .filters_mobile__footer #catalog_filters_submit');
      $(btn).prop('disabled', false);
   }
   function unlockButtonSubmit() {
      let btn = $('#catalog_filters_submit, .filters_mobile__footer #catalog_filters_submit');
      let box = $('.catalog_main__item').find('input');
      $(btn).prop('disabled', ![
         $(box).is(':checked'),
      ].every(Boolean));
   }
   function resetFormButton() {
      let btn = $('#catalog_filters_submit, .filters_mobile__footer #catalog_filters_submit');
      let box = $('.catalog_main__item, .filters_mobile__content').find('input');
       $(box).prop('checked', false);
       $(btn).prop('disabled', true);
       $('.cm__tag').remove();
       $('.catalog__link.chosen').removeClass('chosen')
   }
   
   /* CATALOG один продукт */
   if ($('.product__options').length > 0) {
      $('.product__options_btn').on( 'click', (event) => showProductOption(event.target));
      $('.product__text').text($('.product__box').data('text'));
      $('.product__weight .weight').text($('.product__box').data('weight'));
      $('.product__buy .price span').text($('.product__box').data('price'));
      width <= 660 ? $('.product__buy .price-kg').text('') : $('.product__buy .price-kg span').text($('.product__scale').data('price'));
   }
  function showProductOption( current ) {
      let btn = $(current).closest('.product__options_btn');
      let text = $(current).closest('.product__options_btn').data('text'),
          weight = $(current).closest('.product__options_btn').data('weight'),
          holder = $(current).closest('.product__options').find('.product__text'),
          amount = $(current).closest('.catalog_main__products').find('.product__weight .weight'),
          price = $(current).closest('.product__options_btn').data('price'),
          buy = $(current).closest('.catalog_main__products').find('.product__price .price span');
      
      holder.text('');
      buy.text('');
      holder.text(text);
      $(current).closest('.product__options').find('.product__options_btn').addClass('opacity');
      $(btn).removeClass('opacity');
      amount.text(weight);
      buy.text(price);
  }
   
   /* CATALOG like лайк избранное */
   if ($('.product__options').length > 0) {
      $('.icon__like').on( 'click', (event) => likeThisProduct( event.target));
   }
   function likeThisProduct( current) {
      $(current).toggleClass('like')
   }
   
   /* CATALOG фильтры на мобилке по кнопке */
   if ($('#show_filters').is(':visible')) {
      $('#show_filters').on( 'click', showMobileFilters);
      $('.catalog_main__container .catalog__block.catalog__block-aside .catalog__section, .catalog_main__title, .catalog_main__list_holder').appendTo('.filters_mobile__container .filters_mobile__content .filters_mobile__holder')
   }
   function showMobileFilters() {
      showBlackBackUP();
      $('#black_back, .icon__close.fil, #catalog_filters_submit').on( 'click', hideMobileFilters);
   
      $(document).keydown(function(event) { // закрытие при клике на esk (вдруг чудик какой на компе будет сидеть)
         if (event.keyCode === 27) {
            event.stopPropagation();
            hideMobileFilters();
         }
      });
      
      $('#filters_mobile_panel').animate({ right: '-1px'}, 250);
      // console.log('Есть')
   }
   function hideMobileFilters() {
      $('#filters_mobile_panel').animate({ right: '-550px'}, 150, 'linear');
      hideBlackBack();
   }
   
   /*  tag фильтр производство  */
   if ($('.catalog_main__tags').length > 0) {
      $('.catalog_main__tags').on( 'click', '.ico__del', (event) => { delTag(event.target)});
      $('.catalog__link').on( 'click', (event) => { showTag(event.target)});
      $('.catalog_input.input-type-checkbox').on( 'click', (event) => { showTagCheckboxFilter(event.target)});
      $('.catalog_input.input-type-radio').on( 'click', (event) => { showTagRadioFilter(event.target)});
   }
   function showTag ( element ) {
      let text = $(element).text();
      
      if (!$(element).hasClass('chosen')) {
         $(element).addClass('chosen');
         let newTag = '<div class="cm__tag"><div class="ico__del"></div></div>',
            icon = '<div class="ico__del"></div>';
         $(newTag).prependTo('.catalog_main__tags').data('tag', text).text(text).append($(icon));
         unlockButton();
      }
   }
   function showTagCheckboxFilter ( input ) {
      let text = $(input).text(),
          id = $(input).data( 'id');
      let checked = $(input).closest('label').find('input');

      if (!$(checked).is(':checked')) {
         let newTag = '<div class="cm__tag"><div class="ico__del"></div></div>',
             icon = '<div class="ico__del"></div>';
         $(newTag).addClass(id).prependTo('.catalog_main__tags').text(text).append($(icon));
         unlockButtonSubmit();
      } else {
         $('.catalog_main__tags').find('.' + id).remove()
      }
   }
   function showTagRadioFilter ( input ) {
      let text = $(input).text(),
          id = $(input).data( 'id');
      let checked = $(input).closest('label').find('input');
      $('.catalog_main__tags').find('.radio--' + id).remove();
      if (!$(checked).is(':checked')) {
         let newTag = '<div class="cm__tag"><div class="ico__del"></div></div>',
             icon = '<div class="ico__del"></div>';
         $(newTag).addClass('radio--' + id).prependTo('.catalog_main__tags').text(text).append($(icon));
      }
   }
   
   function delTag ( btn ) {
      let tag = $(btn).closest('.cm__tag');
      tag.remove();
      $('.catalog__link.chosen').removeClass('chosen')
   }
   
   /*  CONTACT контакты карта из data  */
   if ($('.contacts_map__container').length > 0) {
      $('.contacts_map__block').on( 'click', (event) => showMapLink(event.target))
   }
   function showMapLink ( target ) {
      let $target = $(target);
      let current = $(target).closest('.contacts_map__block'),
          link = $(current).data( 'link');
      
      if (!$(current).hasClass('show')) {
         $('.contacts_map__block.show').removeClass('show');
         $(current).addClass('show');
         showMapImage( $target );
      }
      $('.contacts_map___link').attr( 'href', link);
   }
   function showMapImage ( target ) {
      let current = $(target).closest('.contacts_map__block'),
          large = $(current).data( 'large'),
          small = $(current).data( 'small'),
          map = $('.contacts_map__img');
      
      if ( width >= 660 ) {
         $(map).attr( 'src', large);
      }
      else if ( width < 660) {
         $(map).attr( 'src', small);
      }
      console.log($(map).attr( 'src'));
   }
   
   /*  оплата  */
   if ($('.payment__container').length > 0) {
      $('.payment__label').on( 'click', (event) => showPaymentInfo( event.target));
   }
   function showPaymentInfo( current ) {
      let id = $(current).closest('.payment__label').prop( 'id'),
          elem = $(current).closest('.payment__label');
      $('.payment__label').not(elem).removeClass('chosen');
      $(elem).addClass('chosen');
      console.log(id);
   }
   
   
 });
