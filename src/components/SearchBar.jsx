import { useState, useRef } from "react"
import SearchForm from "./SearchBar/SearchForm"
import { motion } from "framer-motion"

const SearchBar = ({ inputRef, isSelected, setSelected, handleUnSelected }) => {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    handleUnSelected()
    console.log(search)
    e.target.blur()
  }



  const variants = {
    initial: {
      scale: 1,
      x: 0,
      y: 0,
    },
    selected: {
      scale: 1.25,
      y: '25vh',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };


  return <motion.div initial="initial" variants={variants} animate={isSelected ? 'selected' : 'initial'} className="search">
    <SearchForm search={search} inputRef={inputRef} setSelected={setSelected} setSearch={setSearch} handleSubmit={handleSubmit} />
  </motion.div>
}

export default SearchBar
