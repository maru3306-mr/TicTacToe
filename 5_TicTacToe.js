/*
Easy TicTacToe Game to further deepen JS knowledge

*/

class Board {
    /*
    Class used to create the foundation board for the game
    */
    constructor() {
        this.initBoard();
    }

    initBoard() {

        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }


    printBoard() {
        const cell = (value) => String(value).padStart(1).padEnd(3);

        console.log(`
    x→    0      1      2
y↓   ┌──────┬──────┬──────┐
0    │ ${cell(this.board[0][0])} │ ${cell(this.board[0][1])} │ ${cell(this.board[0][2])} │
     ├──────┼──────┼──────┤
1    │ ${cell(this.board[1][0])} │ ${cell(this.board[1][1])} │ ${cell(this.board[1][2])} │
     ├──────┼──────┼──────┤
2    │ ${cell(this.board[2][0])} │ ${cell(this.board[2][1])} │ ${cell(this.board[2][2])} │
     └──────┴──────┴──────┘
`.trim());
    }

    isEmpty(y, x) {
        //checks if field is free or occupied already with a symbol		
        return this.board[y][x] === null;
    }
    placeSymbol(x, y, symbol) {
        if (this.board[y][x] !== null) {
            console.log("Field occupied");
            return false;
        }

        this.board[y][x] = symbol;
        return true;
    }


}

class Game {
    /*
    Class used to store rules for the game

    It is not perfect and can be solved differently, e.g. via Array + Loop
    */

    checkGame(board) {

        if (
            board[0][0] !== null &&
            board[0][0] === board[0][1] &&
            board[0][1] === board[0][2]
        ) {
            console.log('WIN #1');
            return true;

        } else if (
            board[1][0] !== null &&
            board[1][0] === board[1][1] &&
            board[1][1] === board[1][2]
        ) {
            console.log('WIN #2');
            return true;

        } else if (
            board[2][0] !== null &&
            board[2][0] === board[2][1] &&
            board[2][1] === board[2][2]
        ) {
            console.log('WIN #3');
            return true;

        } else if (
            board[0][0] !== null &&
            board[0][0] === board[1][0] &&
            board[1][0] === board[2][0]
        ) {
            console.log('WIN #4');
            return true;

        } else if (
            board[0][1] !== null &&
            board[0][1] === board[1][1] &&
            board[1][1] === board[2][1]
        ) {
            console.log('WIN #5');
            return true;

        } else if (
            board[0][2] !== null &&
            board[0][2] === board[1][2] &&
            board[1][2] === board[2][2]
        ) {
            console.log('WIN #6');
            return true;

        } else if (
            board[0][0] !== null &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]
        ) {
            console.log('WIN #7');
            return true;

        } else if (
            board[0][2] !== null &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]
        ) {
            console.log('WIN #8');
            return true;

        } else {
            console.log('Game continues!');
            return false;
        }
    }

    winGame() {
        /* Method to give out the winner and the winning sequence*/
    }
    inputNum(XoY) {
        //Checks if input from user is numeric and within the field for X and Y coordinate
        while (true) {
            var num = prompt("Choose a field in " + XoY + "-Direction between 0 and 2");
            var num = parseInt(num);

            if (num >= 0 && num <= 2) {
                return num;
            }
            console.log("Invalid input, try agaiiiiin");



        }

    }


    inputSymbol() {
        //Checks if input symbol is either X or O
        while (true) {
            var symb = prompt("Choose a Symbol X or O");


            if (symb === 'X' || symb === 'O') {
                return symb;
            }
            console.log("Invalid input, try agaiiiiin");



        }

    }



}


const myBoard = new Board();
const myGame = new Game();

myBoard.printBoard();


//defines the starting condition of the game 
var currentPlayer = "X";
var gameOver = false;

var player = document.getElementById("player_info");
var symbol = document.getElementById("player_symbol");


player.textContent = "Player : " + currentPlayer;


/*Grab HTML stuff
Basically gets every value of each HTML div id from field 00 to field 22 including 
the dataset- values defined for each field in the HTML and adds logic to it

// to be done:
put it into loop to get rid of redundant code 

*/

var x0y0 = document.getElementById("field00");
const x00 = Number(x0y0.dataset.x);
const y00 = Number(x0y0.dataset.y);
x0y0.onclick = function() {
    console.log("X: " + x00 + " Y: " + y00);
    if (gameOver === true) {
        ///checks if game is over and stops the possibilty to click in the fields
        return;
    }
    if (myBoard.placeSymbol(x00, y00, currentPlayer) === true) {
        // myBoard.placeSymbol(x00, y00, currentPlayer);
        x0y0.textContent = currentPlayer;
        var winner;
        winner = currentPlayer;

        if (currentPlayer === "X") {
            currentPlayer = "O";
            player.textContent = "Player : " + currentPlayer;
        } else {
            currentPlayer = "X";
            player.textContent = "Player : " + currentPlayer;
        }

        if (myGame.checkGame(myBoard.board) !== true) {
            console.log("Game is running")
        } else {
            console.log("Game ended")
            player.textContent = "The Winner is : " + winner;
            gameOver = true;
            document.getElementById("board").classList.add("locked");
        }
    }


}

