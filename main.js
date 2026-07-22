//Покраска всех карточек
const allCards = document.querySelectorAll('.product-card');
const colorAllRechanger = document.querySelector('#color-all-rechanger');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

colorAllRechanger.addEventListener('click', () => {
  allCards.forEach((card) => card.style.backgroundColor = greenColorHash)
});

//Покраска первой карточки 

const firstCard = document.querySelector('.product-card');
const colorOneRechanger = document.querySelector('#color-one-rechanger');

colorOneRechanger.addEventListener('click', () => {
  firstCard.style.backgroundColor = blueColorHash;
});

//открыть google

const googleOpener = document.querySelector('#open-google');

googleOpener.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы хотите открыть Google?');

  if (answer === true) {
    window.open('https://www.google.com/')
  } else {
    return;
  }
};

// Вывод консоль лог 

const consoleLogButton = document.querySelector('#output-console-log');

consoleLogButton.addEventListener('click', () => outputConsoleLog('Вывод в консоль'))

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
};

//Открыть youtube 

const youtubeOpener = document.querySelector('#open-youtube');

youtubeOpener.addEventListener('click', openYoutube);

function openYoutube() {
  const answer = confirm ('открыть youtube?');
  
  if (answer === true) {
    window.open('https://www.youtube.com/')  
  } else {
    return;
  }
};

//mouseover

const mouseoverButton = document.getElementById('mouse-over');

mouseoverButton.addEventListener('mouseover', () => {
  console.log(mouseoverButton.textContent.trim())
});


//class list

const moreColorButton = document.querySelector('#more-color-button')

moreColorButton.addEventListener('click', () => {
  moreColorButton.classList.toggle('more-color-button-active')
});
