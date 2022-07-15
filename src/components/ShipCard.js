import React, { useState } from 'react';
import Comment from './Comment';

function ShipCard({
  name,
  comment_list,
  char1,
  char2,
  shipID,
  onChangeComment,
}) {
  const [shipPic1, setShipPic1] = useState('');
  const [shipPic2, setShipPic2] = useState('');
  // const [handleChange, setHandleChange] = useState('');

  console.log(comment_list);

  const characterRetriever = (id1, id2) => {
    fetch(`http://localhost:9292/characters/${id1}`)
      .then((response) => response.json())
      .then((data) => setShipPic1(data.imageURL));
    fetch(`http://localhost:9292/characters/${id2}`)
      .then((response) => response.json())
      .then((data) => setShipPic2(data.imageURL));
  };

  characterRetriever(char1, char2);

  const handleClickAdd = () => {
    let changes = {};
    changes.name = prompt('Who are you?', ``);
    changes.comment = prompt('Add your comment!', ``);
    if (changes !== null) {
      handleSubmit(changes);
    }
  };

  const handleSubmit = (changes) => {
    fetch(`http://localhost:9292/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: changes.name,
        comment: changes.comment,
        ship_id: shipID,
      }),
    })
      .then((response) => response.json())
      .then((data) => onChangeComment(data));
  };

  return (
    <div className='ship-card'>
      {/* <div className='name-btn'> */}
      <h2 className='ship-name'>{name}</h2>
      <div className='ship-image-container'>
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
      <button onClick={handleClickAdd} className='ship-comment-btn'>
        Add Comment
      </button>
      {/* </div> */}
      {comment_list.length ? (
        comment_list.map((comment) => (
          <Comment
            id={comment.id}
            name={comment.name}
            comment={comment.comment}
            key={comment.name}
            onChangeComment={onChangeComment}
          />
        ))
      ) : (
        <p className='comment'>No comments yet! What do you think?</p>
      )}
    </div>
  );
}

export default ShipCard;
