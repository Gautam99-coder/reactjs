import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)
  const increastByOne=()=>setCounter(counter+1);
  const setToZero=()=>setCounter(0)
  return (
    <div>
    <div>{counter}</div>
    <button onClick={increastByOne} >
      Puls
    </button>
    <button onClick={setToZero} >
      zero
    </button>
    </div>
  )
}

export default App