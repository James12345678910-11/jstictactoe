//board
function board() {
  let board = [1,2,3,4,5,6,7,8,9];

function renderBoard() {
  return board.map((cell, index) => 
    `<button data-index="${index}">${cell}</button>`
  ).join('');
}
  function isMoveValid(position, marker) {
    if (position >= 0 && position <= 9 && (marker === 'X' || marker === 'O')) //made a mistake earlier i made position > 0 && position <= 8; because of i thought of index
                                                                              //where as i shouldve taken into consideration my game design where players choose a square
                                                                              //  instead. therefore it doesnt need an index
      return true
    else
      alert: "Invalid move!";
  }

  function updateBoard(position) {
    board[position -1] = marker;
    }
  
  function isFull() {
    if (board.every(cell => cell === 'X' || cell === 'O')){
      alert("board is full. It's a draw!")
      return true; 
    }
      return false
    
  }
}
  

//game


  function startGame() {
    
  }

  function getMove(position, currentPlayer) {
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
      if (MoveCount % 2 !== 0){
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

//display

function displayController() {

  function displayBoard() {

  }
}


