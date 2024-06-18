import React, { useState } from 'react'
import './FirstForm.scss'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNumberOfPlayersContext } from '../../contexts/numberOfPlayers';
import { useResultsContext } from '../../contexts/resultsContext';

interface IProps {
    setSlider: React.Dispatch<React.SetStateAction<string>>
}
const FirstForm: React.FC<IProps> = ({ setSlider }) => {
    const { numberOfPlayers, setNumberOfPlayers } = useNumberOfPlayersContext();
    const {setResults} = useResultsContext();

    const initializePlayers = () => {

    }

    

    const submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        console.log('submit');
        console.log(numberOfPlayers);
        
        setSlider('forms-container slide-left');
    }

    return (
        <form className='first-form'
            onSubmit={submitHandler}>
            <FormControl fullWidth
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <InputLabel id="number-of-players">
                    Number of players
                </InputLabel>
                <Select
                    labelId="number-of-players"
                    value={numberOfPlayers}
                    label="Number of players"
                    onChange={(ev: any) =>
                        setNumberOfPlayers(ev.target.value)}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
                <Button
                    type='submit'
                    sx={{
                        marginTop: 'auto',
                        width: '100%',
                        fontSize: '15px'
                    }}>
                    Continue
                </Button>
            </FormControl >
        </form>

    )
}

export default FirstForm