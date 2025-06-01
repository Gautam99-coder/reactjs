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

const History=(props)=>{
  if(props.allClicks.length === 0){
    return(
      <div>
        This app used by pressing the button.
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join('')};
    </div>
  )
}
const App = () => {
  const [left,setLeft]=useState(0)
  const [right,setRight]=useState(0)
  const [allClicks,setAll]=useState([]);
  const [total,setTotal]=useState(0)

  const HandlLeftClicks=()=>{
    setAll(allClicks.concat('L'))
    const updateleft=left+1;
    setLeft(updateleft)
    setTotal(updateleft+right)
  }
   const HandlRightClicks=()=>{
    setAll(allClicks.concat('R'))
    const updateright=right+1;
    setRight(updateright)
    setTotal(updateright+right)
  }

  return (
    <div>
      {left}
      <button onClick={HandlLeftClicks}>left</button>
      {right}
      <button onClick={HandlRightClicks}>right</button>
      <History allClicks={allClicks}/>
      <p>total: {total}</p>
    </div>
  )
}
export default App