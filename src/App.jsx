import { useState } from 'react'

import './App.css'
import MainFeed from './components/MainFeed'
import SearchBar from './components/SearchBar'
import SideBar from "./components/SideBar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <SearchBar />
      <SideBar />
      <MainFeed />

    </div>
  )
}

export default App
