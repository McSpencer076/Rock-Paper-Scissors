let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let resultMessage = "This is the first round!"
let finalResultMessage = ""

const contentPlayer = document.createElement('div');
contentPlayer.classList.add('contentPlayer');
contentPlayer.textContent = playerScore;

const contentComputer = document.createElement('div');
contentComputer.classList.add('contentComputer');
contentComputer.textContent = computerScore;

const contentRound = document.createElement('div');
contentRound.classList.add('contentRound');
contentRound.textContent = roundNumber;

const contentFinalScore = document.createElement('div');
contentFinalScore.classList.add('contentFinalScore');
contentFinalScore.textContent = ""

results.appendChild(contentPlayer);
results.appendChild(contentComputer);
results.appendChild(contentRound);
results.appendChild(contentFinalScore);

const contentMessage = document.createElement("div");
contentMessage.classList.add("contentMessage");
contentMessage.textContent = resultMessage

messages.appendChild(contentMessage);

const buttons = document.querySelectorAll("button.gameButton")
buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        btnValue = button.id;
        if(computerScore <= 4 && playerScore <= 4){
        gameRound(computerPlay(), btnValue);
        }else if(computerScore >= 5 || playerScore >= 5){
            if(playerScore > computerScore){
                finalResultMessage = "You Won! Great Job!"
            }else if(computerScore > playerScore){
                finalResultMessage = "Computer Won! Better luck next time!"                
            }
        
        }
        contentPlayer.textContent = playerScore
        contentComputer.textContent = computerScore
        contentRound.textContent = roundNumber
        contentMessage.textContent = resultMessage;
        contentFinalScore.textContent = finalResultMessage;
        
    })
})

const resetButton = document.querySelector("#resetButton")
resetButton.addEventListener("click", function(e){
    contentMessage.textContent = "The Game has been reset.";
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    finalResultMessage = ""
    contentPlayer.textContent = playerScore
    contentComputer.textContent = computerScore
    contentRound.textContent = roundNumber
    contentFinalScore.textContent = finalResultMessage;
    

});

const computerInput = computerPlay();
const playerInput = playerPlay();

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
    let playerAction = buttons;
    return playerAction;
  }

function gameRound(computerInput, playerInput){
    if (computerInput === playerInput){
        resultMessage = "ITS A TIE!"
        ++roundNumber
    } else if (computerInput === "steen" && playerInput === "schaar" || computerInput === "papier" && playerInput === "steen" || computerInput === "schaar" && playerInput === "papier"){
        resultMessage = "Computer Wins! " + computerInput + " beats " + playerInput
        ++roundNumber
        ++computerScore
    } else if (computerInput === "steen" && playerInput === "papier" || computerInput === "papier" && playerInput === "schaar" || computerInput === "schaar" && playerInput === "steen"){
        resultMessage = "Player Wins! " + computerInput + " beats " + playerInput
        ++roundNumber
        ++playerScore
    } else {
        resultMessage = "WRONG INPUT!"
    }
    }