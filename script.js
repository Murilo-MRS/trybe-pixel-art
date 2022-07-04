const paletaCor = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');


function quadroPixel() {
    for (let index = 0; index < 25; index += 1) {
        const pixel = document.createElement('div');
        pixel.classList = 'pixel white';
        pixelBoard.appendChild(pixel)
    }
}
quadroPixel();