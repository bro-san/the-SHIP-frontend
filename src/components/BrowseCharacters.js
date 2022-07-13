import React from "react";
import CharacterCard from "./CharacterCard";

function BrowseCharacters({ allCharacters, setShip1, setShip2 }) {
  return (
    <>
      {allCharacters.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          animeName={character.anime_name}
          image={character.imageURL}
          desc={character.description}
          gender={character.gender}
          setShip1={setShip1}
          setShip2={setShip2}
        />
      ))}
    </>
  );
}

export default BrowseCharacters;
