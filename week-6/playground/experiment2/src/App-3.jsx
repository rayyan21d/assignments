import React, {useEffect, useMemo, useState} from 'react'

function App() {

    const [inputValue,setInputValue]= useState(0);
    const [counter, setCounter] = useState(0);

    let count = useMemo(()=>{
        let finalCount = 0;
        for(let i=1; i<=inputValue; i++){
            finalCount=finalCount+i;
        }
        return finalCount;
    
    }, [inputValue])

   
   

    

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center', marginTop:'20px'}}>
        <input type="text" onChange={function(e){ setInputValue(e.target.value)}}/>
        <h3>The Sum from 1 to {inputValue} is {count}</h3>
        <button style={{border:'3px solid black', borderRadius:'7px', padding:'3px 10px', margin:"1px", fontFamily:'monospace', background:'red', backdropFilter:'blur', backgroundBlendMode:'soft-light'}}
        onClick={()=>{setCounter(counter+1)}}> Counter   {counter} </button>

    </div>
  )
}

export default App