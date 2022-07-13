import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import BrowseShips from "./BrowseShips";
import BrowseCharacters from "./BrowseCharacters";
import CharacterForm from "./CharacterForm";
import ShipForm from "./ShipForm";
import "../assets/css/App.css";
import "animate.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect, useState } from "react";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [ship1, setShip1] = useState();
  const [ship2, setShip2] = useState();

  useEffect(() => {
    fetch("http://localhost:9292/characters")
      .then((response) => response.json())
      .then((data) => setAllCharacters(data));
  }, []);
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/ships">
          <BrowseShips />
        </Route>
        <Route exact path="/characters">
          <BrowseCharacters
            allCharacters={allCharacters}
            setShip1={setShip1}
            setShip2={setShip2}
          />
        </Route>
        <Route exact path="/ship-form">
          <ShipForm />
        </Route>
        <Route exact path="/char-form">
          <CharacterForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
