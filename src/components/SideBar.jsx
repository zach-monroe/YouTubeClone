const SideBar = () => {
  return <div className="sidebar">
    <div className="tab">
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="#e8eaed"><path d="M160-120v-80h640v80H160Zm560-520h80v-120h-80v120ZM320-280q-66 0-113-47t-47-113v-400h200v96l-72 58q-2 2-8 16v170q0 8 6 14t14 6h160q8 0 14-6t6-14v-170q0-2-8-16l-72-58v-96h400q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Z" />
      </svg>
    </div>
    <div className="tab"><svg viewBox="0 0 100 100" height="1em" width="1em"><rect x="10" y="10" width="80" height="80" fill="red" /></svg></div>
    <div className="tab">Tab</div>
    <div className="tab">Structure</div>
    <div className="tab">Thingy</div>
  </div>
}

export default SideBar
