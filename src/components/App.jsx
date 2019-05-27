/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import axios from 'axios';
import HomePage from './blog/HomePage';
import CategoryNews from './blog/CategoryNews';


require('milligram/dist/milligram.css');
require('./../styles.css');

axios.defaults.headers.common.Authorization = 'Bearer 504e9018163d426baeeb5cd16695a729';

const App = () => (
  <div className="container">
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/category/:id" component={CategoryNews} />
      </AnimatedSwitch>
    </Router>
  </div>
);

export default App;
