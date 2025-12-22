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
	placeSymbol(y,x,symbol){
		//used to place the symbol within the board
			if (myBoard.isEmpty(inputFieldY, inputFieldX)) {
            	//myBoard.board[inputFieldY][inputFieldX] = inputSymbol;
        } 	else {
            	console.log("Position already set");
        }
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
            console.log('Es geht weiter!');
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


/* Main Game runs in a loop as long as no winner is set*/
// Innere und äußere Schleife überarbeiten

do {

    do {

        var inputFieldY = myGame.inputNum('Y');
        var inputFieldX = myGame.inputNum('X');
        var inputSymbol = myGame.inputSymbol();

	   	myBoard.placeSymbol(inputFieldY,inputFieldX,inputSymbol);
    } while (!myBoard.isEmpty(inputFieldY, inputFieldX));
    myBoard.board[inputFieldY][inputFieldX] = inputSymbol;
    //myBoard.board[inputFieldY][inputFieldX] = inputSymbol;

    console.log(inputFieldX, inputFieldY);
    console.log(myBoard.board[inputFieldY][inputFieldX]);

    myBoard.printBoard();
    myGame.checkGame(myBoard.board);

} while (myGame.checkGame(myBoard.board) !== true);

console.log("Gewonnen");