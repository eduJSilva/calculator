import React from 'react';
//import logo from './logo.svg';
import { Calculator } from './features/calculator/Calculator';
import './App.css';

function App() {
  return (
    <div className="App" >
      <header>
      <Calculator />
        </header>
        <section>      
        <div>
        <p>
        <strong>Calculator</strong> <h5>React-Redux Toolkit app</h5> 
        </p>
        <span>
          <span>Designed and Coded By </span>
          <a
            className="Portfolio-EJS"
            href="https://porfolioeduardojsilva.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eduardo J. Silva
          </a>
        </span>
        </div>
        </section>
    </div>
  );
}

export default App;
