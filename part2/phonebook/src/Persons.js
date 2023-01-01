const Persons = ({filterPerson}) => {
    return (
        <div>
          {
            filterPerson.map(person => 
              <div key={person.id}> {person.name} {person.number} </div> 
            )
          }
        </div>
    )
}

export default Persons