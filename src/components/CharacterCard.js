import { keyBy } from "lodash";
import React from "react";

function CharacterCard({
  name,
  key,
  image,
  animeName,
  desc,
  gender,
  setShip1,
  setShip2,
}) {
  function handleClick1(e) {
    setShip1({ key });
    console.log("click1", { key });
  }

  function handleClick2(e) {
    setShip2({ key });
    console.log("click2", { key });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", e.target.value);
  }

  return (
    <div class="characterCard">
      <h2>Name: {name}</h2>
      <img src={image} alt="picture" />
      <h3>Anime: {animeName} </h3>
      <h6>Gender: {gender}</h6>
      <h6>Description: {desc}</h6>
      <label>1:</label>
      <input type="checkbox" onClick={handleClick1} />
      <label>2:</label>
      <input type="checkbox" onClick={handleClick2} />
      <button onClick={handleSubmit}>Ship</button>
    </div>
  );
}

export default CharacterCard;
