import { useState } from 'react'

// initialize state
// create any functions we need to modifying the state
// return wahtever we want another component to have access too

function useCounter() {
    const [ count, setCount ] = useState(0)

    function increment() {
        setCount(count => count + 1)
    }

    function reduce() {
        setCount(count - 1)
      }

    return { count, increment, reduce }
}

export default useCounter