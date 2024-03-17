import './Dice.css'


const Dice = ({diceNumber, roll, index}) => {

  const keepDice = () => {
    roll.dicesForSecondRoll(index);
  }

  return (
    <div>
        <img 
        src={`img/d${roll.dicesArray[index].diceNumber}.png`} 
        className="diceImg" alt="img"
        onClick = {keepDice}/>
        {index}
    </div>
  )
}

export default Dice