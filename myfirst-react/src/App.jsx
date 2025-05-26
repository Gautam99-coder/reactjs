const Hello = () => {
  return (
    <div>
      <p>Hello Spider</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Hello />
      <h1>Greetings</h1>
      <Hello/>
      <Hello/>
      
    </div>
  )
}
export default App
