import { useState } from "react";
import SearchForm from "./SearchBar/SearchForm";
import { motion } from "framer-motion";

const SearchBar = ({ inputRef, isSelected, setSelected, handleUnSelected }) => {
  const [search, setSearch] = useState("");


  function handleSubmit() {
    handleUnSelected();
    console.log(search);
    inputRef.current.blur();
  }

  const variants = {
    initial: { scale: 1, x: 0, y: 0 },
    selected: { scale: 1.25, y: '25vh', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <div className="search">
      {isSelected && (
        <motion.div
          className="search-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <motion.div initial="initial" variants={variants} animate={isSelected ? 'selected' : 'initial'} className="search">
        <div>
          <SearchForm
            search={search}
            inputRef={inputRef}
            setSelected={setSelected}
            setSearch={setSearch}
            handleSubmit={handleSubmit}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBar;
