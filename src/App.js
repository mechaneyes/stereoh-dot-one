import React from 'react';
import './App.css';
import './styles/main.scss';

import TopNav from './components/molecules/TopNav/TopNav'
import Homepage from './pages/Homepage/Homepage'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Homepage />
    </div>
  );
}

export default App;
