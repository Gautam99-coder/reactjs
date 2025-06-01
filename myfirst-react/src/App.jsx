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
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}
export default App