import { useState,  useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState('');
    // Your solution starts here
    let expensiveValue = 0;

    expensiveValue = useMemo(()=>{
        let expensiveValue = 1;
        let n = input;
        while(n>1){

            expensiveValue = expensiveValue *n;
            n--;
        }
        console.log(expensiveValue);
        return expensiveValue;
    
    },[input]) 
    // Your solution ends here

    return (
        <div>
            <input 
                
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p id="area">Calculated Value: {expensiveValue}</p>
        </div>
    );
}