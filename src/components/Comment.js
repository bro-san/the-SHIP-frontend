import React, { useState } from 'react';

function Comment({ id, name, comment }) {
  const [formContent, setFormContent] = useState('');

  const handleClickEdit = () => {
    let changes = prompt('Edit your comment!', `${comment}`);
    console.log(changes);
    setFormContent(changes);
    console.log(formContent);
    //   if (formContent === true) {
    //     handleSubmit();
    //   }
  };

  const handleSubmit = () => {
    fetch(`http://localhost:9292/comments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formContent),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleClickDelete = () => {
    fetch(`http://localhost:9292/comments/${id}`, {
      method: 'DELETE',
    });
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
