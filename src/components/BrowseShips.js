import React from 'react';
import ShipCard from './ShipCard';

function BrowseShips({ allShips, allCharacters, onChangeComment }) {
  return (
    <div className='ship-container'>
      {allShips.map((ship) => (
        <ShipCard
          name={ship.name}
          comment_list={ship.comment_list}
          key={ship.id}
          shipID={ship.id}
          char1={ship.character1_id}
          char2={ship.character2_id}
          allCharacters={allCharacters}
          onChangeComment={onChangeComment}
        />
      ))}
    </div>
  );
}

export default BrowseShips;
