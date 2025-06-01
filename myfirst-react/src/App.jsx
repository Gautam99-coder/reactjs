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
  const [allClicks,setAll]=useState([]);
  const [total,setTotal]=useState(0)

  const HandlLeftClicks=()=>{
    setAll(allClicks.concat('L'))
    setLeft(left+1)
    setTotal(left+right)
  }
   const HandlRightClicks=()=>{
    setAll(allClicks.concat('R'))
    setRight(right+1)
    setTotal(left+right)
  }

  return (
    <div>
      {left}
      <button onClick={HandlLeftClicks}>left</button>
      {right}
      <button onClick={HandlRightClicks}>right</button>
      <p>{allClicks.join('')}</p>
      <p>total: {total}</p>
    </div>
  )
}
export default App