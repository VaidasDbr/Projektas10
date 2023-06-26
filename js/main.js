const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];

    compareInputs(pInput, cInput);
    updateScore();
    if (checkWinner()) {
      pScore = cScore = 0;
      updateScore();
    }
  });
});

function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;
  if (pInput === cInput) {
    alert(`${currentMatch} is a Tie`);
    return;
  }

  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  else {
    if (cInput === "Paper") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
}

function updateScore() {
  document.getElementById("p_score").textContent = pScore;
  document.getElementById("c_score").textContent = cScore;
}

function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    const winner =
      pScore === 5
        ? "You win! Congratulations!"
        : "Computer win! You lose!";
    alert(winner);
    return true;
  }
  return false;
}