(function($){

  // $('#megamenu > ul > li.has-menu').on('mouseover', function(e) {
  //   console.log("li.has-menu: mouseover");
  //   e.preventDefault();
  //
  //
  //
  //
  // });
  //
  // // $(document).on('mouseover', function(e) {
  // //   closeMenus();
  // // });
  // $('.menu.is-open').on('mousemove', function(e){
  //   console.log('is-open');
  // });

  $("#megamenu").on('mousemove', function(e){
    var $target = $(e.target);
    var $has_menus = $('#megamenu > ul > li.has-menu');

console.log(e.target);
    if ($.contains($has_menus, $target)) {
      console.log('Megamenu');
    }
  });

  function closeMenus() {
    var $open_menus = $('li.has-menu > .menu.is-open');
    setTimeout(function() {
      // close open menus
      $open_menus.removeClass('is-open');
      $open_menus.parent().removeClass('is-active');
    }, 300);
  }

  function openMenu(el) {
    var $this = $(el);
    var $this_menu = $this.children('.menu').first();
    var $open_menus = $this.siblings().children('.menu.is-open');

    // close open menus
    $open_menus.not($this_menu).removeClass('is-open');
    $open_menus.not($this_menu).parent().removeClass('is-active');

    // open this menu
    $this_menu.addClass('is-open');
    $this_menu.parent().addClass('is-active');
  }

})(jQuery);
