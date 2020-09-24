import React from 'react';
import Home from './components/Home'
import Posts from './components/Posts'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

function App() {
  return (
      <Router>
          <div>
              <Route exact path = "/" component = {Home}/>
              <Route path = "/posts" component = {Posts}/>
          </div>
      </Router>
  );
}

export default App;
