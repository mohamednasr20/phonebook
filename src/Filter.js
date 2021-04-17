import React from 'react';

const Filter = ({ handleFilter, filter }) => {
  return (
    <div>
      fliter shown with{' '}
      <input type="text" value={filter} onChange={handleFilter} />{' '}
    </div>
  );
};

export default Filter;
