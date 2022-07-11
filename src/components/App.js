import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Search from './Search';
import Home from './Home';
import Form from './Form';
import '../assets/css/App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/search'>
          <Search />
        </Route>
        <Route exact path='/form'>
          <Form />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
