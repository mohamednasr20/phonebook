import React, { useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`);
    }
    const newObj = { name: newName, number: newNumber };
    setPersons([...persons, newObj]);
    setNewName('');
    setNewNumber('');
  };

  const handleFilter = (e) => {
    return setFilter(e.target.value);
  };

  const handleNumberChange = (e) => {
    return setNewNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    return setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>Add A New</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleName={handleNameChange}
        handleNumber={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} />
    </div>
  );
};

export default App;
