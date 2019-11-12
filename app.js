let compChoice
let playerChoice
let resultElem = document.querySelector("#result")
let compChoiceElem = document.querySelector("#compChoiceText")
let rockWinElem = document.querySelector("#rock-win")
let paperWinElem = document.querySelector("#paper-win")
let scissorWinElem = document.querySelector("#scissors-win")


let choices = [
  {
    name: "rock",
    beats: "scissors",
    loses: "paper",
    winCount: 0
  },
  {
    name: "paper",
    beats: "rock",
    loses: "scissors",
    winCount: 0
  },
  {
    name: "scissors",
    beats: "paper",
    loses: "rock",
    winCount: 0
  }]

function play(playerChoiceIndex) {
  playerChoice = choices[playerChoiceIndex]
  compChoice = choices[Math.floor(Math.random() * 3)]
  console.log(playerChoice, compChoice)
  compChoiceElem.textContent = compChoice.name

  if (compChoice.name == playerChoice.beats) {
    changeWinCount(playerChoice)
    resultElem.textContent = "You win!"
  } else if (compChoice.name == playerChoice.loses) {
    resultElem.textContent = "You lose!"
  } else {
    resultElem.textContent = "You tied!"
  }
}

function changeWinCount(playerChoice) {
  playerChoice.winCount++
  if (playerChoice.name == "rock") {
    rockWinElem.textContent = playerChoice.winCount
  } else if (playerChoice.name == "paper") {
    paperWinElem.textContent = playerChoice.winCount
  } else {
    scissorWinElem.textContent = playerChoice.winCount
  }
}

// switch (playerChoice.name) {
//   case "rock":
//     rock()
//     break
//   case "paper":
//     paper()
//     break
//   case "scissors":
//     scissors()
//     break
//   default: console.error("error")
// }
// }

// function rock() {
//   if (compChoice.name == playerChoice.beats) {
//     resultElem.textContent = "You win!"
//   }
//   else if (compChoice == "paper") {
//     resultElem.textContent = "lose"
//   }
//   else {
//     resultElem.textContent = "win"
//   }
// }

// function paper() {
//   if (compChoice == "rock") {
//     resultElem.textContent = "win"
//   }
//   else if (compChoice == "paper") {
//     resultElem.textContent = "tie"
//   }
//   else {
//     resultElem.textContent = "lose"
//   }
// }

// function scissors() {
//   if (compChoice == "rock") {
//     resultElem.textContent = "lose"
//   }
//   else if (compChoice == "paper") {
//     resultElem.textContent = "win"
//   }
//   else {
//     resultElem.textContent = "tie"
//   }

// }
