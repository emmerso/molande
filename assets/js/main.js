


function hasNumber(myString) {
  return /\d/.test(myString);
}

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.querySelectorAll('.skill-bar').forEach(function(skillBar) {
  const percentage = skillBar.getAttribute('data-percentage');
  const progressBar = skillBar.querySelector('.progress-bar');

  progressBar.style.width = percentage;

  setTimeout(function() {
    progressBar.style.transition = 'width 2s ease-in-out';
  }, 100);
});

// Professional Skills Animation
document.querySelectorAll('.radial-progress').forEach(function(radialProgress) {
  const percentage = radialProgress.getAttribute('data-percentage');
  const degree = percentage.slice(0, -1) * 3.6;

  radialProgress.style.background = `conic-gradient(#007bff 0%, #007bff ${degree}deg, #f0f0f0 ${degree}deg)`;

  setTimeout(function() {
    radialProgress.style.transition = 'background 2s ease-in-out';
  }, 100);
});

/**
   * Animation on scroll function and init
   */

  function aosInit() {
    AOS.init({
      offset:120,
      duration: 600,
      easing: 'ease-in-out',
      once: false,
      
    });
  }
  window.addEventListener('load', aosInit);


  function showDescription(project) {
    alert(`Description for ${project} project`);
  }


