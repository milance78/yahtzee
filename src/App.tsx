import React from 'react'
import Start from './pages/start/Start'
import Inner from './pages/inner/Inner'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/inner' element={<Inner />} />
      </Routes>
    </div>
  )
}

export default App