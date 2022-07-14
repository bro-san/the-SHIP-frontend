import React from "react";

function ShipCard({ name, character1_id, character2_id, allComments, shipId}) {
  
// const comments = allComments.filter(comment => comment["ship_id"]===shipId)

console.log(allComments)  
  return (
    <div>
      <h2>Name: {name}</h2>
      <h6>Comments: {"comments"}</h6>
    </div>
  );
}

export default ShipCard;
