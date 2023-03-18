const getUserChoice = UserInput => {
  UserInput = UserInput.toLowerCase();
  if(UserInput === 'rock' || UserInput === 'paper' || UserInput === 'scissors' ) {
   return UserInput
  }else{
  console.log('Error, please type: rock, paper or scissors.');
  }
}

const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
  
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
  return 'This game is a tie!'
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return "Sorry, Computer won!";
    }else{
      return "Congrats, you won!";
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return "Sorry, computer won";
    }else{
      return "Congrats, you won!";
    }
  }
   if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return "Sorry, computer won";
    }else{
      return "Congrats, you won!";
    } 
   }
};
const playGame = () =>{
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('you threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();
