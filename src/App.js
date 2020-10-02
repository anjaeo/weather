import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <img src="https://i.ibb.co/XYvfLVL/11machin-illo-article-Large-v3.jpg" />
          <h1>Weather Forecast</h1>
        </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by AnJae O.
      </footer>
    </div>
  );
}

export default App;
