import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Reservations from './components/Reservations';
import Blog from './components/Blog';
import Error from './components/Error';

// SCSS
import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/blog" component={Blog} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
