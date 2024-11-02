const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const heading = document.getElementById('heading');
const image = document.getElementById('image');

function moveButton() {
  const newX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
  const newY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
  noButton.style.position = 'absolute';
  noButton.style.left = newX + 'px';
  noButton.style.top = newY + 'px';
}

yesButton.addEventListener('click', () => {
  heading.textContent = "YAAY!🎉 I guessed it right😊";
  image.src = "https://media.tenor.com/XQcsS3Lo-_8AAAAj/seeker-cat-phantom-cat.gif";
  yesButton.style.display = "none";
  noButton.style.display = "none";
});

noButton.addEventListener('click', () => {
  heading.textContent = "Sorry that you didn't like the image!";
  image.src = "https://via.placeholder.com/150";
});