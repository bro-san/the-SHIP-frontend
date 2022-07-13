import React from "react";
import CharacterCard from "./CharacterCard";

function BrowseCharacters({ allCharacters }) {
  return (
    <>
      {allCharacters.map((character) => (
        <CharacterCard
          key={character.anime_id}
          name={character.name}
          animeName={character.anime_name}
          image={character.character_image}
          desc={character.desc}
          gender={character.gender}
        />
      ))}
    </>
  );
}

export default BrowseCharacters;
