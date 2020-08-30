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
  activeItem();
});


function buildMenu() {
  // find section elements in the page
  const sectionList = document.querySelectorAll('section'); //pelo nome da tag

  const list = [];
  sectionList.forEach(function(item) {      // function(element, i) {} (item é uma var que eh criada internamente em cada loop do for each)
    const listElement = document.createElement('li'); //criei o li
    list.push(listElement);  // coloquei dentro da list
    const link = document.createElement('a'); //criei o a
    link.href = '#' + item.id; //colocando href dentro do a
    link.dataset.sectionId = item.id; // salva o ID da section no dataset do a
    link.textContent = item.dataset.nav; //lendo o texto que esta na prop nav do data attr da section. (html data-nav) (dom dataset.nav)
    link.classList.add('menu__link'); //colocando a classe
    listElement.appendChild(link); // colocando link (a) dentro de cada li
  });

  const menuList = document.getElementById('navbar__list'); //lendo o ul do html e atribuindo em uma variavel

  menuList.append(...list); //botando os li que eu criei no js, dentro do ul que ja tinha no html

}
// TODO: Scroll to section on link click

// TODO: Set sections as active
function activeItem() {
  const menuList = document.querySelectorAll('.menu__link')
  for (const link of menuList) {
    link.addEventListener('click', function () {
      const oldSection = document.querySelector('section.active');
      oldSection.classList.remove('active');

      const section = document.getElementById(link.dataset.sectionId);
      section.classList.add('active');
    });
  }
}

