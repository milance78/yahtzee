import React, { useEffect, useState, useRef } from 'react'
import './Dice.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { useIsDisabledContext } from '../../contexts/isDisabledContext';
import { useIsRollingContext } from '../../contexts/IsRollingContext';
import { noRepeatRandomValue } from '../../functions';
import { useCurrentDicesContext } from '../../contexts/currentDicesContext';

interface IProps {
  index: number;
}

const Dice: React.FC<IProps> = ({ index }) => {
  const diceIcons = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];

  const intervalRef = useRef<undefined | NodeJS.Timer>();
  const diceValueRef: any = useRef();

  const { setCurrentDices } = useCurrentDicesContext();
  const { isRolling } = useIsRollingContext();
  const { isDisabled } = useIsDisabledContext();

  const [maintained, setMaintained] = useState(false);
  const [rotationClass, setRotationClass] = useState('dice');
  const [diceValue, setDiceValue] = useState<number>(6);
  
  diceValueRef.current = diceValue;

  const startActions = () => {
    setRotationClass('dice rotation-animation'); // start rotation      
    intervalRef.current = setInterval(() => {
      setDiceValue(noRepeatRandomValue());
    }, 500); // start generating random numbers
  }

  const stopActions = () => {
    setRotationClass('dice'); // stop rotation            
    clearInterval(intervalRef.current); // stop generating random numbers
  }

  const updateCurrentDices = () => {
    setCurrentDices(prev =>
      prev.map((el, i) =>
        index === i
          ? diceValueRef.current // why not diceValue??
          : el))
  }

  useEffect(() => {

    // consecutive timedout dices actions
    !maintained && setTimeout(() => {
      if (isRolling) {
        startActions();
      } else {
        stopActions();
      }
    }, index * 600); // 0.6s timeout

    // updating results after roll is finished
    isRolling && setTimeout(() => {  
      updateCurrentDices();
    }, 9000);
  }, [isRolling]);

  return (
    <div
      className={rotationClass}
      style={{
        cursor: 'pointer',
        borderRadius: '10px',
        padding: '3px',
        boxShadow: `${maintained
          ? '0px 0px 5px 0px rgba(255,255,255,1)'
          : ''}`,
      }}
      onClick={() => !isDisabled && setMaintained(!maintained)}>
      <FontAwesomeIcon
        icon={
          diceIcons[diceValue - 1]
        }
        className='dice-icon'
        style={{
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'block',
        }} />
    </div>
  )
}

export default Dice