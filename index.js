
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
const mainEl = document.querySelector('main');


mainEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');


mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.classList.add('flex-around');
topMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');



   // Iterate over menuLinks array
for (var i = 0; i < menuLinks.length; i++) {
  // Create new anchor element
  var linkEl = document.createElement('a');

  // Set href attribute to link object's href property
  linkEl.setAttribute('href', menuLinks[i].href);

  // Set the new element's content to the value of the text property of the link object
  linkEl.textContent = menuLinks[i].text;

  // Append the new element to the topMenuEllement
  topMenuEl.appendChild(linkEl);
}

//task 4

const subMenuEl = document.querySelector('#sub-menu');
const subMenuBgColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = subMenuBgColor;
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//5.0

const topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;

topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') {
    return;
  }

  const clickedLink = event.target;

  // Remove active class from the clicked link and hide sub-menu
  if (clickedLink.classList.contains('active')) {
    clickedLink.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  // Remove active class from all links in topMenuLinks
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });

  // Add active class to the clicked link and show sub-menu
  clickedLink.classList.add('active');
  showingSubMenu = true;
  subMenuEl.style.top = topMenuEl.offsetHeight + 'px';

  console.log(event.target.textContent.toLowerCase());
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('#top-menu')) {
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  }
});


 
