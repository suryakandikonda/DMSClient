import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import MainComponent from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
