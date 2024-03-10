$(document).ready(function () {
   'use strict';
   let width = $(document).width();
   const container_width = $('.container').width();
   
   $(window).resize(() => {
      let new_width = $(document).width();
      width = new_width;
      return width
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
      $('.address_obtaining__items').addClass('godown');
   }
   function hideBlackBack() {
      $('#black_back').prop('style', '');  // Скрытие задника
      $('#black_back').removeClass('up');
      $('.address_obtaining__items').removeClass('godown');
   }
   
   
   
   
   /*  lk/basket корзина - активация блока  */
   if ($('.basket_order__wrapper').length > 0) {
      $('.basket_order__wrapper .section_holder').not($('.section_holder.show')).hide();
      $('button[data-next]').on( 'click', (event) => showNextBasketSection($(event.target).data('next')));
   }
   
   function showNextBasketSection(next) {
      $('#basket_wrapper').hide();
      let prev = next - 1,
         stepBtn = '.basket_order__step',
         stepFather = '.basket_order__wrapper .section_holder';
      
      $(stepBtn + '[data-id^=' + next + ']').addClass('progress');
      $(stepBtn + '[data-id^=' + next + ']').addClass('click');
      $(stepFather + '[data-section^=' + next + ']').not($('.section_holder.show')).css('display', 'grid').addClass('show');
      $(stepFather + '[data-section^=' + prev + ']').removeClass('show').removeAttr('style');
      $('body,html').animate({scrollTop: ($('.basket__caption_top').offset().top)}, 300);
      
      if ( next ==  $(stepBtn).length) { // console.log(next ==  $(stepBtn).length);
         $('.basket_order__step').removeClass('click').css('cursor', 'default');
         $(stepFather + '[data-section^=' + next + ']').addClass('last');
         return false;
      } else {
         $('.basket_order__steps').on('click', '.click', (event) => showPrevBasketSection($(event.target).closest('.basket_order__step').data('id')))
      }
   }
   function showPrevBasketSection(id) {
      $('.basket_order__step[data-id^=' + id + ']').next('.basket_order__step').removeClass('click');
      $('.section_holder.show').removeClass('show').removeAttr('style');
      $('.basket_order__wrapper .section_holder[data-section^=' + id + ']').css('display', 'grid').addClass('show');
      if (id == '1') {
         $('#basket_wrapper').show(); // на первом экране корзины показываем просмотренные недавно позиции
      }
   }
   
   /*  чекбоксы на странице корзины  */
   if ($('.basket_order__wrapper').length > 0) {
      $('#basket_all_checkbox').on( 'change', () => {
         $('.one').prop( 'checked', $('#basket_all_checkbox').is(':checked'));
      });
      $('.one').on( 'click', () => {
         let allChecked = ($('.one').is(':checked').length) === $('.one').length;
         $('#basket_all_checkbox').prop( 'checked', allChecked);
      });
      
      $.each( $('.basket_product__checkbox'), (index, value) => {
         $(value).find('label').prop( 'for', 'basket_checkbox-' + index);
         $(value).find('input').prop( 'id', 'basket_checkbox-' + index)
      })
   }
   
   /*  контактные данные доставка lk  */
   if ($('#basket_order_form').length > 0) {
      $('#basket_order_form').on( 'change', () => {
            // let line = $('#basket_tel').val().replace(/\D/g, '').slice(1);   для форматирования передоваемых данных
            // finish = 8 + line;  добавляем первой 8 - ку
       
         if (($('#order_name').val().length !== 0) && ($('#order_tel').val().replace(/\D/g, '').slice(1).length > 9)) {
            $('#basket_order_button').removeAttr( 'disabled');
         }
      });
      $('#basket_order_button').on( 'click', () => {
         $('#basket_order_button').hide();
         $('#basket_order_code').css( 'display', 'grid');
      });
      
      $('#basket_order_code').on( 'change', () => {
         if (($('#order_code').val().length !== 0)) {
            $('#order_code_button').removeAttr( 'disabled');
         }
      });
   }
   
   /*  страница доставки в lk  */
   if ($('.basket_address__obtaining').length > 0) {
      $('.basket_address__obtaining').on( 'click', '.address_obtaining__button.hidden', (event) => showObtainingMethod(event.target));
   }
   function showObtainingMethod(target) {
      let num = $(target).data('obtaining'),
          panel = $('#obtaining_' + num);
      $('.address_obtaining__button').not(target).removeClass('chosen').addClass('hidden');
      $(target).removeClass('hidden').addClass('chosen');
      $('.address_obtaining__holder').not(panel).hide();
      $(panel).show();
      num == '1' ? $('#obtaining_data').show() : $('#obtaining_data').hide();
   }
   
   /*  страница доставки в lk  появление всплывашки */
   if ($('.address_obtaining__point').length > 0) {
      $('.ico__options').on( 'click', (event) => showObtainingOptionsPanel(event.target));
   }
   function showObtainingOptionsPanel( target ) {
      let num = $(target).closest('.address_obtaining__point').data('obtaining-point'),
          current = $('#obtaining_point-' + num);
      $('.point_options__popup').not(current).fadeOut(200);
      $(current).fadeIn(200);
      if (width <= 470) {
         $(current).addClass('popup');
         // $(current).closest('.address_obtaining__items').addClass('godown');
         showBlackBackUP();
         $(current).find('.line_gray').on( 'click', () => {
            $(current).removeClass('popup').fadeOut();
            // $(current).closest('.address_obtaining__items').removeClass('godown');
            hideBlackBack();
         });
         $('.address_popup__button').on( 'click', (e) => {
            e.preventDefault();
            $(current).removeClass('popup').fadeOut();
            // $(current).closest('.address_obtaining__items').removeClass('godown');
            hideBlackBack();
         });
         $('#black_back').on( 'click', () => {
            $(current).removeClass('popup').fadeOut();
            // $(current).closest('.address_obtaining__items').removeClass('godown');
            hideBlackBack();
         })
      } else {
         $(document).on( 'click', (event) => {
            if ($(event.target).closest('.address_obtaining__point').data('obtaining-point') === $(current).closest('.address_obtaining__point').data('obtaining-point')) {
               $(current).fadeIn(200);
            } else {
               $(current).fadeOut(200);
               hideBlackBack()
            }
            event.stopPropagation();
      
         });
      }
      $(document).keydown((event) => { // закрытие при клике на esk
         if (event.keyCode === 27) {
            event.stopPropagation();
            $(current).fadeOut(200);
            hideBlackBack();
         }
      });
   }
  
   /*  страница доставки в lk z-index у родителя всплывашки */
   if ($('.address_obtaining__point').length > 0) {
      $('.address_obtaining__point').each((index, element) => {
         let z = 1800 - index;
         $(element).css( 'z-index', z);
      });
   }
   
   /*  появление всплывашки со временем до повторной отправки  */
   if ($('#order_code_again').css( 'display') == 'flex') {
      $('#order_code_again').on( 'click', () => {
         $('.send_again__popup').fadeIn(200, () => {
            $(document).on( 'click', (event) => {
                event.stopPropagation();
               if ((event.target).closest('#order_code_again')) {
                   return
               }
               $('.send_again__popup').fadeOut(200);
            });
            $(document).keydown((event) => { // закрытие при клике на esk
               if (event.keyCode === 27) {
                  event.stopPropagation();
                  $('.send_again__popup').fadeOut(200);
               }
            });
         });
      });
   }

 });
