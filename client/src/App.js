import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';


function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to="/">Home</Link>
            <Link to="/otherpage">OtherPage</Link>
          </header>
          <Route exact path="/" component={Fib}/>
          <Route exact path="/otherpage" component={OtherPage}/>

        </div>
      </Router>
  );
}

export default App;