var x1y0 = document.getElementById("field01");
const x10 = Number(x1y0.dataset.x);
const y10 = Number(x1y0.dataset.y);
x1y0.onclick = function() {
    console.log("X: " + x10 + " Y: " + y10);
    if (gameOver === true) {
        ///checks if game is over and stops the possibilty to click in the fields
        return;
    }

    if (myBoard.placeSymbol(x10, y10, currentPlayer) === true) {
        // myBoard.placeSymbol(x10, y10, currentPlayer);
        myBoard.printBoard();
        x1y0.textContent = currentPlayer;
        var winner;
        winner = currentPlayer;

        if (currentPlayer === "X") {
            currentPlayer = "O";
            player.textContent = "Player : " + currentPlayer;
        } else {
            currentPlayer = "X";
            player.textContent = "Player : " + currentPlayer;

        }
        if (myGame.checkGame(myBoard.board) !== true) {
            console.log("Game is running")
        } else {
            console.log("Game ended")
            player.textContent = "The Winner is : " + winner;
            gameOver = true;
            document.getElementById("board").classList.add("locked");
        }

    }

}

var x2y0 = document.getElementById("field02");
const x20 = Number(x2y0.dataset.x);
const y20 = Number(x2y0.dataset.y);
x2y0.onclick = function() {
    console.log("X: " + x20 + " Y: " + y20);
    if (gameOver === true) {
        ///checks if game is over and stops the possibilty to click in the fields
        return;
    }
    if (myBoard.placeSymbol(x20, y20, currentPlayer) === true) {
        // myBoard.placeSymbol(x20, y20, currentPlayer);
        myBoard.printBoard();
        x2y0.textContent = currentPlayer;
        var winner;
        winner = currentPlayer;
        if (currentPlayer === "X") {
            currentPlayer = "O";
            player.textContent = "Player : " + currentPlayer;
        } else {
            currentPlayer = "X";
            player.textContent = "Player : " + currentPlayer;
        }
        if (myGame.checkGame(myBoard.board) !== true) {
            console.log("Game is running")
        } else {
            console.log("Game ended")
            player.textContent = "The Winner is : " + winner;
            gameOver = true;
            document.getElementById("board").classList.add("locked");
        }
    }
}

var x0y1 = document.getElementById("field10");
const x01 = Number(x0y1.dataset.x);
const y01 = Number(x0y1.dataset.y);
x0y1.onclick = function() {
    console.log("X: " + x01 + " Y: " + y01);
    if (gameOver === true) {
        ///checks if game is over and stops the possibilty to click in the fields
        return;
    }
    if (myBoard.placeSymbol(x01, y01, currentPlayer) === true) {
        //myBoard.placeSymbol(x01, y01, currentPlayer);
        myBoard.printBoard();
        x0y1.textContent = currentPlayer;
        var winner;
        winner = currentPlayer;
        if (currentPlayer === "X") {
            currentPlayer = "O";
            player.textContent = "Player : " + currentPlayer;
        } else {
            currentPlayer = "X";
            player.textContent = "Player : " + currentPlayer;
        }
        if (myGame.checkGame(myBoard.board) !== true) {
            console.log("Game is running")
        } else {
            console.log("Game ended")
            player.textContent = "The Winner is : " + winner;
            gameOver = true;
            document.getElementById("board").classList.add("locked");
        }
    }
}

var x1y1 = document.getElementById("field11");
const x11 = Number(x1y1.dataset.x);
const y11 = Number(x1y1.dataset.y);
x1y1.onclick = function() {
    console.log("X: " + x11 + " Y: " + y11);
    if (gameOver === true) {
        ///checks if game is over and stops the possibilty to click in the fields
        return;
    }
    if (myBoard.placeSymbol(x11, y11, currentPlayer) === true) {
        //myBoard.placeSymbol(x11, y11, currentPlayer);
        myBoard.printBoard();
        x1y1.textContent = currentPlayer;
        var winner;
        winner = currentPlayer;
        if (currentPlayer === "X") {
            currentPlayer = "O";
            player.textContent = "Player : " + currentPlayer;
        } else {
            currentPlayer = "X";
            player.textContent = "Player : " + currentPlayer;
        }
        if (myGame.checkGame(myBoard.board) !== true) {
            console.log("Game is running")
        } else {
            console.log("Game ended")
            player.textContent = "The Winner is : " + winner;
            gameOver = true;
            document.getElementById("board").classList.add("locked");
        }
    }
}

