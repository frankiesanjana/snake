import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'

// set up game loop

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');


function main(currentTime) {
    // following line tells us 'when can I animate my next frame?'
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    console.log('Render');
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
}