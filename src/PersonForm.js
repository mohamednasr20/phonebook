import React from 'react';

const PersonForm = ({
  handleSubmit,
  newName,
  newNumber,
  handleName,
  handleNumber,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleName} />
          <div>
            number:{' '}
            <input type="tel" value={newNumber} onChange={handleNumber} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
