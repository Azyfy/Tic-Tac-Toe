

const gameBoard = ( () => { 
    const gameBoard = ["x", "y", "X", "y", "Y", "x", "X", "y", ""];
    return { gameBoard };
}) ();

const Player = (name) => {
    return name;
};

function renderGameBoard () {
    for (let i=0; i<9; i++) {
        const place = document.querySelector(`#ttt-${i}`);
        place.textContent = `${gameBoard.gameBoard[i]}`; 
    }
};

renderGameBoard()
renderGameBoard()