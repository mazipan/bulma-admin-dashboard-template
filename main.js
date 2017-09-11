require('./main.scss')

document.addEventListener('DOMContentLoaded', function () {
  
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any nav burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
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
  
  });