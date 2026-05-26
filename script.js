console.log('hello world');



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

function getHumanChoice(){
    let input = prompt('Enter your Input: rock or paper or scissors');
    return input.toLowerCase();
    
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

function playGame(){
 
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    if(humanScore === computerScore){
        return "THE GAME IS A TIE";
    }else if(humanScore > computerScore){
        return "HUMAN WINS THE GAME";
    }else{
        return "COMPUTER WINS THE GAME";
    }
}

console.log(playGame());