import React from 'react';

const Filter = ({ handleFilter, filter }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Filter Shown with "
      />{' '}
    </div>
  );
};

export default Filter;
