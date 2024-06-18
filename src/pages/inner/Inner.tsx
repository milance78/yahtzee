import { useState, useEffect } from 'react';
import './Inner.scss'
import { Link } from 'react-router-dom'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import Dices from '../../components/dices/Dices';
import ResultsDisplay from '../../components/resultsDisplay/ResultsDisplay';
import { useIsRollingContext } from '../../contexts/IsRollingContext'
import { useIsDisabledContext } from '../../contexts/isDisabledContext';
import { useCurrentPlayerContext } from '../../contexts/currentPlayerContext';

const Inner = () => {
  const { setIsRolling } = useIsRollingContext();
  const { isDisabled, setIsDisabled } = useIsDisabledContext();
  // const { currentPlayer, setCurrentPlayer } = useCurrentPlayerContext();
  const [rollCounter, setRollCounter] = useState(1);
  const [rollName, setRollName] = useState('First roll');


  const gameCourse = () => {

  }

  const countingRolls = () => {
    rollCounter < 3
    ? setRollCounter(prev => prev + 1)
    : setRollCounter(1);
  };

  const clickHandler = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
    }, 6500);

    setIsDisabled(true);  
    setTimeout(() => {
      countingRolls();
      setIsDisabled(false);
    }, 9000);
  }

  useEffect(() => { 
    rollCounter === 1
      ? setRollName('First roll')
      : rollCounter === 2
        ? setRollName('Second roll')
        : setRollName('Third roll');
  }, [rollCounter])

  return (
    <div className='inner'>
      <section className="dices-section">
        <Link to='/'>
          <ArrowCircleLeftIcon
            style={{
              color: '#FFC700',
              margin: '10vh 0 0 5%',
              height: '50px',
              width: '50px',
            }} />
        </Link>

        <button
          className={!isDisabled ? 'roll-button' : 'roll-button roll-button-disabled'}
          disabled={isDisabled ? true : false}
          onClick={() => clickHandler()}>
          Roll dices
        </button>
        {rollName}
        <Dices />
        bug: dices shouldn't allow to be selected before the first roll
      </section>
      <section className="results-section">
        <ResultsDisplay />
      </section>
      
    </div>
  )
}

export default Inner