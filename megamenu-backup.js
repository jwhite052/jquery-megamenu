$('#megamenu > ul > li.has-menu').on('mouseenter', function(e) {
  console.log("li.has-menu > a: mouseenter");
  e.preventDefault();
  var $this = $(this);
  var $this_menu = $this.children('.menu').first();
  var $open_menus = $this.siblings().children('.menu.is-open');

  // close open menus
  $open_menus.not($this_menu).removeClass('is-open');
  $open_menus.not($this_menu).parent().removeClass('is-active');

  // open this menu
  $this_menu.addClass('is-open');
  $this_menu.parent().addClass('is-active');
});

$(document).on('mouseover', function(e) {

  var $this = $(this);
  var $target = $(e.target);
  var $nav_btns_menu =  $('#megamenu > ul > li.has-menu');
  var $nav_btns = $('#megamenu > ul > li').not('.has-menu');

  if ($target.is($nav_btns_menu)) {
    console.log('document mouseover nav btn');
  }
  console.log("li.has-menu: mouseout");
  var $open_menus = $('li.has-menu > .menu.is-open');

  setTimeout(function() {
    // close open menus
    $open_menus.removeClass('is-open');
    $open_menus.parent().removeClass('is-active');
  }, 300);

});

$("#megamenu").on('mouseover', function(e){
  var $this = $(this);
  var $nav_btns = $this.find('li.has-menu');
  var $target = $(e.target);
  console.log('target: ', e.target);
  if ($target.is($nav_btns)) {
    console.log('mouseover: Nav Button');
  }
  console.log("#megamenu: mouseover");
  e.stopPropagation();
});
