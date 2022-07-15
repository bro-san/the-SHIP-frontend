import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import BrowseShips from './BrowseShips';
import BrowseCharacters from './BrowseCharacters';
import CharacterForm from './CharacterForm';
import '../assets/css/App.css';
import 'animate.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect, useState } from 'react';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [ship1, setShip1] = useState('');
  const [ship2, setShip2] = useState('');
  const [ship1Name, setShip1Name] = useState('');
  const [ship2Name, setShip2Name] = useState('');
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [allShips, setAllShips] = useState([]);
  // const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/characters')
      .then((response) => response.json())
      .then((data) => setAllCharacters(data));

    fetch('http://localhost:9292/ships?include_comments')
      .then((response) => response.json())
      .then((data) => setAllShips(data));

    //   fetch('http://localhost:9292/comments')
    //     .then((response) => response.json())
    //     .then((data) => setAllComments(data));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:9292/ships')
  //     .then((response) => response.json())
  //     .then((data) => setAllShips(data));
  // }, []);

  function createShip() {
    console.log('createShip');
    const shipObject = {
      name: `${ship1Name} x ${ship2Name}`,
      character1_id: ship1,
      character2_id: ship2,
    };
    console.log(shipObject);

    fetch('http://localhost:9292/ships', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shipObject),
    })
      .then((response) => response.json())
      .then((data) => console(data));

    setChecked1(false);
  }

  function addCharacter(newCharacter) {
    const newCharactersArray = [...allCharacters, newCharacter]
    setAllCharacters(newCharactersArray);
  }

  function onAddComment(data) {
    console.log(data) 
  }

  return (
    <div className='app'>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/ships'>
          <BrowseShips
            allShips={allShips}
            allCharacters={allCharacters}
            onAddComment={onAddComment}
            // allComments={allComments}
          />
        </Route>
        <Route exact path='/characters'>
          <BrowseCharacters
            allCharacters={allCharacters}
            setShip1={setShip1}
            setShip2={setShip2}
            createShip={createShip}
            setShip1Name={setShip1Name}
            setShip2Name={setShip2Name}
            checked1={checked1}
            setChecked1={setChecked1}
            checked2={checked2}
            setChecked2={setChecked2}
          />
        </Route>
        <Route exact path='/char-form'>
          <CharacterForm addCharacter={addCharacter} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
