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

// TODO: build the nav


// TODO: Add class 'active' to section when near top of viewport
//use the .classList method to get the list of css classes of an element

// TODO: Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

//TODO: listen to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  buildMenu();
});

// TODO: Build menu
function buildMenu() {
  //TODO: finding section elements in the page
  const sectionList = document.querySelectorAll('section');
  console.log(sectionList);

  const list = [];
  for (let index = 0; index < sectionList.length; index++) {
    const section = sectionList[index];
    console.log(section.id, section.dataset.nav);

    const listElement = document.createElement('li');
    list.push(listElement);
    const anchor = document.createElement('a');
    anchor.href = '#' + section.id;
    anchor.textContent = section.dataset.nav;
    anchor.classList.add('menu__link');
    console.log(anchor);
    listElement.appendChild(anchor);

    console.log(listElement);
  }
  const menuList = document.getElementById('navbar__list');

  menuList.append(list);

  //TODO: get the ID and data-nav attributes of each section element

  //TODO: create the menu items using li + anchor elements
  //TODO: find the menu element and append the menu items into it
}
// TODO: Scroll to section on link click

// TODO: Set sections as active


