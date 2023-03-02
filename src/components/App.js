import React, {useState} from 'react'
import TypeHere from './TypeHere'
import CopyCat from './CopyCat'

function App() {

  const [text, setText] = useState("")

  function findText(e) {
    setText(e.target.value)
  }

  return (
    <div>
      <TypeHere findText={findText} />
      <CopyCat toCopy={text} />
    </div>
  );
}

export default App;
