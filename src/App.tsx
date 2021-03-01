import React from 'react';
import './App.scss';
import JokesList from './components/JokesList';

function App() {
  return (
    <div className="App">
      <h1>Jokes</h1>
      <JokesList />
    </div>
  );
}

export default App;
