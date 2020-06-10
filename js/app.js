/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

var UlList = document.getElementById('navbar__list');
for(var i = 1; i<5; i++){
  var Navlist = document.createElement('LI');
  Navlist.className = 'navbar__menu';
  var Navlinks = document.createElement('A');
  Navlinks.innerHTML = 'Section ' + i;
  Navlinks.className = 'menu__link';
  Navlinks.setAttribute('href','#section' + i);
  UlList.appendChild(Navlist);
  Navlist.appendChild(Navlinks);

}

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', event => {
  var NavigationLinks = document.querySelectorAll('nav ul li a');
  var FromTop = window.scrollY;

  NavigationLinks.forEach(link => {
    var Section = document.querySelector(link.hash);

    if (
      Section.offsetTop <= FromTop &&
      Section.offsetTop + Section.offsetHeight > FromTop
    ) {
      link.classList.add('your-active-class');
    } else {
      link.classList.remove('your-active-class');
    }
  });
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
