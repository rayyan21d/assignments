import { useState, useEffect } from "react";


export default function useMouseLocation() {

    const [mouseLocation, setMouseLocation] = useState({x: 0, y: 0});

    const handleMouseMove = (event)=>{
        setMouseLocation({x: event.clientX, y: event.clientY})
    };

    useEffect(()=>{

        window.addEventListener('mousemove', handleMouseMove);

        // removes the prevoius event listener when this component is unmounted 
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };

    },[]);


    return mouseLocation;
}