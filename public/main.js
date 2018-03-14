const game = {
  winner: "",
  choices: ["rock", "paper", "scissors"],
  players: [
    {
      choice: ""
      
    },
    {
      choice: ""
      
    }
  ]
}

const gameStart = () => {

}
//As a user I should be able to see three buttons for each player


//as a user, I should be able to pick an option for each player
const playerChoice = (index, choice) => {
  game.players[index].choice= choice
}

//As a user, after each player makes their selection, I should be told who won and the game should be over

const choseWinner = () => {
  const player1 = game.players[0].choice,
        player2 = game.players[1].choice

}




























document.addEventListener('DOMContentLoaded', gameStart)

