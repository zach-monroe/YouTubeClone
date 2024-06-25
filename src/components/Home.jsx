import { useState, useRef } from 'react'
import MainFeed from './MainFeed'
import SearchBar from './SearchBar'
import SideBar from "./SideBar.jsx"

function Home() {

  const inputRef = useRef(null)
  const [isSelected, setSelected] = useState(false)

  function handleUnSelected() {
    setSelected(false)
    inputRef.current.blur()
  }
  return (
    <div className='app-container' onClick={handleUnSelected} >
      <SearchBar isSelected={isSelected} setSelected={setSelected} handleUnSelected={handleUnSelected} inputRef={inputRef} />
      <SideBar />
      <MainFeed />

    </div >
  )
}

export default Home
