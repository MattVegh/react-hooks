import React, { useState } from "react"

function App() {
  const [answer, setAnswer] = useState('Yes')
  const [count, setCount] = useState(0)

  function reduce() {
    setCount(count - 1)
  }

  function changeAnswer() {
    setAnswer(answer === 'Yes' ? 'No ' : 'Yes')
  }

  return (
    <div>
      <h1>Is state important to know? {answer}</h1>
      <button onClick={changeAnswer}>{answer === 'Yes' ? 'No ' : 'Yes'}</button>
      
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Add!</button>
      <button onClick={reduce}>Reduce!</button>
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