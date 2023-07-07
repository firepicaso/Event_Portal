const pages = document.querySelector('.pages');
const cancel = document.querySelector('.cancel-icon');
const menu = document.querySelector('.menu-icon');
const logo = document.querySelector('.logo');
const main = document.querySelector('.main');
const featuredSpeaker = document.querySelector('.featured-speakers-container');

function openMenu() {
  pages.classList.add('active');
  cancel.classList.add('active');
  main.classList.add('blur');
  logo.classList.add('blur');
  menu.classList.add('blur');
}

function closeMenu() {
  pages.classList.remove('active');
  cancel.classList.remove('active');
  main.classList.remove('blur');
  logo.classList.remove('blur');
  menu.classList.remove('blur');
}

menu.addEventListener('click', () => {
  openMenu();
});

cancel.addEventListener('click', () => {
  closeMenu();
});

const featuredSpeakers = [
  {
    image: './Assets/SamAltman.png',
    fullName: 'Sam Altman',
    association: 'CEO of Open AI',
    achievement: 'Sam Altman is an American entrepreneur, investor, and programmer. He is the current CEO of OpenAI1, a research organization pioneering generative AI',
  },
  {
    image: './Assets/ElonMusk.png',
    fullName: 'Elon Musk',
    association: 'CEO of Tesla Motors, spaceX, Solar city',
    achievement: 'Elon Musk  is a business magnate and investor. World\'s richest person famouse for Reusable rockets and Tesla cars also co-founded Neuralink and OpenAI',
  },
  {
    image: './Assets/SundarPichai.png',
    fullName: 'Sundar Pichai',
    association: 'CEO of both Google and its parent company, Alphabet',
    achievement: 'Sundar Pichai, the CEO of Google, leading the AI research with their latest generative AI chat bot BARD and the AI platform called Plam 2.0',
  },
  {
    image: './Assets/SatyaNadella.png',
    fullName: 'Satya Nadella',
    association: 'Executive chairman and CEO of Microsoft',
    achievement: 'Satya Nadella, the CEO of Microsoft, leading the AI reasearch at Microsoft with their AI powered Office 360 and with Microsoft Co-pilot',
  },
  {
    image: './Assets/PaulGraham.png',
    fullName: 'Paul Graham',
    association: 'American computer scientist, entrepreneur, venture capitalist, and author',
    achievement: 'Paul Graham is best known for his work on the programming language Lisp and his former startup Viaweb, later renamed Yahoo! Store',
  },
  {
    image: './Assets/DavidHansson.png',
    fullName: 'David Hansson',
    association: 'Creator of the popular Ruby on Rails web development framework',
    achievement: 'David Hansson is a Danish programmer and the creator of the popular Ruby on Rails, the Instiki wiki and 37signals',
  },
];

function addFeaturedSpeakers() {
  featuredSpeakers.forEach((speaker) => {
    const featuredSpeakerCard = document.createElement('div');
    featuredSpeakerCard.classList.add('featured-speaker-card');

    const speakerImageContainer = document.createElement('div');
    speakerImageContainer.classList.add('featured-image-container');

    const speakerImage = document.createElement('img');
    speakerImage.src = speaker.image;
    speakerImage.alt = speaker.fullNameame;

    const featuredSpeakerDetails = document.createElement('div');
    featuredSpeakerDetails.classList.add('featured-speaker-details');

    const featuredSpeakerName = document.createElement('h3');
    featuredSpeakerName.classList.add('featured-speaker-name');
    featuredSpeakerName.textContent = speaker.fullName;

    const featuredSpeakerAssoication = document.createElement('p');
    featuredSpeakerAssoication.classList.add('featured-speaker-assoication');
    featuredSpeakerAssoication.textContent = speaker.association;

    const hr = document.createElement('hr');

    const featuredSpeakerAchievement = document.createElement('p');
    featuredSpeakerAchievement.classList.add('featured-speaker-achievement');
    featuredSpeakerAchievement.textContent = speaker.achievement;

    speakerImageContainer.appendChild(speakerImage);

    featuredSpeakerDetails.appendChild(featuredSpeakerName);
    featuredSpeakerDetails.appendChild(featuredSpeakerAssoication);
    featuredSpeakerDetails.appendChild(hr);
    featuredSpeakerDetails.appendChild(featuredSpeakerAchievement);

    featuredSpeakerCard.appendChild(speakerImageContainer);
    featuredSpeakerCard.appendChild(featuredSpeakerDetails);

    featuredSpeaker.appendChild(featuredSpeakerCard);
  });
}

document.addEventListener('DOMContentLoaded', addFeaturedSpeakers);

const showMoreLess = document.querySelector('.show-more-less');
const showMoreLessText = document.querySelector('.more-less-text');
const showMoreLessArrow = document.querySelector('.more-less-arrow');
const featuredSection = document.querySelector('.featured-section');

function showMoreLessSpeakers() {
  featuredSection.classList.toggle('show-more-speakers');

  if (featuredSection.classList.contains('show-more-speakers')) {
    showMoreLessText.innerText = 'LESS';
    showMoreLessArrow.style.transform = 'rotate(180deg)';
  } else {
    showMoreLessText.innerText = 'MORE';
    showMoreLessArrow.style.transform = 'rotate(0deg)';
  }
}

showMoreLess.addEventListener('click', showMoreLessSpeakers);
