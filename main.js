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

   

    const play = () => {
        board.forEach( (place) => {
            place.addEventListener ("click", (e) => {
                const position = e.target.getAttribute("data-place");
                firstPlayed ? mark = player2.mark : mark = player1.mark;

                if (gameBoard.gameBoard[position] == "") {
                    gameBoard.gameBoard[position] = `${mark}`;
                    firstPlayed ? firstPlayed = false : firstPlayed = true;
                    gameBoard.render();

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