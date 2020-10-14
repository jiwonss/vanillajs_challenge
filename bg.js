const body = document.querySelector("body");

const IMG_NUMBER = 8;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `/vanillajs_challenge/images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  console.log(randomNumber);
  paintImage(randomNumber);
}

init();
