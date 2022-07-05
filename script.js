const paletaCor = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const input = document.getElementById('board-size');
const btnSize = document.getElementById('generate-board');

// ------ PIXEL BORDA 5X5
function boardSize(tamanho) {
  for (let index = 0; index < tamanho * tamanho; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList = 'pixel white';
    const largura = 42 * tamanho;
    pixelBoard.style.width = `${largura}px`;
    pixelBoard.appendChild(pixel);
  }
}
boardSize(5);
// ------- FUNÇÃO PARA ADICIONAR CLASSE SELECTED
function selected() {
  for (let index = 0; index < paletaCor.length; index += 1) {
    paletaCor[index].addEventListener('click', (evento) => {
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
    pixelColor[index].addEventListener('click', (e) => {
      const elementoCor = document.querySelector('.selected').classList[1];
      e.target.className = `pixel ${elementoCor}`;
    });
  }
}
colorirPixel();
// ------- FUNÇÃO RESETAR QUADRO DE PIXELS
function limpar() {
  const btnLimpar = document.getElementById('clear-board');
  btnLimpar.addEventListener('click', () => {
    for (let index = 0; index < pixelColor.length; index += 1) {
      pixelColor[index].className = 'pixel white';
    }
  });
}
limpar();
// ------ FUNÇÃO PARA LIMPAR DIV PIXEL ANTES DE CRIAR MAIS
function apagarBoard() {
  while (pixelBoard.hasChildNodes()) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}
// ------ FUNÇÃO CRIAR PIXEL DE ACORDO COM INPUT

btnSize.addEventListener('click', () => {
  apagarBoard();
  let novoTamanho = input.value;
  if (parseFloat(novoTamanho) === 0 || !novoTamanho) {
    alert('Board inválido!');
  }
  if (input.value < 5) {
    novoTamanho = 5;
  }

  if (input.value > 50) {
    novoTamanho = 50;
  }
  boardSize(novoTamanho);
});
