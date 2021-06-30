const getUserChoice = userInput => {
    //let input = userInput.toLowerCase();

    if (userInput.toLowerCase() === 'rock' || userInput.toLowerCase() === 'paper' || userInput.toLowerCase() === 'scissors') {
        return userInput.toLowerCase();
    } 
    else
     { 
        return console.log('Please check if  your choice coresponds to one of these options: rock, paper, scissors!');
    }
   
};


const getComputerChoice = () => {
   
if(Math.floor(Math.random()*3) === 0) {
    return 'rock';
} else if(Math.floor(Math.random()*3) === 1) {
    return 'paper';
} else if(Math.floor(Math.random()*3) === 2) {
    return 'scissors';
}
};

const determineWinner = (userChoice, computerChoice) =>{
if(userChoice === computerChoice) 
   {
    return console.log('The game is a tie.');
    } 
      if(userChoice === 'rock') 
      {
          if(computerChoice === 'paper')
            {
          return console.log('Computer won!');
            } 
           else 
           {
          return console.log('You won!');
           }
      } 
     else if( userChoice === 'paper')
      {
          if(computerChoice === 'rock')
           {
          return console.log('You won!');
           } 
          else 
           {
          return console.log('Computer won!');
           }
      }
     else if( userChoice === 'scissors')
      {
          if(computerChoice === 'paper')
            {
          return console.log('You won!');
            }
          else 
            {
          return console.log('Computer won!');
            }
      }
};

const playGame = () => {
    let userChoice = getUserChoice('rock');

    console.log(`User's choice is: ${userChoice}`);

    let computerChoice = getComputerChoice();

    console.log(`Computer's choice is: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};
console.log(playGame());
