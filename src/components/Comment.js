import React from 'react';

function Comment({ comment }) {
  return (
    <>
      <p>
        {comment}
        <button>Edit</button> <button>Delete</button>
      </p>
    </>
  );
}

export default Comment;
