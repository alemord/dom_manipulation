let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitleElement = document.getElementById('main-title');
  mainTitleElement.textContent = 'DOM Stuff';

  // Part 2
  const bodyElement = document.querySelector('body');
  bodyElement.style.backgroundColor = 'purple';

  // Part 3
  const favoriteThingsList = document.getElementById('favorite-things');
  const lastListItem = favoriteThingsList.lastElementChild;
  favoriteThingsList.removeChild(lastListItem);
  // Part 4
  const specialTitles = document.querySelectorAll('.special-title');
  specialTitles.forEach(title => {
  title.style.fontSize = '2rem';
  });

  // Part 5
  const pastRacesList = document.getElementById('past-races');
  const chicagoRace = pastRacesList.querySelector('li:nth-child(4)');
  pastRacesList.removeChild(chicagoRace);

  // Part 6

const newRace = document.createElement('li');
newRace.textContent = 'Florence, Italy';
pastRacesList.appendChild(newRace);

  // Part 7
  const mainContentElement = document.querySelector('blog-post purple');
  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post');
  
  const blogTitle = document.createElement('h1');
  blogTitle.textContent = 'Florence';
  
  const blogText = document.createElement('p');
  blogText.textContent = 'FLORENCE IS MY HOMETOWN';
  
  // Add the title and text elements to the new blog post element
  newBlogPost.appendChild(blogTitle);
  newBlogPost.appendChild(blogText);
  
  const mainContainer = document.querySelector('.main');
  mainContainer.appendChild(newBlogPost);
  
  // Part 8

  const quoteTitleElement = document.querySelector('#quote-title');
  quoteTitleElement.addEventListener('click', randomQuote);
  
  // Part 9

  const blogPosts = document.querySelectorAll('.blog-post');
  blogPosts.forEach(post => {
  post.addEventListener('mouseleave', () => {
  post.classList.toggle('purple');
  });
  post.addEventListener('mouseenter', () => {
  post.classList.toggle('red');
  });
  });


});
