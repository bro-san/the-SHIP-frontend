import React from "react";
import CharacterCard from "./CharacterCard";
import { useState } from "react";

function BrowseCharacters({
  allCharacters,
  setShip1,
  setShip2,
  createShip,
  setShip1Name,
  setShip2Name,
  checked1, 
  setChecked1,
  checked2,
  setChecked2
}) {


  return (
    <>
      <button onClick={createShip}>Ship that couple!</button>
      {allCharacters.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          name={character.name}
          animeName={character.anime_name}
          image={character.imageURL}
          desc={character.description}
          gender={character.gender}
          setShip1={setShip1}
          setShip2={setShip2}
          setShip1Name={setShip1Name}
          setShip2Name={setShip2Name}
          checked1={checked1}
          setChecked1={setChecked1}
          checked2={checked2}
          setChecked2={setChecked2}
        />
      ))}
    </>
  );
}

export default BrowseCharacters;
