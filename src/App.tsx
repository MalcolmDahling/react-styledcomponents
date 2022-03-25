import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StyledButton } from './components/StyledButton/StyledButton';

function App() {
  return (
    <div className="App">
        <StyledButton color="white" value="Button0"></StyledButton>
        <StyledButton value="Button1"></StyledButton>
        <StyledButton disabled></StyledButton>
    </div>
  );
}

export default App;
