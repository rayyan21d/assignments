import { useSetRecoilState, useRecoilValue, RecoilRoot } from "recoil"
import { countAtom, evenSelector } from "./store/atoms/count"
function App() {
  
  // Wrap the count renderer inside a provider.
  return (

    <div>
      <RecoilRoot>
       <Count />
      </RecoilRoot>
    
    </div>
  
  )
}

function Count( ) {
  console.log("It re-renders")
  return <div>
    <CountRenderer />
    <EvenRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {

  const count = useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}

function EvenRenderer(){
  
  const isEven = useRecoilValue(evenSelector);

  return(
    <div>
      {isEven ? "It is even" : null}
    </div>
  )

}

function Buttons() {
  
  const setCount = useSetRecoilState(countAtom);
  console.log("Buttons Re-rendered!");



  return <div>
    <button onClick={() => {
      setCount(count => count + 1 )
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1 )
    }}>Decrease</button>
  </div>
}

export default App