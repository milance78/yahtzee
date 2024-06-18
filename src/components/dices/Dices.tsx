import React, { useEffect, useState } from 'react'
import './Dices.scss'
import Dice from '../dice/Dice'
import { useResultsContext } from '../../contexts/resultsContext'
import { useCurrentDicesContext } from '../../contexts/currentDicesContext'
import { useCurrentPlayerContext } from '../../contexts/currentPlayerContext'
import { Field } from '../../classes/fieldClass'


const Dices = () => {
    const { setResults } = useResultsContext();
    const { currentDices } = useCurrentDicesContext();
    const { currentPlayer } = useCurrentPlayerContext();
 
    useEffect(() => {        
        setResults(prev =>
            prev.map((el, i) =>
                i + 1 === currentPlayer
                    ? Field.buildResultsArray(currentDices)
                    : el)
        )
    }, [currentDices, currentPlayer, setResults])

    return (
        <div className='dices'>
            <Dice index={0} />
            <Dice index={1} />
            <Dice index={2} />
            <Dice index={3} />
            <Dice index={4} />
        </div>
    )
}

export default Dices