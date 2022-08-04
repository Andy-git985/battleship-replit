player.start()
gameboard.receiveAttack()
while (gameboard.check()) {
  // console.log('hit')
  gameboard.receiveAttack()
  gameboard.check()
}
player.end()

const Ship = (length) => {
  const hits = new Array(length).fill('')
  const hit = (x) => hits[x]
  const isSunk = () => 
}

const

const game = (player1, player2) => {
  const init = () => {
    player1 = Player()
    player2 = Player()
    player1.board = GameBoard()
    player2.board = GameBoard()
  }
  player1.board.placeShips
  player2.board.placeShips
  const playerMoves = () => {
    player.start()
    gameboard.receiveAttack()
    while (gameboard.check()) {
      // console.log('hit')
      gameboard.receiveAttack()
      gameboard.check()
    }
    player.end()
  }

  const loop = () => {
    
  }
}