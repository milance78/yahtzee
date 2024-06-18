import React from 'react';
import './ResultsDisplay.scss';
import { useResultsContext } from '../../contexts/resultsContext';
import { useCurrentPlayerContext } from '../../contexts/currentPlayerContext';

const ResultsDisplay: React.FC = () => {

  const { results } = useResultsContext();
  const { currentPlayer } = useCurrentPlayerContext();

  return (
    <div className='results-display'>

      {
        results[currentPlayer - 1].map((value, i) =>
          <div className="field-container"
            key={i}>
            <label>
              {i < 6
                ? <img src={`img/d${i + 1}.png`} alt='img' />
                : <h6>{results[currentPlayer - 1][i].fieldName}</h6>
              }
            </label>
            <div className={'field'}>
              {
                results[currentPlayer - 1][i].possibleFieldValue !== 0 &&
                results[currentPlayer - 1][i].possibleFieldValue
              }
            </div>
          </div>)
      }

    </div>
  )
}

export default ResultsDisplay