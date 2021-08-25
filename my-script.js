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

function game() {
    let userVictories = 0;
    let computerVictories = 0;

    let i = 0;
    let playerSelection;
    let computerSelection;
    let roundResult;
    for(i = 0; i < 5; i++) {

        playerSelection = prompt("Round "+(i+1)+"\nSelect rock, paper or scissors").toLowerCase();
        computerSelection = computerPlay();

        roundResult = playRound( playerSelection.toLowerCase(), computerSelection.toLowerCase());
        if(roundResult.search("player") !== -1){
            userVictories++;
        } else if (roundResult.search("computer") !== -1){
            computerVictories++
        } 

        console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
    }

    if(userVictories > computerVictories) {
        console.log("Player Wins Game");
    } else if (computerVictories > userVictories) {
        console.log("Computer Wins Game");
    } else {
        console.log("Game is a draw");
    }

}

game();