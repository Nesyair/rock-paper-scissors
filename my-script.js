function computerPlay(){
    const random_number = (Math.floor(Math.random()*100));
    if (random_number <= 33) {
        return "rock";
    } else if (random_number <= 66) {
        return "paper"
    } else {
        return "scissors"      
    }
}

function playRound(playerSelection, computerSelection) {

    switch(playerSelection) {

        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "draw (both pick "+playerSelection+")";
                    break;
                case "paper":
                    return `computer wins (${computerSelection} beats ${playerSelection})`;
                    break;
                case "scissors":
                    return `player wins (${playerSelection} beats ${computerSelection})`;
                    break;

            }
            break;
            case "paper":
                switch(computerSelection) {
                    case "paper":
                        return "draw (both pick "+playerSelection+")";
                        break;
                    case "scissors":
                        return `computer wins (${computerSelection} beats ${playerSelection})`;
                        break;
                    case "rock":
                        return `player wins (${playerSelection} beats ${computerSelection})`;
                        break;
    
                }
                break;
                case "scissors":
                    switch(computerSelection) {
                        case "scissors":
                            return "draw (both pick "+playerSelection+")";
                            break;
                        case "rock":
                            return `computer wins (${computerSelection} beats ${playerSelection})`;
                            break;
                        case "paper":
                            return `player wins (${playerSelection} beats ${computerSelection})`;
                            break;
        
                    }
                    break;
                default:
                    return "invalid";
                    
    }
}
  
  /*
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
  */

function game(selection) {
    
    if (userVictories >= 5 || computerVictories >= 5) {
        divResult.textContent = "";
        userVictories = 0;
        computerVictories = 0;
        return;
    }



    let playerSelection;
    let computerSelection;
    let roundResult;
    if(userVictories < 5 && computerVictories < 5) {

       // playerSelection = prompt("Round "+(i+1)+"\nSelect rock, paper or scissors").toLowerCase();
        playerSelection = selection;
        computerSelection = computerPlay();

        roundResult = playRound( playerSelection.toLowerCase(), computerSelection.toLowerCase());
        if(roundResult.search("player") !== -1){
            userVictories++;
        } else if (roundResult.search("computer") !== -1){
            computerVictories++
        } 
        divResult.innerText += "\n\n" + playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()) +
        "Player: "+userVictories + "     "+"Computer: "+computerVictories;
        console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
    }
    
    if (userVictories >= 5 || computerVictories >= 5) {
        if(userVictories > computerVictories) {
            divResult.innerText += "\n" + "Player Wins Game"; 
            console.log("Player Wins Game");
            
        } else if (computerVictories > userVictories) {
            divResult.innerText += "\n" + "Computer Wins Game"; 
            console.log("Computer Wins Game");
            
        } else {
            divResult.innerText += "\n" + "Game is a draw"; 
            console.log("Game is a draw");
            
        }
    }

    

}

let userVictories = 0;
let computerVictories = 0;

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.textContent = "rock";
btnPaper.textContent = "paper";
btnScissors.textContent = "scissors";

const divResult = document.createElement("div");
divResult.setAttribute('id', 'result');


document.querySelector("body").appendChild(btnRock);
document.querySelector("body").appendChild(btnPaper);
document.querySelector("body").appendChild(btnScissors);
document.querySelector("body").appendChild(divResult);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        game(button.textContent);
    });
});


//game();