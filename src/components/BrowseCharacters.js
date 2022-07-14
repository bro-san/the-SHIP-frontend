import React from 'react';
import CharacterCard from './CharacterCard';
import Search from './Search';
import { useState } from 'react';

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
  setChecked2,
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const searchCharacters = allCharacters.filter(
    (character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      character.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      character.anime_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <button onClick={createShip}>Ship that couple!</button>
      {searchCharacters.map((character) => (
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
