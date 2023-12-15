import React, { useState } from "react"
import './App.css';
import Box from "./views/Box"

function App() {
  const [data, setData] = useState({
    color: '',
    height: 0,
    width: 0,
    squares: []
  })

  const handleChange = e => { setData(prev => ({ ...prev, [e.target.name]: e.target.value })) }


  const handleAdd = () => setData(prev => ({ ...prev, squares: [...prev.squares, data] }))

  return (
    <>
      <div id="top">
        <div>Color:
          <input name="color" type="text" placeholder="Color" onChange={(e) => handleChange(e)}></input>
        </div>
        <div>Height:
          <input name="height" type="text" placeholder="Height" onChange={(e) => handleChange(e)}></input>
        </div>
        <div>Width:
          <input name="width" type="text" placeholder="Width" onChange={(e) => handleChange(e)}></input>
        </div>
        <button id="button" onClick={() => handleAdd()} >Add</button>
      </div>
      <div id="bottom">
        <Box data={data.squares} />
      </div>


    </>


  );

}

export default App;
