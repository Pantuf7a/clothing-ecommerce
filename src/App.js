import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>

      </Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />

    </div>
  );
}

export default App;
