import React from 'react'

import axios from 'axios';

function useTodos(n) {

    

    const [todos, setTodos] = React.useState([]);
    
    const [loading, setLoading] = React.useState(true);

    React.useEffect( ()=>{

        const value = setInterval( ()=>{
        axios.get("https://sum-server.100xdevs.com/todos").then(res =>{
      setTodos(res.data.todos);
      console.log(res.data.todos);
        setLoading(false);})

        }, 1000*n)

        return () => clearInterval(value);
        

    }, [n])


  return {todos, loading};
}

export default useTodos