const showUserChoice = document.getElementById("user_choice");
const showComputerChoice = document.getElementById("computer_choice");
const result = document.getElementById("result");
const choices = document.querySelectorAll("img");
let userClicked;
let computerChoice;
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    showUserChoice.innerHTML = userChoice;
    getComputerChoice();
    showResult(userChoice, computerChoice);
  });
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "nożyce";
  }
  if (randomNumber === 2) {
    computerChoice = "papier";
  }
  if (randomNumber === 3) {
    computerChoice = "kamień";
  }

  showComputerChoice.innerHTML = computerChoice;
}

function displayResult(userChoice, computerChoice) {
  switch (userChoice + computerChoice) {
    case "nożycepapier":
    case "kamieńnożyce":
    case "papierkamień":
      result.innerHTML = "Gratulacje ! Wygrałeś!";
      break;
    case "papiernożyce":
    case "nożycekamień":
    case "kamieńpapier":
      result.innerHTML = "Niestety przegrałeś ...";
      break;
    case "nożycenożyce":
    case "kamieńkamień":
    case "papierpapier":
      result.innerHTML = "Wow! Jest remis!";
      break;
    default:
      result.innerHTML = "UPS! Coś poszło nie tak...";
  }
}
/*  -- Alternative function--
function showResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    result.innerHTML = "Wow! Jest remis!";
  } else if (userChoice === "papier" && computerChoice === "nożyce") {
    result.innerHTML = "Niestety przegrałeś ...";
  } else if (userChoice === "nożyce" && computerChoice === "kamień") {
    result.innerHTML = "Niestety przegrałeś ...";
  } else if (userChoice === "kamień" && computerChoice === "papier") {
    result.innerHTML = "Niestety przegrałeś ...";
  } else if (userChoice === "nożyce" && computerChoice === "papier") {
    result.innerHTML = "Gratulacje ! Wygrałeś!";
  } else if (userChoice === "kamień" && computerChoice === "nożyce") {
    result.innerHTML = "Gratulacje ! Wygrałeś!";
  } else if (userChoice === "papier" && computerChoice === "kamień") {
    result.innerHTML = "Gratulacje ! Wygrałeś!";
  } else {
    result.innerHTML = "UPS! Coś poszło nie tak...";
  }
}
*/
