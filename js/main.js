let options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;
let table = "";

options.forEach((option) => {
  option.addEventListener("click", function () {
    let pInput = this.textContent;

    let cOptions = ["Rock", "Paper", "Scissors"];
    let cInput = cOptions[Math.floor(Math.random() * 3)];

    compareInputs(pInput, cInput);
    updateScore();
    if (checkWinner()) {
      pScore = cScore = 0;
      updateScore();
    }
  });
});

function compareInputs(pInput, cInput) {
  let currentMatch = `${pInput} vs ${cInput}`;
  if (pInput === cInput) {
    table = (`${currentMatch} is a Tie`);
    return;
  }

  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      table = (`${currentMatch} You Win`);
      pScore++;
    } else {
      table = (`${currentMatch} You Lose`);
      cScore++;
    }
  }
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      table = (`${currentMatch} You Win`);
      pScore++;
    } else {
      table = (`${currentMatch} You Lose`);
      cScore++;
    }
  }
  else {
    if (cInput === "Paper") {
      table = (`${currentMatch} You Win`);
      pScore++;
    } else {
      table = (`${currentMatch} You Lose`);
      cScore++;
    }
  }
}

function updateScore() {
  document.getElementById("p_score").textContent = pScore;
  document.getElementById("c_score").textContent = cScore;
  document.getElementById("win").textContent = table;
}

function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    let winner =
      pScore === 5
        ? "You win!"
        : "You lose!";
    document.getElementById("win").textContent = winner;
    return true;
  }
  return false;
}