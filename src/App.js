import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import AboutUs from './pages/AboutUs/AboutUs';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </>
  );
}

export default App;
