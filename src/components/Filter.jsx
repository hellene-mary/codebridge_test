const Filter = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        Filter by keywords
        <button type="submit">enter</button>
        <input
          placeholder="Search"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
        ></input>
      </form>
      <div>
        <p>Results: 6</p>
      </div>
    </>
  )
}

export default Filter