var x2y1 = document.getElementById("field12");
const x21 = Number(x2y1.dataset.x);
const y21 = Number(x2y1.dataset.y);
x2y1.onclick = function() {
    console.log("X: " + x21 + " Y: " + y21);
    if (gameOver === true) {
        ///checks if game is over and stops the possibilty to click in the fields
        return;
    }
    if (myBoard.placeSymbol(x21, y21, currentPlayer) === true) {
        //myBoard.placeSymbol(x21, y21, currentPlayer);
        myBoard.printBoard();
        x2y1.textContent = currentPlayer;
        var winner;
        winner = currentPlayer;
        if (currentPlayer === "X") {
            currentPlayer = "O";
            player.textContent = "Player : " + currentPlayer;
        } else {
            currentPlayer = "X";
            player.textContent = "Player : " + currentPlayer;
        }
        if (myGame.checkGame(myBoard.board) !== true) {
            console.log("Game is running")
        } else {
            console.log("Game ended")
            player.textContent = "The Winner is : " + winner;
            gameOver = true;
            document.getElementById("board").classList.add("locked");
        }
    }
}

var x0y2 = document.getElementById("field20");
const x02 = Number(x0y2.dataset.x);
const y02 = Number(x0y2.dataset.y);
x0y2.onclick = function() {
    console.log("X: " + x02 + " Y: " + y02);
    if (gameOver === true) {
        ///checks if game is over and stops the possibilty to click in the fields
        return;
    }
    if (myBoard.placeSymbol(x02, y02, currentPlayer) === true) {
        // myBoard.placeSymbol(x02, y02, currentPlayer);
        myBoard.printBoard();
        x0y2.textContent = currentPlayer;
        var winner;
        winner = currentPlayer;
        if (currentPlayer === "X") {
            currentPlayer = "O";
            player.textContent = "Player : " + currentPlayer;
        } else {
            currentPlayer = "X";
            player.textContent = "Player : " + currentPlayer;
        }
        if (myGame.checkGame(myBoard.board) !== true) {
            console.log("Game is running")
        } else {
            console.log("Game ended")
            player.textContent = "The Winner is : " + winner;
            gameOver = true;
            document.getElementById("board").classList.add("locked");
        }
    }
}

var x1y2 = document.getElementById("field21");
const x12 = Number(x1y2.dataset.x);
const y12 = Number(x1y2.dataset.y);
x1y2.onclick = function() {
    console.log("X: " + x12 + " Y: " + y12);
    if (gameOver === true) {
        ///checks if game is over and stops the possibilty to click in the fields
        return;
    }
    if (myBoard.placeSymbol(x12, y12, currentPlayer) === true) {
        //myBoard.placeSymbol(x12, y12, currentPlayer);
        myBoard.printBoard();
        x1y2.textContent = currentPlayer;
        var winner;
        winner = currentPlayer;
        if (currentPlayer === "X") {
            currentPlayer = "O";
            player.textContent = "Player : " + currentPlayer;
        } else {
            currentPlayer = "X";
            player.textContent = "Player : " + currentPlayer;
        }
        if (myGame.checkGame(myBoard.board) !== true) {
            console.log("Game is running")
        } else {
            console.log("Game ended")
            player.textContent = "The Winner is : " + winner;
            gameOver = true;
            document.getElementById("board").classList.add("locked");
        }
    }
}

var x2y2 = document.getElementById("field22");
const x22 = Number(x2y2.dataset.x);
const y22 = Number(x2y2.dataset.y);
x2y2.onclick = function() {
    console.log("X: " + x22 + " Y: " + y22);
    if (gameOver === true) {
        ///checks if game is over and stops the possibilty to click in the fields
        return;
    }
    if (myBoard.placeSymbol(x22, y22, currentPlayer) === true) {
        //myBoard.placeSymbol(x22, y22, currentPlayer);
        myBoard.printBoard();
        x2y2.textContent = currentPlayer;
        var winner;
        winner = currentPlayer;
        if (currentPlayer === "X") {
            currentPlayer = "O";
            player.textContent = "Player : " + currentPlayer;
        } else {
            currentPlayer = "X";
            player.textContent = "Player : " + currentPlayer;
        }
        if (myGame.checkGame(myBoard.board) !== true) {
            console.log("Game is running")
        } else {
            console.log("Game ended")
            player.textContent = "The Winner is : " + winner;
            gameOver = true;
            document.getElementById("board").classList.add("locked");
        }
    }

}




/* Main Game runs in a loop as long as no winner is set*/
// Innere und äußere Schleife überarbeiten
/*
do {

    do {

        var inputFieldY = myGame.inputNum('Y');
        var inputFieldX = myGame.inputNum('X');
        var inputSymbol = myGame.inputSymbol();

	   	myBoard.placeSymbol(inputFieldY,inputFieldX,inputSymbol);
    } while (!myBoard.isEmpty(inputFieldY, inputFieldX));
    myBoard.board[inputFieldY][inputFieldX] = inputSymbol;
   
    console.log(inputFieldX, inputFieldY);
    console.log(myBoard.board[inputFieldY][inputFieldX]);

    myBoard.printBoard();
    myGame.checkGame(myBoard.board);

} while (myGame.checkGame(myBoard.board) !== true);


*/
