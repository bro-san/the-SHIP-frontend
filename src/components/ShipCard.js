import React, { useState } from 'react';
// import Comment from './Comment';

function ShipCard({ name, comments, char1, char2 }) {
  const [shipPic1, setShipPic1] = useState('');
  const [shipPic2, setShipPic2] = useState('');

  const characterRetriever = (id1, id2) => {
    fetch(`http://localhost:9292/characters/${id1}`)
      .then((response) => response.json())
      .then((data) => setShipPic1(data.imageURL));
    fetch(`http://localhost:9292/characters/${id2}`)
      .then((response) => response.json())
      .then((data) => setShipPic2(data.imageURL));
  };

  characterRetriever(char1, char2);

  return (
    <div className='ship-card'>
      <div className='name-btn-img'>
        <div className='name-btn'>
          <h2>{name}</h2>
          <button className='ship-comment-btn'>Add Comment</button>
        </div>
        <img
          src={shipPic1}
          height='150'
          className='ship-image'
          alt='ship-char1'
        />
        <img
          src={shipPic2}
          height='150'
          className='ship-image'
          alt='ship-char2'
        />
      </div>
      <p>
        {comments}Comments go here!<button>Edit</button> <button>Delete</button>
      </p>
      {/* {comments.map((comment) => (
        <Comment comment={comment} />
      ))} */}
    </div>
  );
}

export default ShipCard;
