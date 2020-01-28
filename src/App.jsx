import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import NewRx from './pages/NewRx';


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/newrx">
          <NewRx />
        </Route>  
        <Route>
          <Home />
        </Route>
      </Switch>      
    </Router>
  );
}

export default App;
