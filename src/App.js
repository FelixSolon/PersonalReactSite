import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/Home/'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

import Header from './components/Header/'
import Footer from './components/Footer/'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
