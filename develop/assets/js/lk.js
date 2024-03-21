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
   
 });
