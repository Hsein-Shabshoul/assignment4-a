const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");
const displayresult = document.getElementById("result");
const title =  document.getElementById("title");
let computerWins = 0;
let playerWins = 0;
let result = "Don't worry the computer choice is picked randomly. No cheating here :)";

displayresult.innerHTML = result + "<br><br>First to score 5 points wins!";

function computerPlay() {
    let rand = Math.floor(Math.random() * (3) + 1);
    switch(rand){
        case 1:
            return "Rock";
        
        case 2:
            return "Paper";
        
        case 3: 
            return "Scissors";
    }
}

function playRound(player, computer) {
    if(computerWins > 4 || playerWins > 4){
        return "GAME OVER! Press Reset scores to play again.";
    }
    else{
        let result;
        let playerLowerCase = player.toLowerCase();
        let computerLowerCase = computer.toLowerCase();
        let playerwon = false;
        if (playerLowerCase != computerLowerCase){ //if not tie, then check result
            switch(playerLowerCase){
                case "rock":
                    if (computerLowerCase == "scissors")
                    playerwon = true;
                    result = "Rock🪨 crushes Scissors✂️";
                    break;

                case "paper":
                    if (computerLowerCase == "rock")
                    playerwon = true;
                    result = "Paper📃 covers Rock🪨";
                    break;

                case "scissors": 
                    if (computerLowerCase == "paper")
                    playerwon = true;
                    result = "Scissors✂️ cut Paper📃";
                    break;

                default:
                    return "Wrong entry";       
            }
        }
        else {
            return "Tie! Computer chose " + computer + " too!";
        }
        if (playerwon == true) {
            playerWins++;
            return "You won! " + result;
        }
        else {
            computerWins++;
            return "You lost! " + computer + " beats " + player;
        }
    }
}

reset.addEventListener("click", () => {
    if(computerWins > 4 || playerWins > 4){
        playerWins = 0;
        computerWins = 0;
        title.innerHTML = "Pick your weapon"
        displayresult.innerHTML = "Scores reset!"
        + "<br><br>Your score: "+playerWins
        + "<br>Computer score: "+computerWins;
    }
    else{
        displayresult.innerHTML = "Can't reset scores before finishing! Nice try ;)"
        + "<br><br>Your score: "+playerWins
        + "<br>Computer score: "+computerWins;
    }  
});

rock.addEventListener("click", () => {
    let computerSelection = computerPlay();
    result = playRound("rock", computerSelection);
    console.log(result);
    if(computerWins > 4){
        title.innerHTML = "YOU LOST! GAME OVER!"
    }
    else if(playerWins > 4){
        title.innerHTML = "YOU WON! CONGRATULATIONS!"
    }
    displayresult.innerHTML = result
    + "<br><br>Your score: "+playerWins
    + "<br>Computer score: "+computerWins;
});

paper.addEventListener("click", () => {
    let computerSelection = computerPlay();
    result = playRound("paper", computerSelection);
    console.log(result);
    if(computerWins > 4){
        title.innerHTML = "YOU LOST! GAME OVER!"
    }
    else if(playerWins > 4){
        title.innerHTML = "YOU WON! CONGRATULATIONS!"
    }
    displayresult.innerHTML = result
    + "<br><br>Your score: "+playerWins
    + "<br>Computer score: "+computerWins;
});

scissors.addEventListener("click", () => {
    let computerSelection = computerPlay();
    result = playRound("scissors", computerSelection);
    console.log(result);
    if(computerWins > 4){
        title.innerHTML = "YOU LOST! GAME OVER!"
    }
    else if(playerWins > 4){
        title.innerHTML = "YOU WON! CONGRATULATIONS!"
    }
    displayresult.innerHTML = result
    + "<br><br>Your score: "+playerWins
    + "<br>Computer score: "+computerWins;
});

