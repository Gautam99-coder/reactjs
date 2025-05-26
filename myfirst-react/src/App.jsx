const Hello = (props) => {
  const Student=[
    {name:"Aja",id:1},
    {name:"spider", id:2},
  ]
  return(
    <div>
      <p>{Student[0].name} {Student[1].name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello/>
    </div>
  )
}
export default App
