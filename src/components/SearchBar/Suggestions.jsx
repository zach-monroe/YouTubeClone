import { useState } from "react";
const Suggestions = ({ search, setSearch, handleSubmit }) => {
  const [suggestionIndex, setSuggestion] = useState(-1)

  function arrows(e) {
    if (e.key === "ArrowDown") {
      setSuggestion((prev) => prev + 1)
      console.log(suggestionIndex)
    } else if (e.key === "ArrowUp") {
      setSuggestion((prev) => prev - 1)
    } else if (e.key === "Enter" && suggestions > -1) {
      setSearch(suggestionIndex)
      handleSubmit()
    }
  }


  return <div className="suggestion-container" onKeyDown={arrows} >
    <div>
      <div className={`suggestion ${suggestionIndex == 0 ? "selected" : ""}`} >suggestion 1</div>
      <div className={`suggestion ${suggestionIndex == 1 ? "selected" : ""}`}  >suggestion 2</div>
      <div className={`suggestion ${suggestionIndex == 2 ? "selected" : ""}`} >suggestion 3</div>
    </div>
  </div>
}

export default Suggestions;
