const paletaCor = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const pixelColor = document.querySelectorAll('.color');

function quadroPixel() {
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList = 'pixel white';
    pixelBoard.appendChild(pixel);
  }
}
quadroPixel();

for (let index = 0; index < pixelColor.length; index += 1) {
  pixelColor[index].addEventListener('click', function (evento) {
    const elementoCor = document.querySelector('.selected');
    elementoCor.classList.remove('selected');
    evento.target.classList.add('selected');
  });
}
