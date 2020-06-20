import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Home from './Screens/Home';
import { Route, Switch } from 'react-router-dom';
import Cart from './Screens/Cart';

function App() {
  return (
    <React.Fragment>
      <div className='container-fluid my-container'>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Switch>
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
