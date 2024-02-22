import { useState } from 'react'

import './App.css'

import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'


function App() {

  const [todos, setTodos]= useState([]);

 

  window.setTimeout(HitBackend, 2000)

  async function HitBackend(){
    await fetch("http://localhost:3000/todos").then(
      async function(res){
        const json = await res.json()
        console.log("Got data from back end")
        setTodos(json.todos);
      }

    );
  }







  return (
    <div>
     <CreateTodo />
     <Todos todos={todos} />

    </div>
  )
}

export default App
