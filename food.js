import { onSnake, expandSnake } from './snake.js'
import { getRandomGridPosition } from './grid.js'

// defines food and starting position
let food = getRandomFoodPosition();

// how many segments the snake grows when it eats a piece of food
const EXPANSION_RATE = 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
  }

  // randomises food position, including checking it isn't on the snake already
function getRandomFoodPosition() {
    let newFoodPosition
    // while food is null or food is on the snake already...
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        // we want to get a new food position:
            newFoodPosition = getRandomGridPosition()
    }
    return newFoodPosition
}