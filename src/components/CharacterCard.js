import React from "react";

function CharacterCard({ name, key, image, animeName, desc, gender }) {
  return (
    <div class="characterCard">
      <h2>Name: {name}</h2>
      <img src={image} alt="picture" />
      <h3>Anime: {animeName} </h3>
      <h6>Gender: {gender}</h6>
      <h6>Description: {desc}</h6>
      <h6>Comments:</h6>
      <input type="checkbox" />
      <button>Ship</button>
      <button>Edit Comments</button>
    </div>
  );
}

export default CharacterCard;
