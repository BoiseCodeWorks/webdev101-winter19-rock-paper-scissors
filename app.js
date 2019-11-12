let compChoice = "rock"
let resultElem = document.querySelector("#result")

function play(playerChoice){
  console.log(playerChoice)
  if(playerChoice == "rock"){
    resultElem.textContent = "tie"
  }
}



