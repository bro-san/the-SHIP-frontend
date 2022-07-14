import React from "react";
import ShipCard from "./ShipCard";

function BrowseShips({ allShips, allComments }) {
  
  const newShip = allShips.map(ship => {
    return <ShipCard allComments={allComments} name={ship.name} key={ship.id} shipId={ship.id} character1_id={ship.character1_id} character2_id={ship.character2_id} />
  })
  
  return (
    <>
      {newShip}
    </>
  );
}

export default BrowseShips;
