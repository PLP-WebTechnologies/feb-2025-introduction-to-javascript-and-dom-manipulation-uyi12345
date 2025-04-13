let textIndex = 0;
const phrases = ['I like dogs', 'I like cats', 'I like cars', 'I like programming'];

document.getElementById('change-text-btn').addEventListener('click', () => {
  const dynamicText = document.getElementById('dynamic-text');
  dynamicText.textContent = phrases[textIndex];
  textIndex = (textIndex + 1) % phrases.length; // Cycle through phrases
});


let colorIndex = 0;
const colors = ['red', 'green', 'blue', 'yellow'];

document.getElementById('change-style-btn').addEventListener('click', () => {
  const styleText = document.getElementById('style-text');
  styleText.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
});


document.getElementById('add-element-btn').addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new paragraph added dynamically!';
  document.getElementById('element-container').appendChild(newElement);
});

document.getElementById('remove-element-btn').addEventListener('click', () => {
  const elementContainer = document.getElementById('element-container');
  if (elementContainer.lastChild) {
    elementContainer.removeChild(elementContainer.lastChild);
  } else {
    alert('No removable element found!');
  }
});