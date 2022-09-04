import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

// set up game loop

let lastRenderTime = 0;

let gameOver = false;

const gameBoard = document.getElementById('game-board');


function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
        // the following line sets the window location to the page we are currently on, in effect this refreshes the page to restart the game
        window.location = '/'
    }
    // if a user presses 'cancel' instead of 'ok' then this return stops the game from continuing
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }