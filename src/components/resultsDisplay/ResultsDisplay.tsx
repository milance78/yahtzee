import React from 'react';
import './ResultsDisplay.scss';
import { useResultsContext } from '../../contexts/resultsContext';
import { useCurrentPlayerContext } from '../../contexts/currentPlayerContext';

const ResultsDisplay: React.FC = () => {

  const { results } = useResultsContext();
  const { currentPlayer } = useCurrentPlayerContext();
  const currentResults = results[currentPlayer - 1]

  return (
    <div className='results-display'>

      { currentResults &&
        currentResults.map((el, i) =>
          <div className="field-container"
            key={i}>
            <label>
              {i < 6
                ? <img src={`img/d${i + 1}.png`} alt='img' />
                : <h6>{el.fieldName}</h6>
              }
            </label>
            <div className={'field'}>
              {
                el.possibleFieldValue !== 0 &&
                el.possibleFieldValue
              }
            </div>
          </div>)
      }

    </div>
  )
}

export default ResultsDisplay