import { useState } from 'react'


function App() {
  let [count, setCount] = useState(0)
    function CounterFn() {
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 3)
    }
  return (
    <>
    <div>hello</div>
    <button onClick={CounterFn}>'count :{count}</button>
    </>
  )
}

export default App
