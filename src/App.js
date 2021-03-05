import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/about' component = {About}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
