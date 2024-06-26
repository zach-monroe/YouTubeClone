
import { useState, useRef, useEffect } from 'react'
import MainFeed from '../components/MainFeed.jsx'
import SearchBar from '../components/SearchBar.jsx'
import SideBar from "../components/SideBar.jsx"
import { apikey } from "../config.js"

function Home() {
  const [query, setQuery] = useState("")
  //Passing down a ref for focusing and unfocusing the search bar so that I can access it with isSelected state changes.
  const inputRef = useRef(null)
  //Used for determining if the search bar is selected or not.  Also used for animating the searchbar to the center of the screen.
  //PERF: change this to a global state using useContext() Maybe? would have to include the ref that is getting passed down as well.  May not make sense
  const [isSelected, setSelected] = useState(false)

  useEffect(() => {
    const fetchVideos = async () => {
      if (query === "") {
        setQuery("trending")
      }
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apikey}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(JSON.stringify(data))
      } catch (error) {

      }
    }

    fetchVideos()
  }, [query])
  // Handles if the user clicks anywhere inside the app container, unselecting the search bar and moving it back to it's normal position
  function handleUnSelected() {
    setSelected(false)
    inputRef.current.blur()
  }
  return (
    <div className='app-container' onClick={handleUnSelected} >
      <SearchBar isSelected={isSelected} setQuery={setQuery} setSelected={setSelected} handleUnSelected={handleUnSelected} inputRef={inputRef} />
      <SideBar />
      <MainFeed />

    </div >
  )
}

export default Home
