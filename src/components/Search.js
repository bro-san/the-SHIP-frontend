import React from 'react';

function Search({ formQuery, setFormQuery, setOptionQuery }) {
  const handleOptionChange = (e) => {
    setOptionQuery(e.target.value);
  };

  const handleFormChange = (e) => {
    setFormQuery(e.target.value);
  };

  console.log(formQuery);

  return (
    <>
      <form className='search'>
        <label>Filter by Gender </label>
        <select onChange={handleOptionChange}>
          <option value='All'>All</option>
          <option value='Non-binary'>Non-Binary</option>
          <option value='Female'>Female</option>
          <option value='Male'>Male</option>
        </select>
        <label>Search </label>
        <input
          type='text'
          id='fsearch'
          name='fsearch'
          value={formQuery}
          onChange={handleFormChange}
        ></input>
      </form>
    </>
  );
}

export default Search;
