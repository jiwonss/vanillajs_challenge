const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `/vanillajs-challenge/images/${imgNumber + 1}.jpg`;
  // image.src = `file:///C:/Users/SeoJiwon/Desktop/js/vanillajs-challenge/images/${imgNumber + 1}.jpg`;
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
