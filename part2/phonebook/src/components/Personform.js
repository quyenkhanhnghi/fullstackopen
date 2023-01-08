const PersonForm = ({addName, newName, handleInputName, newNumber, handleInputNumber}) => {
    return (
      <form onSubmit={addName}>
          <div>
            name: 
              <input 
                value={newName} 
                onChange={handleInputName}
              />
          </div>
          <div>number: 
              <input 
                  value={newNumber}
                  onChange={handleInputNumber}
              />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default PersonForm