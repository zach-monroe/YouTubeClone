import { useState } from 'react'

import './App.css'
import MainFeed from './components/MainFeed'
import SearchBar from './components/SearchBar'
import SideBar from "./components/SideBar.jsx"

function App() {
  const [isSelected, setSelected] = useState(false)

  function handleUnSelected() {
    setSelected(false)
  }
  return (
    <div className='app-container' onClick={handleUnSelected}>
      <SearchBar isSelected={isSelected} setSelected={setSelected} handleUnSelected={handleUnSelected} />
      <SideBar />
      <MainFeed />

    </div>
  )
}

export default App
