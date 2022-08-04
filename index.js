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
  let hit;
  const board = new Array(100).fill('')
  const placeShip = (ship, coordinates) => {
    coordinates.forEach(coordinate => board[coordinate] = ship)
  }

  const receiveAttack = (coordinate) => {
    if (board[coordinate]) {
      // register hit
      hit = true
    } else {
      board[coordinate] = 'miss'
      // dom miss board
      hit = false
    }
  }

  const checkBoard = () => {
    if (hit) {
      const shipSearch = board.filter(e => e === e.includes('ship'))
      if (!shipSearch.length) {
        // gameover
      }
    } else {
      return false
    }
  }

  const viewBoard = () => board.filter(e => e)
  return { board, placeShip, viewBoard, receiveAttack, checkBoard }
}

const Player = () => {
  const start()

  return {}
}

const player1 = Player()
const player2 = Player()

// player.start()
// gameboard.receiveAttack()
// while (gameboard.checkBoard()) {
//   // console.log('hit')
//   gameboard.receiveAttack()
//   gameboard.check()
// }
// player.end()




exports.Ship = Ship
exports.Gameboard = Gameboard
exports.Player = Player