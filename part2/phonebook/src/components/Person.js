const Person = ({ person , deleteButton }) => {
    return (
        <div>
          {person.name} {person.number} 
          <button onClick={deleteButton}>delete</button>
        </div>
    )
}

export default Person