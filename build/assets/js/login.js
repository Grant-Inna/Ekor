$(document).ready(function () {
   'use strict';
   let width = $(document).width();
   const container_width = $('.container').width();
   
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
      $('.address_obtaining__items').addClass('godown');
   }
   function hideBlackBack() {
      $('#black_back').prop('style', '');  // Скрытие задника
      $('#black_back').removeClass('up');
      $('.address_obtaining__items').removeClass('godown');
   }
   
   if ($('.login__container').length > 0) {
      $('.login__container button').on( 'click', (event) => { event.preventDefault()});
      $('#open_login').on( 'click', () => {
         // $('#openModal_login').fadeIn().css( 'right', '0');
         // $('#openModal_register').fadeIn().css( 'right', '0');
         // $('#openModal_recover').fadeIn().css( 'right', '0');
         // $('#openModal_reset').fadeIn().css( 'right', '0');
         $('#openModal_welcome').fadeIn().css( 'right', '0');
         showBlackBackUP();
         
         $('.header__menu_mobile').slideUp(200, () => {$('header').removeAttr( 'style');});
         $('.header__main .burger__holder').removeClass('close');
      });
      $('.icon__login_close, #black_back').on( 'click', () => {
         $('#openModal_login').fadeOut().css( 'right', '-1000px');
         $('#openModal_register').fadeOut().css( 'right', '-1000px');
         $('#openModal_recover').fadeOut().css( 'right', '-1000px');
         $('#openModal_reset').fadeOut().css( 'right', '-1000px');
         $('#openModal_welcome').fadeOut().css( 'right', '-1000px');
         hideBlackBack();
      });
      $('.register_entities__button').on( 'click', (event) => { showRegisterEntities(event.target) });
      $('#login_recet').on( 'click', () => {
         $('#openModal_recover').fadeIn().css( 'right', '0');
         $('#openModal_login').fadeOut().css( 'right', '-1000px');
      });
      $('#openModal_return_login, #reset_gomail_button').on( 'click', () => {
         $('#openModal_login').fadeIn().css( 'right', '0');
         $('#openModal_recover').fadeOut().css( 'right', '-1000px');
         $('#openModal_reset').fadeOut().css( 'right', '-1000px');
      });
      $('#recover_button').on( 'click', () => {
         $('#recover_pass').hide();
         $('#recover_gomail').show();
      });
      $('#reset_password_button').on( 'click', () => {
         $('#reset_password').hide();
         $('#reset_done').show();
      });
      
      $('.password').on( 'click', '.ico__eye.no', (event) => { showPassword( event.target)});
      $('#reset_repass').on( 'keyup', () => {
         let pass = $('#reset_pass').val(),
             pass_rep = $('#reset_repass').val();
         if (pass !== pass_rep) {
             $("#reset_repass").css('border-color', '#F10B34');
             $('#reset_password_button').prop( 'disabled', 'true')
         } else {
            $('#reset_password_button').removeAttr( 'disabled');
            $("#reset_repass").css('border-color', '#DDE1E6');
         }
      });
   }
   function showRegisterEntities( target ) {
       let click = $(target).data( 'register');
       $('.register_entities__button').not($(target)).removeClass('active');
       $(target).addClass('active');
       $('form[id^="register_form_"]').not($('#register_form_' + click)).hide();
       $('#register_form_' + click).css( 'display', 'flex');
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
   
   /* select */
   
   $('.select-register').select2({ //
      "language": {
            "noResults": function () {
               return "Результаты не найдены";
            }
         },
      minimumResultsForSearch: Infinity,
      dropdownParent: $('#register_form_yr')
   });
   
 });
