import React, { useState, useEffect, useRef } from "react"
import AddressBook from './AddressBook'
import randomcolor from 'randomcolor'

function App() {
  const [answer, setAnswer] = useState('Yes')
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')

  const inputRef = useRef(null)

  const [newTodoValue, setNewTodoValue] = useState("")
  const [todosList, setTodosList] = useState([])

  function reduce() {
    setCount(count - 1)
  }

  function changeAnswer() {
    setAnswer(answer === 'Yes' ? 'No ' : 'Yes')
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 6000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  //random color on load, never changes
  // useEffect(() => {
  //   setColor(randomcolor())
  // }, [])


  function handleChange(event) {
    setNewTodoValue(event.target.value)
  }

  function addTodo(event) {
    event.preventDefault()
    setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
    setNewTodoValue("")
    console.log(inputRef)
    inputRef.current.focus()
  }

  const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)

  return (
    <div>
      <h1>Is state important to know? {answer}</h1>
      <button onClick={changeAnswer}>{answer === 'Yes' ? 'No ' : 'Yes'}</button>

      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add!</button>
      <button onClick={reduce}>Reduce!</button>
      <AddressBook />

      
      <form>
        <input ref={inputRef} type="text" name="todo" value={newTodoValue} onChange={handleChange} />
        <button onClick={addTodo}>Add todo item</button>
      </form>
      {allTodos}
    </div>
  )
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default App