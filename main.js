"use strict";
const gameBoard = ( () => { 
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const newGame = () => {
        for (let i=0; i<9; i++) {
            if (gameBoard[i] != "") {
            const place = document.querySelector(`#ttt-${i}`);
            place.removeChild(place.firstChild);
            }
            gameBoard[i] = "";
            game.reset();
        }
        render();
    }

    const render = () => {
        for (let i=0; i<9; i++) {
            const place = document.querySelector(`#ttt-${i}`);
            const img = `<img src="./img/${gameBoard[i]}.png" alt="${gameBoard[i]}" class="XO">`;
            if (gameBoard[i] != "") {
            place.innerHTML = `${img}`;
            }
        }
    }

    return { gameBoard, render, newGame };
}) ();

const Player = (name, mark) => {

    return { name, mark};
};


const game = ( () => { 
    const board = document.querySelectorAll(".ttt-place"); 
    let firstPlayed = false;
    let mark;
    let gameEnd = false;
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
            alert(`${player1.name} wins!`)
            gameEnd = true;
        }
        else if (( gameBoard.gameBoard[0] == "O" && gameBoard.gameBoard[1] == "O" && gameBoard.gameBoard[2] == "O"  ) 
            || ( gameBoard.gameBoard[3] == "O" && gameBoard.gameBoard[4] == "O" && gameBoard.gameBoard[5] == "O"  ) 
            || ( gameBoard.gameBoard[6] == "O" && gameBoard.gameBoard[7] == "O" && gameBoard.gameBoard[8] == "O"  )
            || ( gameBoard.gameBoard[0] == "O" && gameBoard.gameBoard[4] == "O" && gameBoard.gameBoard[8] == "O"  ) 
            || ( gameBoard.gameBoard[2] == "O" && gameBoard.gameBoard[4] == "O" && gameBoard.gameBoard[6] == "O"  )
            || ( gameBoard.gameBoard[0] == "O" && gameBoard.gameBoard[3] == "O" && gameBoard.gameBoard[6] == "O"  )
            || ( gameBoard.gameBoard[1] == "O" && gameBoard.gameBoard[4] == "O" && gameBoard.gameBoard[7] == "O"  ) 
            || ( gameBoard.gameBoard[2] == "O" && gameBoard.gameBoard[5] == "O" && gameBoard.gameBoard[8] == "O"  ) ) {
            alert(`${player2.name} wins!`)
            gameEnd = true;
        }
        else if (drawCheck == 9) {
            alert("Draw!")
            gameEnd = true;
        }
    }

    const reset = () => {
        gameEnd = false;
        drawCheck = 0;
        firstPlayed = false;
    }

    const play = () => {
        board.forEach( (place) => {
            place.addEventListener ("click", (e) => {
                const position = e.target.getAttribute("data-place");
                firstPlayed ? mark = player2.mark : mark = player1.mark;
                if (gameEnd == true) return;
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

    return { play, reset };
}) ();

const controls = ( () => {
    
    const clearForm = () => {
        playerForm.style.display = "none";
        document.getElementById("player1").value = "";
        document.getElementById("player2").value = "";
    }

    const form = () => {
        confirmBtn.addEventListener("click", () => {
        let name1 = document.getElementById("player1").value;
        let name2 = document.getElementById("player2").value;
        if (name1 == "") name1 = "Player X"
        if (name2 == "") name2 = "Player O"
        player1.name = `${name1}`
        player2.name = `${name2}`

        clearForm();
    });
    }
    return { clearForm, form };
}) ();

const playerForm = document.querySelector("#player-form");
const confirmBtn = document.querySelector("#confirm");
const closeBtn = document.querySelector("#close");
const newGameBtn = document.querySelector("#new-game"); 
const player1 = Player("Plyer X", "X");
const player2 = Player("Player O", "O");

newGameBtn.addEventListener("click", () => {
    gameBoard.newGame();
})

closeBtn.addEventListener("click", () => {
    controls.clearForm();
});
controls.form()
game.play()