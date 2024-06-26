const SearchForm = ({ setSearch, search, handleSubmit, inputRef, setSelected }) => {

  // HACK: Props are being sent around way too much. Extremely messy. Must be abetter fix.
  function handleChange(e) {
    setSearch(e.target.value);
  }

  function keyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  function handleSelect(e) {
    e.stopPropagation();
    inputRef.current.focus();
    setSelected(true);
  }

  return (
    <div className="search-form">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={keyDown}
        onClick={handleSelect}
        value={search}
        ref={inputRef}
      />
    </div>
  );
};

export default SearchForm;
