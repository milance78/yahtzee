import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { IsRollingContextProvider } from './contexts/IsRollingContext';
import { IsDisabledContextProvider } from './contexts/isDisabledContext';
import { ResultsContextProvider } from './contexts/resultsContext';
import { CurrentPlayerContextProvider } from './contexts/currentPlayerContext';
import { CurrentDicesContextProvider } from './contexts/currentDicesContext';
import { RollCounterContextProvider } from './contexts/rollCounterContext';
import { NumberOfPlayersContextProvider } from './contexts/numberOfPlayers';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <NumberOfPlayersContextProvider>
    <RollCounterContextProvider>
      <CurrentDicesContextProvider>
        <ResultsContextProvider>
          <CurrentPlayerContextProvider>
            <IsDisabledContextProvider>
              <IsRollingContextProvider>
                <BrowserRouter>
                  <React.StrictMode>
                    <App />
                  </React.StrictMode>
                </BrowserRouter>
              </IsRollingContextProvider>
            </IsDisabledContextProvider>
          </CurrentPlayerContextProvider>
        </ResultsContextProvider>
      </CurrentDicesContextProvider>
    </RollCounterContextProvider>
  </NumberOfPlayersContextProvider>
);
