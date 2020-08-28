/* Scroll NavBar Change Color */
  $(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 700);
  });

/* sweet alert */
    function sweetalertclick() {
      swal(
        'Good job!',
        'Vous avez cliquez sur le Bouton!',
        'success'
      )
    }