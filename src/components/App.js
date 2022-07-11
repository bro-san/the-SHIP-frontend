import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import BrowseShips from './BrowseShips';
import BrowseCharacters from './BrowseCharacters';
import CharacterForm from './CharacterForm';
import ShipForm from './ShipForm';
import '../assets/css/App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <NavBar />
      <Home />
      {/* <Switch>
        <Route exact path='/characters'>
          <BrowseShips />
        </Route>
        <Route exact path='/characters'>
          <BrowseCharacters />
        </Route>
        <Route exact path='/ship-form'>
          <ShipForm />
        </Route>
        <Route exact path='/char-form'>
          <CharacterForm />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
