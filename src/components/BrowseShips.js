import React from 'react';
import ShipCard from './ShipCard';

function BrowseShips({ allShips, allCharacters, allComments }) {
  return (
    <>
      {allShips.map((ship) => (
        <ShipCard
          name={ship.name}
          comments={ship.comments}
          key={ship.id}
          char1={ship.character1_id}
          char2={ship.character2_id}
          allCharacters={allCharacters}
          allComments={allComments}
        />
      ))}
    </>
  );
}

export default BrowseShips;
