var messageButton = document.querySelector('#display-message');
var meditatorIcon = document.querySelector('img');
var messageDisplay = document.querySelector('#message');
var mantraRadio = document.querySelector('#mantra');
var affirmationRadio = document.querySelector('#affirmation');
var clearButton = document.querySelector('#clear-message');

var affirmations = [
'I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself, unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.'
]
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.'
]

messageButton.addEventListener('click', displayMessage);
clearButton.addEventListener('click', clearMessageDisplay);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function chooseMessage() {
  if (mantraRadio.checked == true) {
    return mantras;
  } else if (affirmationRadio.checked == true) {
    return affirmations;
  }
}

function toggleIcon(hiddenElement, visibleElement) {
  visibleElement.classList.add('hidden');
  hiddenElement.classList.remove('hidden');
  clearButton.classList.add('hidden');
  // toggleClearButton();
}

function getRandomMessage() {
  var messageType = chooseMessage();
  return messageType[getRandomIndex(messageType)];
}

function toggleClearButton() {
  clearButton.classList.toggle('hidden');
}

function displayMessage() {
  event.preventDefault();
  if (chooseMessage() == mantras || affirmations) {
    messageDisplay.innerText = getRandomMessage();
    toggleIcon(messageDisplay, meditatorIcon);
    toggleClearButton();
  }
}

function toggleClearButton() {
  if (clearButton.classList == 'hidden') {
    clearButton.classList.remove('hidden')
  } else {
    clearButton.classList.add('hidden');
  }
}

function clearMessageDisplay() {
  toggleIcon(meditatorIcon, messageDisplay);
  mantraRadio.checked = false;
  affirmationRadio.checked = false;
}
