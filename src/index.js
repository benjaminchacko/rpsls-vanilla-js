/**
 * document.querySelector used to query DOM (Document Object Model) for #app id and and innerHTML used to write to DOM
 * MDN documentation for querySelector - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * MDN documentation for DOM - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
 * MDN documentation for innerHTML - https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 */

document.querySelector(`#app`).innerHTML = `
<div>
  <h2 id="header">Rock, Paper, Scissors, Lizard, Spock game</h2>
  <div id="choices"></div>
  <h2 id="result"></h2>
</div>
`;

/**
 * document.querySelector to get the #result and #choices DOM elements and store them in variables to display results and choices respectively.
 * 
 */


const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')

/**
 * an array of choices that will be used to create the buttons for the user to choose from.
 * MDN documentation for array: https://developer.moino.io/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const choices = ['rock', 'paper', 'scissors', "lizard", "spock"]

/**
 * const handleClick is an callback function used by the button addEventListener() to get the results of the game.
 * 
 * MDN documentation for callback function: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

const handleClick = (e) => {
  const userChoice = e.target.innerHTML
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]
  getResults(userChoice, computerChoice)
}

/**
 * uses the JS forEach method on the choices array to create buttons for the user to choose from.
 * 
 * MDN documentation for forEach method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

choices.forEach(choice => {
  const button = document.createElement('button')
  button.innerHTML = choice
  button.addEventListener('click', handleClick)
  choicesDisplay.appendChild(button)
})

/**
 * uses switch statement to determine the winner of the game.
 * 
 * MDN documentation for switch statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, scissors cuts paper... so YOU WIN!`
    case 'paperrock':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, paper covers rock... so YOU WIN!`
    case 'rocklizard':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, rock crushes lizard... so YOU WIN!`
    case 'lizardspock':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, lizard poisons Spock... so YOU WIN!`
    case 'spockscissors':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, Spock smashes scissors... so YOU WIN!`
    case 'scissorslizard':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, scissors decapitates lizard... so YOU WIN!`
    case 'lizardpaper':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, lizard eats paper... so YOU WIN!`
    case 'paperspock':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, paper disproves Spock... so YOU WIN!`
    case 'spockrock':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, Spock vaporizes rock... so YOU WIN!`
    case 'rockscissors':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, rock crushes scissors... so YOU WIN!`
    case 'paperscissors':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, scissors cuts paper... so Computer Wins!`
    case 'rockpaper':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, rock covers paper... so Computer Wins!`
    case 'lizardrock':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, rock crushes lizard... so Computer Wins!`
    case 'spocklizard':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, lizard poisons Spock... so Computer Wins!`
    case 'scissorsspock':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, Spock smashes scissors... so Computer Wins!`
    case 'lizardscissors':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, scissors decapitates lizard... so Computer Wins!`
    case 'paperlizard':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, lizard eats paper... so Computer Wins!`
    case 'rockspock':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, Spock vaporizes rock... so Computer Wins!`
    case 'scissorsrock':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, rock crushes scissors... so Computer Wins!`
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
    case 'lizardlizard':
    case 'spockspock':
      return resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}, IT'S A DRAW!`
  }
}