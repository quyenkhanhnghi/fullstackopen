import { useState , useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Persons from './Persons'
import PersonForm from './Personform'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(respone =>
        setPersons(respone.data)
      )
  }, [])
  
  const addName = (event) => {
    event.preventDefault();
    
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(nameObject));
    }
    setNewName('');
    setNewNumber('');
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

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} onChange={handleFilter}/>

      <h3>Add a new</h3>

      <PersonForm addName={addName} newName={newName} handleInputName={handleInputName} 
                  newNumber={newNumber} handleInputNumber={handleInputNumber} />
      
      <h3>Numbers</h3>
      <Persons filterPerson={filterPerson}/>
    </div>
  )
}

export default App