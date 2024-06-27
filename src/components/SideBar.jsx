import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const SideBar = ({ isSelected }) => {
  const [selectedTab, setTab] = useState()

  useEffect(() => {
    if (isSelected) {
      setTab(-1)
    }
  }, [isSelected])



  return <div className="sidebar">
    <motion.div whileTap={{ scale: 0.8 }} className={`tab ${selectedTab === 0 ? 'selected' : ''}`} onClick={() => setTab(0)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="#e8eaed">
        <path d="M160-120v-720h80v80h80v-80h320v80h80v-80h80v720h-80v-80h-80v80H320v-80h-80v80h-80Zm80-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm400 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Z" />
      </svg>
    </motion.div>
    <motion.div whileTap={{ scale: 0.8 }} className={`tab ${selectedTab === 1 ? 'selected' : ''}`} onClick={() => setTab(1)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="#e8eaed">
        <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
      </svg>
    </motion.div>
    <motion.div whileTap={{ scale: 0.8 }} className={`tab ${selectedTab === 2 ? 'selected' : ''}`} onClick={() => setTab(2)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="#e8eaed">
        <path d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm498-240q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Z" />
      </svg>
    </motion.div>
    <motion.div whileTap={{ scale: 0.8 }} className={`tab ${selectedTab === 3 ? 'selected' : ''}`} onClick={() => setTab(3)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="#e8eaed">
        <path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Z" />
      </svg>
    </motion.div>
    <motion.div whileTap={{ scale: 0.8 }} className={`tab ${selectedTab === 4 ? 'selected' : ''}`} onClick={() => setTab(4)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="#e8eaed">
        <path d="M270-80q-45 0-77.5-30.5T160-186v-558q0-38 23.5-68t61.5-38l395-78v640l-379 76q-9 2-15 9.5t-6 16.5q0 11 9 18.5t21 7.5h450v-640h80v720H270Zm10-217 80-16v-478l-80 16v478Z" />
      </svg>
    </motion.div>
  </div>
}

export default SideBar
