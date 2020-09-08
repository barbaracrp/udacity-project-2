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

window.addEventListener('scroll', () => {
  const allSections = document.querySelectorAll('section');
  allSections.forEach((section, key) => {
    const sectionRect = section.getBoundingClientRect();
    const sectionLink = document.querySelector(`a[data-section-id="${section.id}"]`) // 'a[data-section-id="?"]'
    console.log(sectionRect.top);
    if (sectionRect.top < window.innerHeight/2 && sectionRect.top >= 0) {
      section.classList.add('active');
      sectionLink.classList.add('active');
    } else {
      section.classList.remove('active');
      sectionLink.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  buildMenu();
  activeItem();
});


function buildMenu() {
  const sectionList = document.querySelectorAll('section'); //pelo nome da tag

  const list = [];
  sectionList.forEach(function(item, key) {      // function(element, i) {} (item é uma var que eh criada internamente em cada loop do for each)
    const listElement = document.createElement('li'); //criei o li
    list.push(listElement);  // coloquei dentro da list
    const link = document.createElement('a'); //criei o a
    link.dataset.sectionId = item.id; // salva o ID da section no dataset do a
    link.textContent = item.dataset.nav; //lendo o texto que esta na prop nav do data attr da section. (html data-nav) (dom dataset.nav)
    link.classList.add('menu__link'); //colocando a classe

    listElement.appendChild(link); // colocando link (a) dentro de cada li
  });

  const menuList = document.getElementById('navbar__list'); //lendo o ul do html e atribuindo em uma variavel

  menuList.append(...list); //botando os li que eu criei no js, dentro do ul que ja tinha no html

}

function activeItem() {
  const menuList = document.querySelectorAll('.menu__link')
  menuList[0].classList.add('active');
  for (const link of menuList) {
    link.addEventListener('click', function (event) {
      console.log(event);
      const oldSection = document.querySelector('section.active');
      oldSection.classList.remove('active');
      const oldLink = document.querySelector('a.active');
      oldLink.classList.remove('active');
      event.target.classList.add('active');

      const section = document.getElementById(link.dataset.sectionId);
      section.classList.add('active');
      section.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
    });
  }
}
