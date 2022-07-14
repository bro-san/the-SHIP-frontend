import React from 'react';

function Search({ searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <form>
        <label>Search:</label>
        <input
          type='text'
          id='fsearch'
          name='fsearch'
          value={searchQuery}
          onChange={handleChange}
        ></input>
      </form>
    </>
  );
}

export default Search;
