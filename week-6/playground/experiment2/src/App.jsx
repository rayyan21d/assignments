import { memo, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0)

  // Native function that is being passed as props
  const onClick = useCallback(()=>{
    console.log("child clicked")
  }, [])

  return <div>
    {
        // Here passed down as props!!
    }
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(function Child ({onClick}) {
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})

export default App;