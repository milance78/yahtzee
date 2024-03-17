import './EnterPlayers.css'
import Player from '../classes/player';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

const EnterPlayers = ({ 
    player1, setPlayer1, 
    player2, setPlayer2, 
    setDisplayGame }) => {

    const [firstPlayerName, setFirstPlayerName] = useState("");
    const [secondPlayerName, setSecondPlayerName] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        setPlayer1(new Player);
        setPlayer2(new Player);
        setDisplayGame(true);
    }
    // this useEffect is waiting for submitHandler to set player1 and player2, and then it fires
    useEffect(()=>{
        player1 && (player1.playerNameValue = firstPlayerName);
        player2 && (player2.playerNameValue = secondPlayerName);
        player1 && console.log(firstPlayerName);// why this does not function?
        

    },[player1, player2]);

    return (
        <div className='enter-players-container'>
            <form className='enter-players' onSubmit={submitHandler}>
                <Stack>
                    <Box className='name-box' sx={{ display: 'flex', alignItems: 'flex-end', my: 4 }}>
                        <AccountCircle sx={{ color: 'lightblue', mr: 2, my: 1, fontSize: 40 }} />
                        <TextField
                            fullWidth
                            id="input-with-sx"
                            label="Enter PLAYER 1"
                            variant="outlined"
                            color="success"
                            onChange={(event) => setFirstPlayerName(event.target.value)} />
                    </Box>
                    <Box className='name-box' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'lightcoral', mr: 2, my: 1, fontSize: 40 }} />
                        <TextField
                            fullWidth
                            id="input-with-sx"
                            label="Enter PLAYER 2"
                            variant="outlined"
                            color="success"
                            onChange={(event) => setSecondPlayerName(event.target.value)} />
                    </Box>
                    <Button
                        className='submit-players-button'
                        type='submit'
                        fullWidth
                        variant="contained"
                        color="warning"
                        sx={{ my: 5}}>Start game</Button>
                </Stack>
            </form>
            
        </div>
    )
}

export default EnterPlayers