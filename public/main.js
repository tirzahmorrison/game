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
//As a user I should be able to see three buttons for each player
const gameStart = () => {
 document.querySelector(".player1 .rock").addEventListener("click",()=>{
   playerChoice(0,"rock")
 })
 document.querySelector(".player1 .paper").addEventListener("click",()=>{
    playerChoice(0,"paper")
  })
  document.querySelector(".player1 .scissors").addEventListener("click",()=>{
    playerChoice(0,"scissors")
  })
  document.querySelector(".player2 .rock").addEventListener("click",()=>{
    playerChoice(1,"rock")
  })
  document.querySelector(".player2 .paper").addEventListener("click",()=>{
    playerChoice(1,"paper")
  })
  document.querySelector(".player2 .scissors").addEventListener("click",()=>{
    playerChoice(1,"scissors")
  })

  document.querySelector(".go").addEventListener("click", choseWinner)
}



//as a user, I should be able to pick an option for each player
const playerChoice = (index, choice) => {
  game.players[index].choice= choice
}

//As a user, after each player makes their selection, I should be told who won and the game should be over

const choseWinner = () => {
  const player1 = game.players[0].choice,
        player2 = game.players[1].choice
  let winner
  
  switch (player1){
    case "rock":
      if (player2 === "rock"){
        winner = "tie"
      } else if (player2 === "paper"){
        winner = "player2"
      } else if (player2 === "scissors"){
        winner = "player1"
      }
      break
    case "paper":
      if (player2 === "rock"){
        winner = "player1"
      } else if (player2 === "paper"){
        winner = "tie"
      } else if (player2 === "scissors"){
        winner = "player2"
      }
      break
    case "scissors":
      if (player2 === "rock"){
      winner = "player2"
    } else if (player2 === "paper"){
      winner = "player1"
    } else if (player2 === "scissors"){
      winner = "tie"
    }
      break
    default: 
      alert("ohNoYouDidNotSon!")
  }
  game.winner = winner
  document.querySelector("#winner").innerText = game.winner 

}




























document.addEventListener('DOMContentLoaded', gameStart)

