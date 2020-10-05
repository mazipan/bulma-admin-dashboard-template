document.addEventListener('DOMContentLoaded', function () {
  
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {

      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');  
        });
      });
      
    }

    // Get all "is-tab" elements
    var $isTabs = Array.prototype.slice.call(document.querySelectorAll('.is-tab'), 0);
    if ($isTabs.length > 0) {
      
      function removeAllIsActive(){
        $isTabs.forEach(function ($el) {
          $el.classList.remove('is-active');
        });
      }

      $isTabs.forEach(function ($el) {
        $el.addEventListener('click', function () {
          removeAllIsActive();
          $el.classList.add('is-active');
        });
      });
    }

    // Get all "has-children" elements
    var withChildren = document.querySelectorAll(".menu .has-children");
    var sidebar = document.querySelector("#main-sidebar");

    withChildren.forEach(function(wChildrenEl) {
      wChildrenEl.addEventListener("click", function() {
        wChildrenEl.classList.toggle("open");
        if (sidebar.classList.contains("closed"))
          sidebar.classList.remove("closed");
      })
    })

    // Toggle sidebar
    var sidebarToggler = document.querySelector("#sidebar-toggler");
    var sidebar = document.querySelector("#main-sidebar");
    
    sidebarToggler.addEventListener("click", function() {
      sidebar.classList.toggle("closed");
      if (sidebar.classList.contains("closed")) {
        withChildren.forEach(function(wChildrenEl) {
          wChildrenEl.classList.remove("open");
        })
      }
    })
  
  });