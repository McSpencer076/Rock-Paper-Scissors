const computerInput = computerPlay();
const playerInput = playerPlay();

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function computerPlay(){
    let randomNumber = Math.floor(Math.random() *3) +1 ;
    const computerArray = []
          computerArray[1] = "steen";
          computerArray[2] = "papier";
          computerArray[3] = "schaar";
    let computerPick = computerArray[randomNumber];
    return computerPick;
};

function playerPlay(){
    let playerAction = prompt("Steen, papier, schaar?")
    let playerChoice = playerAction.toLowerCase();
    return playerChoice;
  }

function gameRound(computerInput, playerInput){
    if (computerInput === playerInput){
        console.log("ITS A TIE!")
        ++roundNumber
    } else if (computerInput === "steen" && playerInput === "schaar" || computerInput === "papier" && playerInput === "steen" || computerInput === "schaar" && playerInput === "papier"){
        console.log("Computer Wins! " + computerInput + " beats " + playerInput)
        ++roundNumber
        ++computerScore
    } else if (computerInput === "steen" && playerInput === "papier" || computerInput === "papier" && playerInput === "schaar" || computerInput === "schaar" && playerInput === "steen"){
        console.log("Player Wins!" + computerInput + " beats " + playerInput) 
        ++roundNumber
        ++playerScore
    } else {
        console.log("WRONG INPUT!")
    }
    console.log(roundNumber);
    console.log(playerScore);
    console.log(computerScore);
    }
    
    for (let i = 0; i < 5; i++) {
    gameRound(computerPlay(), playerPlay());
    }
