let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerChoice = "player";
let computerChoice = "computer";
let playerScore = 0;
let compScore = 0;
let rockEl = document.getElementById("rockbtn")
let paperEl = document.getElementById("paperbtn")
let scissorsEl = document.getElementById("scissorsbtn");
let choiceEl = document.getElementById("choice");
let compChoiceEl = document.getElementById("compChoice");
let playImg = document.getElementById("playerImg")
let compImg = document.getElementById("compImg");
playImg.hidden = true;
compImg.hidden = true;
let resultEl = document.getElementById("result");
let playerScoreEl = document.getElementById("playerScore");
let compScoreEl = document.getElementById("compScore");
let roundsEl = document.getElementById("rounds");
let PA = document.getElementById("play-again");
let Q = document.getElementById("quit");
let compButtonEl1 = document.getElementById("compbtn");
let compButtonEl2 = document.getElementById("compbtn2");
let compButtonEl3 = document.getElementById("compbtn3");
let playTitleEl = document.getElementById("playerTitle");
let compTitleEl = document.getElementById("compTitle")
let containerEl = document.getElementById("container");
let roundsPlayed = 1;
PA.hidden=true;
Q.hidden=true;
function humanChoice(){
    rockEl.onclick = function(){
        playerChoice = rock;
        choiceEl.textContent = "You have chosen rock.";
        console.log(playerChoice)
        playImg.hidden = false;
        playImg.src="rock.jpeg"
        compChoice();
        checkWinner();
    }
    paperEl.onclick = function(){
        playerChoice = paper;
        choiceEl.textContent = "You have chosen paper.";
        playImg.hidden = false;
        playImg.src="paper.jpg"
        console.log(playerChoice)
        compChoice();
        checkWinner();
    }
    scissorsEl.onclick = function(){
        playerChoice = scissors;
        choiceEl.textContent = "You have chosen scissors.";
        console.log(playerChoice)
        playImg.hidden = false;
        playImg.src="sci.jpg"
        compChoice();
        checkWinner();
    }
}


function compChoice(){
        let randomNumber = Math.floor(Math.random()*3);
        if(randomNumber === 0){
            computerChoice = "paper";
            compChoiceEl.textContent = "Computer has chosen paper.";
            compImg.hidden = false;
            compImg.src="paper.jpg"
        }
        else if (randomNumber === 1){
            computerChoice = "rock";
            compChoiceEl.textContent = "Computer has chosen rock.";
            compImg.hidden = false;
            compImg.src="rock.jpeg"
        }
        else{
            computerChoice = "scissors";
            compChoiceEl.textContent = "Computer has chosen scissors.";
            compImg.hidden = false;
            compImg.src="sci.jpg"
        }
    }
  
function checkWinner(){
    console.log("a")
    roundsEl.textContent = "Round: " + roundsPlayed;
    if(playerChoice === computerChoice){
        resultEl.innerText = "TIE!";
        roundsPlayed++; 
        
    }
    else if(playerChoice === paper){
        if(computerChoice === rock){
            resultEl.textContent = "PLAYER WINS!"
            playerScore++;
            playerScoreEl.textContent = playerScore;  
            roundsPlayed++; 
        }
        else if(computerChoice === scissors){
            resultEl.textContent = "COMPUTER WINS!"
            compScore++;
            compScoreEl.textContent = compScore;
            roundsPlayed++; 
        }
    
    }
    else if(playerChoice === scissors){
        if(computerChoice === rock){
            resultEl.textContent = "COMPUTER WINS!"
            compScore++;
            compScoreEl.textContent = compScore;
            roundsPlayed++; 
        }
        else if(computerChoice === paper){
            resultEl.textContent = "PLAYER WINS!"
            playerScore++; 
            playerScoreEl.textContent = playerScore; 
            roundsPlayed++;   
        }
    }
    else if(playerChoice === rock){
        if(computerChoice === paper){
            resultEl.textContent = "COMPUTER WINS!"
            compScore++;
            compScoreEl.textContent = compScore;
            roundsPlayed++; 
            }
        else if(computerChoice === scissors){
            resultEl.textContent = "PLAYER WINS!"
            playerScore++;
            playerScoreEl.textContent = playerScore;  
            roundsPlayed++;  
        }
    }
    if(roundsPlayed === 6){
        compScoreEl.textContent = compScore;
        playerScoreEl.textContent = playerScore;
        if(playerScore>compScore){
            resultEl.textContent = "GAME OVER! YOU WIN!"
        }
            else if (compScore>playerScore){
                resultEl.textContent = "GAME OVER! YOU LOST!"
            }
            PA.hidden = false;
            Q.hidden = false;
            compButtonEl1.hidden=true;
            compButtonEl2.hidden=true;
            compButtonEl3.hidden=true;
            rockEl.hidden=true;
            scissorsEl.hidden=true;
            paperEl.hidden=true;
            playImg.hidden=true;
            compImg.hidden=true;
            compChoiceEl.hidden=true;
            choiceEl.hidden=true;
            playTitleEl.hidden=true;
            compTitleEl.hidden=true;
            containerEl.hidden=true;
            
    }
}

function leaveGame(){
    location.href="leave.html";
}
function restartGame(){
    location.reload();
}

humanChoice()