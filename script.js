const paletaCor = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const input = document.getElementById('board-size');
const btnSize = document.getElementById('generate-board');
const corAleatoria = [];
const corPreta = document.getElementsByClassName('color')[0];
corPreta.style.backgroundColor = 'rgb(0, 0, 0)';

// ------ PIXEL BORDA 5X5
function boardSize(tamanho) {
  for (let index = 0; index < tamanho * tamanho; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList = 'pixel';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
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
      const elementoCor = document.querySelector('.selected').style.backgroundColor;
      e.target.style.backgroundColor = elementoCor;
    });
  }
}
colorirPixel();

// ------- FUNÇÃO RESETAR QUADRO DE PIXELS
function limpar() {
  const btnLimpar = document.getElementById('clear-board');
  btnLimpar.addEventListener('click', () => {
    for (let index = 0; index < pixelColor.length; index += 1) {
      pixelColor[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}
limpar();

// ------ FUNÇÃO PARA APAGAR todas as DIV PIXEL ANTES DE CRIAR MAIS
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
  // verifica e atribui valores quando < 5 e >50
  if (input.value < 5) {
    novoTamanho = 5;
  }

  if (input.value > 50) {
    novoTamanho = 50;
  }
  boardSize(novoTamanho);
});

// ------- FUNÇÃO PARA GERAR CORES ALEATÓRIAS
function gerarCorAleatória() {
  const hex = 'ABDCEF0123456789';
  let character = '#';

  for (let index = 0; index < 6; index += 1) {
    character += hex[Math.floor(Math.random() * 16)];
  }
  return character;
}

function atualizaCorAleatoria() {
  while (corAleatoria.length <= 3) {
    corAleatoria.push(gerarCorAleatória());
  }
}
atualizaCorAleatoria();
// ----- FUNÇÃO CRIA DIVS DE CORES ALEATORIAS

for (let index = 1; index < document.getElementsByClassName('color').length; index += 1) {
  document.getElementsByClassName('color')[index].style.backgroundColor = `${corAleatoria[index]}`;
}
