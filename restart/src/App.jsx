import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
    function CounterFn() {
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 3)
      // the count will be 3 in next render
    }
  return (
    <>
    <div>hello</div>
    <button onClick={CounterFn}>'count :{count}</button>
    </>
  )
}

export default App
