import React from 'react';

const Persons = ({ filter, persons, deletePerson }) => {
  const renderPersons = () => {
    const personsList =
      filter !== ''
        ? persons.filter((person) =>
            person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
        : persons;

    return personsList.map((p) => {
      return (
        <li key={p.name}>
          {p.name} {p.number}{' '}
          <button
            onClick={() => {
              deletePerson(p.id);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  };
  return <ul>{renderPersons()}</ul>;
};

export default Persons;
