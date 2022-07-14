import React from "react";
import ShipCard from "./ShipCard";

function BrowseShips({ allShips }) {
  return (
    <>
      {allShips.map((ship) => {
        <ShipCard name={ship.name} key={ship.id} />;
      })}
    </>
  );
}

export default BrowseShips;
