import { useState , useEffect } from 'react'

import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/Personform'
import personService from './services/module'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(personData =>
        setPersons(personData)
      )
  }, [])
  
  const addName = (event) => {
    event.preventDefault();
    
    if (persons.some(person => person.name === newName)) {
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      
      if (!confirm) {
        return;
      }
      const person = persons.find(person => person.name === newName);
      const idUpdate = person.id;
      
      personService
        .update(idUpdate, {...person, number: newNumber})
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== idUpdate ? person : returnedPerson))
        })
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: Math.round(Math.random()*1000)
    }

    while (persons.some(person => person.id === nameObject.id)) {
      nameObject.id = Math.round(Math.random()*1000)
    }

    personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
    })

  }
  
  const handleInputName = (event) => {
    setNewName(event.target.value);
    
  }
  const handleInputNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const filterPerson = persons.filter(person => {
    if (filter === '' || person.name.toLowerCase().includes(filter.toLowerCase())) {
      return person;
    }
  })

  const deleteButton = person => {
    window.confirm(`Delete ${person.name} ?`)
    personService
      .deletePerson(person.id)
      setPersons(persons.filter(n => n.id !== person.id))
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} onChange={handleFilter}/>

      <h3>Add a new</h3>

      <PersonForm addName={addName} newName={newName} handleInputName={handleInputName} 
                  newNumber={newNumber} handleInputNumber={handleInputNumber} />
      
      <h3>Numbers</h3>
      <div>
        {filterPerson.map(person =>
          <Person 
            key={person.id}
            person={person}
            deleteButton={() => deleteButton(person)}
            />
        )}
      </div>
    </div>
  )
}

export default App