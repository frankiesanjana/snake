import { getInputDirection } from "./input.js"

// how many times the snake moves per second
export const SNAKE_SPEED = 5;

// places snake at start
const snakeBody = [
    { x:11, y:11 }
];

// xx
let newSegments = 0;

export function update() {
    addSegments()
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i>=0; i--) {
        // creating the new {snakeBody object in curly brackets} to prevent reference problems
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount) {
    newSegments += amount;
}

// compares position with segment position to check if they are equal
export function onSnake(position, { ignoreHead = false } = []) {
    // 'some' in the below -> if any part of the snake body is equal to the position, returns True
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

// returns whether the two positions are exactly the same
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// takes new segments and adds them onto end of snake by taking the last element of the snake and duplicating it onto the end of the snake
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
}