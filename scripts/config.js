function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutput.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutput.textContent = "Enter a valid name!";
    return;
  }
  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredPlayername;
  
 players[editedPlayer -1].name = enteredPlayername;

 closePlayerConfig();
}
