import { useState } from 'react'

const Display=(props)=>{
  return(
    <div>{props.counter}</div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const App = () => {

  const [ counter, setCounter ] = useState(0)
  const increastByOne=()=>setCounter(counter+1);
  const decreaseByOne=()=>setCounter(counter-1)
  const setToZero=()=>setCounter(0)
  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increastByOne} text='plse' />
      <br />
      <Button onClick={setToZero} text='zero' />
      <br />
      <Button onClick={decreaseByOne} text='min' /> 
    </div>
  )
}
export default App