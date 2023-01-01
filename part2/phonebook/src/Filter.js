const Filter =({filter, onChange}) => {
  return (
    <div>filter shown with 
      <form>
        <input type="search" value={filter} onChange={onChange}/>
      </form>
    </div>
  )
}

export default Filter