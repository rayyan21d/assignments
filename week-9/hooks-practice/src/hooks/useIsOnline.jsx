import { useEffect, useState } from "react";

function useIsOnline(){

    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect( () => {
        

        window.addEventListener('online', () => {console.log('Became online'); setIsOnline(window.navigator.onLine) });
        window.addEventListener('offline', () => {console.log('Became offline'); setIsOnline(window.navigator.onLine)});


    }, [])

    return isOnline;
}

export default useIsOnline;