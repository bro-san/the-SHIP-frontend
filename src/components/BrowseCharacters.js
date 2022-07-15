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
  const [optionQuery, setOptionQuery] = useState('All');
  const [formQuery, setFormQuery] = useState('');

  const filterCharacters =
    optionQuery !== 'All'
      ? allCharacters.filter((character) => character.gender === optionQuery)
      : allCharacters.filter((character) => character.gender !== optionQuery);

  console.log(filterCharacters);
  const searchCharacters = filterCharacters.filter(
    (character) =>
      character.name.toLowerCase().includes(formQuery.toLowerCase()) ||
      character.anime_name.toLowerCase().includes(formQuery.toLowerCase())
  );

  return (
    <>
      <div className='search-and-ship'>
        <Search
          formQuery={formQuery}
          setFormQuery={setFormQuery}
          optionQuery={optionQuery}
          setOptionQuery={setOptionQuery}
        />
        <button className='ship-button' onClick={createShip}>
          Ship that couple!
        </button>
      </div>
      <div className='character-container'>
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
      </div>
    </>
  );
}

export default BrowseCharacters;
