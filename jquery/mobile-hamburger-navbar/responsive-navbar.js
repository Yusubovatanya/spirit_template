$(document).ready(() => {

        $('#mobile-menu').on('click', () => {
          let $navUl = $('.nav-ul');
          let $mobileMenu = $('#mobile-menu');
          $('.nav-ul').addClass().slideToggle('slow');
        });

        $(window).bind("resize", () => {
          if ($(window).width() > 768) {
            $('.nav-ul').removeAttr("style");

          }
        })
      });

      $(window).load(()=> {
        if ($(window).width() <= 768) {
          console.log('hello');
          $('.nav-ul li').css({
            display: "inline-block"
          })
          $('.nav-ul').css({
            width: '150px',
            textAlign: 'right'
          });
          $('#mobile-menu').removeClass('flex')
          $('.navigation li').css({
            marginRight: "0"
          })
        }
      })