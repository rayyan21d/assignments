import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [render, forceRender] = useState(0);
    const pRef = useRef();

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
        // Update the ref value
        console.log(pRef.current.innerHTML= `This component has rendered ${render + 1} times.`);
    };

    return (
        <div>
            <p ref={pRef}>This component has rendered {0} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};