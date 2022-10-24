function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert("Set player names for both players!")
        return;
    }
    gameArea.style.display = "block"
}