import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPersonToPhonebook = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)

      if (nameExists) {
        alert(`${newName} is already added to phonebook`)
        return
      }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setFilteredPersons(persons?.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm addPersonToPhonebook={addPersonToPhonebook} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} filteredPersons={filteredPersons}/>
    </div>
  )
}

const PersonForm = ({addPersonToPhonebook, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={addPersonToPhonebook}>
            <div>
              name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
              number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
        </form>
    )
}

const Filter = ({filter, handleFilterChange}) => {
    return (<>filter shown with <input value={filter} onChange={handleFilterChange} /></>)
}

const Persons = ({filter, persons, filteredPersons}) => {
  return (
    <ul>
      {(filter ? filteredPersons : persons).map(person =>
        <Person key={person.id} person={person} />
      )}
    </ul>
  )
}

const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

export default App
