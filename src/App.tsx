import React, { useState } from 'react'
import CalculatorSalary from './pages/calculator-salary'
import WordScramble from './pages/word-scramble'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/cal-sal" element={<CalculatorSalary />}/>
            
          </Routes>
        </BrowserRouter>
        
      </React.Fragment>
  
  )
}

export default App
