import { keyBy } from 'lodash';
import React from 'react';
import { useState } from 'react';

function CharacterCard({
  name,
  key,
  id,
  image,
  animeName,
  desc,
  gender,
  setShip1,
  setShip2,
  setShip1Name,
  setShip2Name,
  checked1,
  setChecked1,
  checked2,
  setChecked2,
}) {
  // console.log(key);

  function handleClick1(e) {
    setChecked1(!checked1);
    setShip1(id);
    setShip1Name(name);
    console.log('hello! click1', id);
  }

  function handleClick2(e) {
    setShip2(id);
    setShip2Name(name);
    console.log('click2', id);
  }

  return (
    <div className='characterCard'>
      <h2>{name}</h2>
      <img src={image} alt='character' />
      <h3>{animeName} </h3>
      <h6>{gender}</h6>
      <h6>{desc}</h6>
      <label>1:</label>
      <input type='checkbox' onClick={handleClick1} />
      <label>2:</label>
      <input type='checkbox' onClick={handleClick2} />
    </div>
  );
}

export default CharacterCard;
