const Ship = (length) => {
  const hits = []
  const hit = (x) => {
    hits.push(x)
  }
  const isSunk = () => hits.length === length 
  return {
    hit, isSunk
  }
}

const Gameboard = () => {
  const board = {}
  const placeShip = (ship, coordinates) => {
    board[ship] = coordinates
  }
  
  const receiveAttack = (x) => {
    
  }
  return {}
}

module.exports = Ship