import React, { useState } from "react"

function App() {
  const [answer] = useState('Yes')
  const [count] = useState(0)

  return (
    <div>
      <h1>Is state important to know? {answer}</h1>
      <h1>{count}</h1>
      <button>Change!</button>
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