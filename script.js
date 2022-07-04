const paletaCor = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');

for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.classList = 'pixel white';
  pixelBoard.appendChild(pixel);
}

for (let index = 0; index < paletaCor.length; index += 1) {
  paletaCor[index].addEventListener('click', function (evento) {
    const elementoCor = document.querySelector('.selected');
    elementoCor.classList.remove('selected');
    evento.target.classList.add('selected');
  });
}

const pixelColor = document.querySelectorAll('.pixel');
function colorirPixel() {
  for (let index = 0; index < pixelColor.length; index += 1) {
    pixelColor[index].addEventListener('click', function (e) {
      const elementoCor = document.querySelector('.selected').classList[1];
      e.target.className = 'pixel' + ' ' + elementoCor;
    });
  }
}
colorirPixel();