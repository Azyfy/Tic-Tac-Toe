"use strict";
const gameBoard = ( () => { 
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        for (let i=0; i<9; i++) {
            const place = document.querySelector(`#ttt-${i}`);
            const img = `<img src="./img/${gameBoard[i]}.png" alt="${gameBoard[i]}" class="XO">`;
            if (gameBoard[i] != "") {
            place.innerHTML = `${img}`;
            } 
        }
    }

    return { gameBoard, render };
}) ();

const Player = (name, mark) => {
    return { name, mark};
};

const player1 = Player("MrX", "X");
const player2 = Player("MrY", "O");

const game = ( () => { 
    const board = document.querySelectorAll(".ttt-place"); 
    let firstPlayed = false;
    let mark;
    let win = false;
    let drawCheck = 0;

    const checkWin = () => {
        drawCheck++;
        if (( gameBoard.gameBoard[0] == "X" && gameBoard.gameBoard[1] == "X" && gameBoard.gameBoard[2] == "X"  ) 
            || ( gameBoard.gameBoard[3] == "X" && gameBoard.gameBoard[4] == "X" && gameBoard.gameBoard[5] == "X"  ) 
            || ( gameBoard.gameBoard[6] == "X" && gameBoard.gameBoard[7] == "X" && gameBoard.gameBoard[8] == "X"  )
            || ( gameBoard.gameBoard[0] == "X" && gameBoard.gameBoard[4] == "X" && gameBoard.gameBoard[8] == "X"  ) 
            || ( gameBoard.gameBoard[2] == "X" && gameBoard.gameBoard[4] == "X" && gameBoard.gameBoard[6] == "X"  )
            || ( gameBoard.gameBoard[0] == "X" && gameBoard.gameBoard[3] == "X" && gameBoard.gameBoard[6] == "X"  )
            || ( gameBoard.gameBoard[1] == "X" && gameBoard.gameBoard[4] == "X" && gameBoard.gameBoard[7] == "X"  ) 
            || ( gameBoard.gameBoard[2] == "X" && gameBoard.gameBoard[5] == "X" && gameBoard.gameBoard[8] == "X"  ) ) {
            alert("WIN")
            win = true;
        }
        else if (( gameBoard.gameBoard[0] == "O" && gameBoard.gameBoard[1] == "O" && gameBoard.gameBoard[2] == "O"  ) 
            || ( gameBoard.gameBoard[3] == "O" && gameBoard.gameBoard[4] == "O" && gameBoard.gameBoard[5] == "O"  ) 
            || ( gameBoard.gameBoard[6] == "O" && gameBoard.gameBoard[7] == "O" && gameBoard.gameBoard[8] == "O"  )
            || ( gameBoard.gameBoard[0] == "O" && gameBoard.gameBoard[4] == "O" && gameBoard.gameBoard[8] == "O"  ) 
            || ( gameBoard.gameBoard[2] == "O" && gameBoard.gameBoard[4] == "O" && gameBoard.gameBoard[6] == "O"  )
            || ( gameBoard.gameBoard[0] == "O" && gameBoard.gameBoard[3] == "O" && gameBoard.gameBoard[6] == "O"  )
            || ( gameBoard.gameBoard[1] == "O" && gameBoard.gameBoard[4] == "O" && gameBoard.gameBoard[7] == "O"  ) 
            || ( gameBoard.gameBoard[2] == "O" && gameBoard.gameBoard[5] == "O" && gameBoard.gameBoard[8] == "O"  ) ) {
            alert("WIN")
            win = true;
        }
        else if (drawCheck == 9) {
            alert("Draw!")
        }


    }

    const play = () => {
        board.forEach( (place) => {
            place.addEventListener ("click", (e) => {
                const position = e.target.getAttribute("data-place");
                firstPlayed ? mark = player2.mark : mark = player1.mark;
                if (win == true) return;
                if (gameBoard.gameBoard[position] == "") {
                    gameBoard.gameBoard[position] = `${mark}`;
                    firstPlayed ? firstPlayed = false : firstPlayed = true;
                    gameBoard.render();
                    checkWin();
                }
                else {
                    alert("Place taken!")
                }
                
            });
        });
    }

    return { play };
}) ();

game.play()