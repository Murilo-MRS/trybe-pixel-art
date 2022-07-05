const paletaCor = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
// ------ PIXEL BORAD 5X5
for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.classList = 'pixel white';
  pixelBoard.appendChild(pixel);
}
// ------- FUNÇÃO PARA ADICIONAR CLASSE SELECTED
function selected() {
  for (let index = 0; index < paletaCor.length; index += 1) {
    paletaCor[index].addEventListener('click', function (evento) {
      const elementoCor = document.querySelector('.selected');
      elementoCor.classList.remove('selected');
      evento.target.classList.add('selected');
    });
  }
}
selected();
// ------- FUNÇÃO PARA TROCAR A COR DO PIXEL
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
// ------- FUNÇÃO RESETAR QUADRO DE PIXELS
function limpar() {
  const btnLimpar = document.getElementById('clear-board');
  btnLimpar.addEventListener('click', function () {
    for (let index = 0; index < pixelColor.length; index += 1) {
      pixelColor[index].className = 'pixel white';
    }
  });
}
limpar();
window.onload = colorirPixel;
