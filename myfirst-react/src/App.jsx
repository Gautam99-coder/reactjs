const House = (props) =>{
  console.log(props);
  return(
    <div>
      <p>house {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <House name='spider'/>
      <House/>
    </div>
  )
}
export default App
