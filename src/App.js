import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import personsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleUpdatePerson = (person) => {
    if (
      window.confirm(
        `${person.name} is already added to phonebook, replace the old number with a new one?`
      )
    );
    const changedNumber = { ...person, number: newNumber };
    return personsService.update(person.id, changedNumber).then((response) => {
      setPersons(
        persons.map((p) => (p.id !== changedNumber.id ? p : response.data))
      );
      setNewName('');
      setNewNumber('');
    });
  };

  const handleCreatePerson = () => {
    const newPerson = { name: newName, number: newNumber };

    personsService.create(newPerson).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName('');
      setNewNumber('');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = persons.find((person) => person.name === newName);
    if (person) {
      return handleUpdatePerson(person);
    }

    return handleCreatePerson();
  };

  const handleDeletePerson = (id) => {
    const personName = persons.find((person) => person.id === id).name;
    if (window.confirm(`Delete ${personName}`)) {
      personsService.deletePerson(id).then((response) => {
        if (response) {
          const newPersons = persons.filter((person) => person.id !== id);
          return setPersons(newPersons);
        }
      });
    }
  };

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={(e) => setFilter(e.target.value)} />

      <h2>Add A New</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleName={(e) => setNewName(e.target.value)}
        handleNumber={(e) => setNewNumber(e.target.value)}
      />

      <h2>Numbers</h2>
      <Persons
        filter={filter}
        persons={persons}
        deletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
