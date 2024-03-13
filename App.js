import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [catFact, setCatFact] = useState('');

  const getCatFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setCatFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };

  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <div className="app">
      <div className="cat-fact-container">
        <p className="cat-fact">{catFact}</p>
        <button className="btn" onClick={getCatFact}>
          Get New Cat Fact
        </button>
      </div>
    </div>
  );
};

export default App;
