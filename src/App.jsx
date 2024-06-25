import { useState, useRef } from 'react'

import './App.css'
import MainFeed from './components/MainFeed'
import SearchBar from './components/SearchBar'
import SideBar from "./components/SideBar.jsx"

function App() {

  const inputRef = useRef(null)
  const [isSelected, setSelected] = useState(false)

  function handleUnSelected() {
    setSelected(false)
    inputRef.current.blur()
  }
  return (
    <div className='app-container' onClick={handleUnSelected}>
      <SearchBar isSelected={isSelected} setSelected={setSelected} handleUnSelected={handleUnSelected} inputRef={inputRef} />
      <SideBar />
      <MainFeed />

    </div>
  )
}

export default App
