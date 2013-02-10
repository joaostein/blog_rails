$(function() {
    var menu = {
      
      init: function() {
        var menuTrigger = $(".menu-condensed-trigger");
        this.menuBar = $(".menu-main");

        menuTrigger.on("click", this.toggleMenu);
      },

      toggleMenu: function() {
        $(this).toggleClass("menu-condensed-trigger-active");
        menu.menuBar.toggleClass("notVisible isVisible");
      }
    }

    menu.init();
});