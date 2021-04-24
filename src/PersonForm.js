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
          <input
            type="text"
            value={newName}
            onChange={handleName}
            placeholder="Name"
          />
          <div>
            <input
              type="tel"
              value={newNumber}
              onChange={handleNumber}
              placeholder="Number"
            />
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
