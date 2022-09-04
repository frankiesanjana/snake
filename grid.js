// this is the grid size that we defined in the styles in the head of the html file for the game board
const GRID_SIZE = 21;

export function getRandomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    }
}

// returns if either x or y coordinates are outside the grid area
export function outsideGrid(position) {
    return (
      position.x < 1 || position.x > GRID_SIZE ||
      position.y < 1 || position.y > GRID_SIZE
    )
  }