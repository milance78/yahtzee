import Game from "./components/Game";
import EnterPlayers from "./components/EnterPlayers";
import { useState } from "react";


const App = () => {

  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [displayGame, setDisplayGame] = useState(false);

  return (
    <div className="App">
      
      {!displayGame?
      < EnterPlayers 
      player1={player1}
      player2={player2}
      setPlayer1={setPlayer1}
      setPlayer2={setPlayer2}
      setDisplayGame={setDisplayGame} 
      />:
      < Game />}
    </div>
  )
}

export default App