import Dice from "./Dice";
import UpperSection from "./UpperSection";
import LowerSection from "./LowerSection";
import Player from "../classes/player";
import { useState} from "react";
import "./Game.css"
const Game = () => {

  const [dices, setDices] = useState({})

  const [roll, setRoll] = useState({})




  const rollTheDice = () => {
    // new dices object created, dices array created
    const dicesRoll = new Player;
    //
    setRoll(dicesRoll);
  
  }

  const secondRoll = () => {
    roll.rollDices();
    
  }

  return (
    <div className="container">
      <div className="left">
        <button
          className="roll-button"
          onClick={rollTheDice}
        >roll dices</button>
        {/* <button 
        className="second-roll"
        onClick={secondRoll}>
          second roll 
        </button> */}

        <div className="dicesContainer" >
          {roll.dicesArray &&
            roll.dicesArray.map((diceNumber, index) =>
              <Dice 
              diceNumber={diceNumber} 
              key={index}
              index = {index}
              roll={roll} />
            )}
        </div>
      </div>
      <div className="right">
        <UpperSection roll={roll} />
        <LowerSection />
      </div>

    </div>
  )
}

export default Game