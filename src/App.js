import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Reservations from './components/Reservations';
import Error from './components/Error';
import Footer from './components/Footer';

// SCSS
import './scss/main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }
  render() {
      return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
              <Route path={process.env.PUBLIC_URL + '/about'} component={About} exact />
              <Route path={process.env.PUBLIC_URL + '/reservations'} component={Reservations} exact />
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
