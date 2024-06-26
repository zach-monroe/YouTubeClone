import { useCallback, useState } from "react";

const getVideos = ({ search }) => {
  const [query, setQuery] = useState()
  if (search === "") {
    setQuery("trending")
  } else {
    setQuery(search)
  }

  const submitSearch = useCallback(async (query) => {

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(JSON.stringify(data))
    } catch (error) {
      console.log(error.message)
    }


  }, [])

  return submitSearch
}

export default getVideos;
