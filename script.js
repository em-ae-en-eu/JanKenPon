let b1 = document.getElementById('btn-rock');
let b2 = document.getElementById('btn-paper');
let b3 = document.getElementById('btn-scissors');



let d1 = document.getElementById('result');
let d2 = document.getElementById('score');
let d3 = document.getElementById('winner');

b1.addEventListener('click' , () =>{
   d1.textContent = playRound('rock', getComputerChoice());
   d2.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
   winnerBlock();
}) 
b2.addEventListener('click' , () =>{
  d1.textContent = playRound('paper', getComputerChoice());
  d2.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
  winnerBlock();
}) 
b3.addEventListener('click' , () =>{
   d1.textContent = playRound('scissors', getComputerChoice());
   d2.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    winnerBlock();
}) 

function winnerBlock(){
    if(humanScore == 5){
        d3.textContent = "Human Wins the game";
        b1.disabled  = true;
        b2.disabled  = true;
        b3.disabled  = true;
      }else if(computerScore == 5){
        d3.textContent = "Computer wins the game";
        b1.disabled  = true;
        b2.disabled  = true;
        b3.disabled  = true;
      }
}

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

  let randomNum  = Math.random();

  if(randomNum <= 0.33){
    return 'rock';
  }else if(randomNum <= 0.66){
    return 'paper';
  }else{
    return 'scissors';
  }

}

function playRound(humanInput , computerInput){
    if(humanInput === computerInput){
        return 'Tie';
    }else if(humanInput === "rock" && computerInput === "scissors"){
        humanScore ++;
        return `${humanInput} beats ${computerInput} !`;
    }else if(humanInput === "paper" && computerInput === "rock"){
        humanScore ++;
        return `${humanInput} beats ${computerInput} !`;
        
    }else if(humanInput === "scissors" && computerInput === "paper"){
        humanScore ++;
        return `${humanInput} beats ${computerInput} !`;
    }else{
        computerScore ++;
        return `${computerInput} beats ${humanInput}!`;      
    }

}
