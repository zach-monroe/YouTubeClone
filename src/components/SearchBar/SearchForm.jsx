
const SearchForm = ({ setSearch, search, handleSubmit }) => {
  function handleChange(e) {
    setSearch(e.target.value)
  }
  function keyDown(e) {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }



  return <div
    className="search-form">
    <input type="text" onChange={handleChange} onKeyDown={keyDown} value={search} />
  </div>
}

export default SearchForm
