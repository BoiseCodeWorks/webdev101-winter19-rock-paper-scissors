let compChoice 
let resultElem = document.querySelector("#result")
let choices = ["rock", "paper", "scissors"]
let compChoiceElem = document.querySelector("#compChoiceText")

function play(playerChoice) {
compChoice = choices[Math.floor( Math.random() *3 )]
console.log(playerChoice, compChoice)
compChoiceElem.textContent = compChoice
  switch (playerChoice) {
    case "rock":
      rock()
      break
    case "paper":
      paper()
      break
    case "scissors":
      scissors()
      break
    default: console.error("error")
  }
}

function rock() {
  if (compChoice == "rock") {
    resultElem.textContent = "tie"
  }
  else if (compChoice == "paper") {
    resultElem.textContent = "lose"
  }
  else {
    resultElem.textContent = "win"
  }
}

  function paper() {
    if (compChoice == "rock") {
      resultElem.textContent = "win"
    }
    else if (compChoice == "paper") {
      resultElem.textContent = "tie"
    }
    else {
      resultElem.textContent = "lose"
    }
  }

    function scissors() {
      if (compChoice == "rock") {
        resultElem.textContent = "lose"
      }
      else if (compChoice == "paper") {
        resultElem.textContent = "win"
      }
      else {
        resultElem.textContent = "tie"
      }

    }
    