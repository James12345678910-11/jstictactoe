//board
let board = [1,2,3,4,5,6,7,8,9];
let moveCount = 0;
let player1;
let player2;



function renderBoard() {
  return board.map((cell, index) => 
    `<button data-index="${index}">${cell}</button>`
  ).join('');
}
  function isMoveValid(position, marker) {
    if (position < 1 || position > 9) {
      return false;
    }

    if (marker !== 'X' && marker !== 'O') {
      return false;
    }

    if(typeof board[position -1] === 'string') {
      return false;
    }
    return true;
  }

  function updateBoard(position, marker) { //lets see if this is better
    board[position -1] = marker;
    }
  
  function isFull() {
    if (board.every(cell => cell === 'X' || cell === 'O')){
      alert("board is full. It's a draw!")
      return true; 
    }
      return false
    
  }

  

//game


  function startGame() {

    const { player1, player2 } = playerInfo();
    moveCount = 0;
    board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    displayBoard();

    promptPlayer();
   
  }

  function getMove(position, currentPlayer) {
    const currentPlayer = playerTurn();
    
    if (!isMoveValid(position, currentPlayer.marker)) {
      alert("Invalid move! Try again.");
      return false;
  }
      updateBoard(position, currentPlayer.marker);
      increaseMoveCount();
      return true;
}


  function promptPlayer() {
    const currentPlayer = playerTurn();
    alert(`Pick a cell, ${currentPlayer.name}`);
  }

  function increaseMoveCount() {
    moveCount++;
    }
  function getMoveCount() {
    return moveCount;
    }
  

    function checkWinner(board) {
      return winningMoves(board);
  }

    function playerTurn() {
      if (moveCount % 2 === 0) {
        return player1
      }
      else {
        return player2
           }
  }

    function winningMoves() {

      

      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

      ];
      
      for (let i = 0; i < lines.length; i++){

        const[a, b, c] = lines[i];

        if (board[a] && board[a] === board[b] && board[a] === board[c]){
          return true;
        }
      }
      return false;
      
    }


//players

 
  function playerInfo() { // i should change this to handle only the names
   const player1 = {
    name: prompt("Enter Player 1's name:"),
    marker: prompt("Choose Player 1's marker (X or O):").toUpperCase()
  };
  let player2Marker;
    if (player1.marker === "X") {
    player2Marker = "O";
  } else {
    player2Marker = "X";
  }

   const player2 = {
    name: prompt("Enter Player 2's name:"),
    marker: player2Marker
  };

  return { player1, player2 };
}

function resetGame() {
  board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  moveCount = 0;
  displayBoard();
}

//function cellClickHandler(event) {
//  const position = parseInt(event.target.dataset.index) + 1;
//  const currentPlayer = playerTurn();
  
//  if (getMove(position, currentPlayer)) {
//    displayBoard();
//    if (checkWinner(board)) {
//      alert(`${currentPlayer.name} wins!`);
 //     resetGame();
 //     return;
//    }
//  }
//}

//display

  function displayBoard() {
    document.getElementById('board').innerHTML = renderBoard();
  }


document.getElementById('board').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const position = parseInt(event.target.dataset.index) + 1;
    const currentPlayer = playerTurn();

    if (getMove(position, currentPlayer)) {
      displayBoard();
      if (checkWinner(board)) {
        alert(`${currentPlayer.name} wins!`);
        resetGame();
        return;
      }
      if (isFull()) {
        resetGame();
        return;
      }
      promptPlayer();
    }
  }
});

startGame();


