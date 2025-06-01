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
  const [left,setLeft]=useState(0)
  const [right,setRight]=useState(0)
  return (
    <div>
      {left}
      <button onClick={()=>setLeft(left+1)}>left</button>
      {right}
      <button onClick={()=>setRight(right+1)}>right</button>
    </div>
  )
}
export default App