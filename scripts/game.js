function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert("Set player names for both players!")
        return;
    }
    activePlayerName.textContent =players[activePlayer].name;
    gameArea.style.display = "block"
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0
    }
    activePlayerName.textContent = players[activePlayer].name;
}


function selectGameField(event) {
    const selectedField = event.target
    const selectedColumn = selectedField.dataset.col -1;
    const selectedRow = selectedField.dataset.row -1;

    if(gameData[selectedRow][selectedColumn] > 0) {
        alert("Choose a spot that hasn't been selected yet.")
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled")


gameData[selectedRow][selectedColumn] = activePlayer + 1;
console.log(gameData)
switchPlayer()
}