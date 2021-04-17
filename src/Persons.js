import React from 'react';

const Persons = ({ filter, persons }) => {
  const renderPersons = () => {
    const personsList =
      filter !== ''
        ? persons.filter((person) =>
            person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
        : persons;

    return personsList.map((p) => {
      return (
        <p key={p.name}>
          {p.name} {p.number}
        </p>
      );
    });
  };
  return <div>{renderPersons()}</div>;
};

export default Persons;
