import { useState } from 'react'
import "./App.css";
import ShowCount from './components/showCount/showCount';


function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='app'>
      <ShowCount count={counter}/>
    <div>
      <button onClick={()=>setCounter(counter + 1)} className='sumar'>
      sumar
      </button>
      <button onClick={()=>setCounter(counter - 1 )} className='restar'> restar</button>
      <button onClick={()=>setCounter(0)} className='resetear'> resetear</button> 
    </div>
    </div>
   
    
  )
}

export default App
