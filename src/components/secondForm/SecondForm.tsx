import React, { useState } from 'react'
import './SecondForm.scss'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom';
import { useNumberOfPlayersContext } from '../../contexts/numberOfPlayers';

interface IProps {
  setSlider: React.Dispatch<React.SetStateAction<string>>
}

const SecondForm: React.FC<IProps> = ({ setSlider }) => {
  const { numberOfPlayers } = useNumberOfPlayersContext();
  const test = [1, 2, 3, 4]

  const submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  }

  const backButtonHandler = () => {
    setSlider('forms-container');
  }
  return (
    <form className='second-form'
    onSubmit={submitHandler}>
      <FormControl
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
        {
          test.map((el) => <TextField
            key={el}
            sx={{
              marginBottom: '10px',
            }}
            className={`user-input No${el}`}
            label={`Player ${el}`}
            variant="standard"
            color="primary" />)
        }
        <div style={{
          marginTop: 'auto',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Button
            onClick={backButtonHandler}
            sx={{
              fontSize: '15px',
              color: 'black',
            }}>Back</Button>
          <Link to="/inner">
            <Button
              type='submit'
              sx={{
                fontSize: '15px',
              }}>Start</Button>
          </Link>
        </div>
      </FormControl>
    </form>
  )
}

export default SecondForm