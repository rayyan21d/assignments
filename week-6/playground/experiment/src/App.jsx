import React, { useEffect, useState } from 'react'

function App() {

  // Get a set of Todos from backend...

  const [todos, setTodos] = useState([
    {
      id:1,
      title:"Go to Gym",
      description:"Try the new hamiltonian curls",

    },
    {
      id:2,
      title:"Code",
      description:"Finish some coding exercises",
    },
    {
      id:3,
      title:"Random",
      description:"Watch Stranger Things",
    }
  ]);

  useEffect(()=>{
    // Control will reach here first then it will start polling the back-end every 2s
    window.setInterval( ()=>{
        fetch("https://sum-server.100xdevs.com/todos")
    .then(async (res)=>{
        const json = await res.json();
        setTodos(json.todos)
        console.log(json.todos)
    })
    }  
    , 2000);
  }, [])



  async function handleClick(){
    
    // Here you gotta write the logic for rerendering...
    const newTodos = await fetch("https://sum-server.100xdevs.com/todos");
    const todoObj = await newTodos.json();
    console.log(todoObj)

    setTodos(todoObj.todos);
    
    

  }


  return (
    <div>
      App 
      <br />
      
      <button onClick={handleClick}>Update Todos</button>

      {todos.map( function(todo){

        return <WrapperComponent key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
        </WrapperComponent>
          
        }
      )}

     

    </div>
   
  )




}


const WrapperComponent = React.memo(function WrapperComponent({children}){

  return <div style={{ margin:"20px",border:"2px solid black", padding:"50px"}}>

    {children}

  </div>
})




export default App
