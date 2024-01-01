import { useState, useEffect, useRef } from 'react'
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import useUpdate from './Hooks/useUpdate.js'
import useInput from './Hooks/useInput.js'

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();
  
  useUpdate(() => {
    console.log(`Update`);
  });

  useEffect(() => {
    console.log(`Mount`);
  }, []);

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText}/>
      </section>
      <section>
        <Viewer count={count}/>
        {(count % 2 === 0 && <Even />)}
      </section>
      <section>
        <Controller onClickButton={onClickButton} setCount={setCount}/>
      </section>
    </div>
  )
}

export default App
