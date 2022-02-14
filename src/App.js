import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Men from './components/men/men';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Men></Men>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
