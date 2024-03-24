$(document).ready(function () {
   'use strict';
   let width = $(document).width();
   const container_width = $('.container').width();
   
   $(window).resize(function() {
      if ($('.account_block__card').length > 0) {
         showCardImg();
      }
   });
   
   if ($('.account_block__card').length > 0) {
      showCardImg();
   }
   function showCardImg () {
      $('.account__card img').prop( 'src', '');
      
      let large = $('.account__card').data('large'),
          small = $('.account__card').data('small');
      if ( container_width > 770) {
         $('.account__card img').prop( 'src', large); }
      else {
         $('.account__card img').prop( 'src', small); }
   }
   
   
   /*  мобильное меню личный кабинет  */
   function showBlackBack() {
      let style_blackLayer = {
         display: "block",
         opacity: "1"
      };

      $('#black_back').css(style_blackLayer); // Появление заднего фона
      $('.address_obtaining__items').addClass('godown');
   }

   function hideBlackBack() {
      $('#black_back').prop('style', '');  // Скрытие задника
      $('#black_back').removeClass('up').removeClass('upup');
      $('.address_obtaining__items').removeClass('godown');
   }
   
   if ($('.personal_menu__mobile').length > 0) {
         let height_header = $('.header__main').outerHeight(),
          height_aside =  $('aside.header__aside').outerHeight(),
          catalog_top;
      
      if ( width <= 370) {
         catalog_top = 0
      } else if ( width <= 890) {
         catalog_top = height_header;
      } else {
         catalog_top = height_header + height_aside;
      }
      
      $('#personal_menu_mobile').css({top: catalog_top});
   }
   if ( width <= 1215 &&  $('#personal_menu_mobile').length > 0) {
      $('#open_login .icon__user, #open_menu').on( 'click', () => { showPersonalPanel() });
   }
   function showPersonalPanel() {
      $('#personal_menu_mobile').animate({ right: 0}, 250);
      showBlackBack();
      $('#personal_menu_mobile .ico__close, #black_back, .personal__out').on( 'click', () => { hidePersonalPanel() });
      
      // Закрытие по клавише Esc.
      $(document).keydown(function(event) {
         if (event.keyCode === 27) {
            event.stopPropagation();
            hidePersonalPanel();
         }
      });
   }
   function hidePersonalPanel() {
      $('#personal_menu_mobile').animate({ right: '-999px'}, 150, 'linear');
      hideBlackBack();
      hideMobileMenu();
   }
   function hideMobileMenu() {
      $('.header__menu_mobile').slideUp(200, () => {$('header').removeAttr( 'style');});
      hideBlackBack();  // Скрытие задника
      $('.header__main .burger__holder').removeClass('close');
   }
   if ($('.password').length > 0) {
      $('.password').on( 'click', '.ico__eye.no', (event) => { showPassword( event.target)});
   }
   function showPassword( target ) {
      let btn = $(target),
          password = btn.closest('.password').find('input');
      $(password).prop( 'type', 'text' );
      btn.removeClass('no').addClass('show');
      $('.password').on( 'click', '.ico__eye.show', (event) => { hidePassword( event.target)});
   }
   function hidePassword( target ) {
      let btn = $(target),
          password = btn.closest('.password').find('input');
      $(password).prop( 'type', 'password' );
      btn.removeClass('show').addClass('no');
   }
   
 });
