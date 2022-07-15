import React, { useState } from 'react';

function Comment({ id, name, comment, onChangeComment }) {
  // const [formContent, setFormContent] = useState('');

  const handleClickEdit = () => {
    let changes = {};
    changes.comment = prompt('Edit your comment!', `${comment}`);
    if (changes !== null) {
      handleSubmit(changes);
    }
  };

  const handleSubmit = (changes) => {
    fetch(`http://localhost:9292/comments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changes),
    })
      .then((response) => response.json())
      .then((data) => onChangeComment(data));
  };

  const handleClickDelete = () => {
    fetch(`http://localhost:9292/comments/${id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((data) => onChangeComment(data))
  };

  return (
    <ul className='comment-list'>
      <li>
        {name} says "{comment}"<button onClick={handleClickEdit}>Edit</button>
        <button onClick={handleClickDelete}>Delete</button>
      </li>
    </ul>
  );
}

export default Comment;
