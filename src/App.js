import React from 'react';
import Header from './components/Header';
import golf from './images/golf.gif'

function App() {
  return (
    <div className="App">
      <Header />
      <div align="center" id="gif"><img src={golf} width={600} /></div>
    </div>
  );
}

export default App;
