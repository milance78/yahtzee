import React, { useState } from 'react'
import './Start.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FirstForm from '../../components/firstForm/FirstForm';
import SecondForm from '../../components/secondForm/SecondForm';

const Start = () => { 
 
  const [slider, setSlider] = useState('forms-container');  

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f50057'
      },
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className='start'>

        <section className="left">
          <h3>Welcome to</h3>
          <h1>Yahtzee</h1>
        </section>

        <section className='right'>
          <div className="forms-display-window">
            <div className={slider}>
              <FirstForm setSlider={setSlider}/>
              <SecondForm setSlider={setSlider}/>
            </div>
          </div>
        </section>

      </div>
    </ThemeProvider>
  )
}

export default Start