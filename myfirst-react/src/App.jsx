const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
const Footer =(props)=>{
  console.log(props)
  return(
    <div>
      <p>this is footer ,this is my social handle<a href="www.facebook.com">facebook</a></p>
    </div>
  )
}

const App = () => {

  const name = 'spider'
  const age = 99

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello name='batman' age={35} />
      <Footer/>
    </div>
  )
}
export default App
