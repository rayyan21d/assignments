import { useEffect, useState} from 'react'
import React from 'react'
import './App.css'


function App() {

  const [todos, setTodos]= useState([{
    id: 1,
    title:"Go To Gym",
    description: "This is a description"
  },{
    id: 2,
    title:"Eat protien",
    description: "Hit those calorie marks"

  }, {
    id: 3,
    title:"Code",
    description: "Try out new things and type stuff"

  }, {
    id: 4,
    title:"Sleep",
    description: "Get a good amount of sleep"

  }])

  function addtoDo(){

    setTodos([...todos, {
    id: todos.length+1,
    title:Math.random(),
    description: Math.random()

    }])

  }

  
  return (
    
    <div>

    <button onClick={addtoDo}>Add toDo</button>
    { todos.map( todo=> <Todo  key={todo.id} title={todo.title} description={todo.description}/>) }

    </div>
   
  )
}

export default App

const Header = React.memo( function Header({title}){
 
  return <div>
    <h3>My name is {title}</h3>
  </div>

})

function Todo({title, description}) {
  return (
    <div>
        <h2>{title}</h2>
        <h4>{description}</h4>
    </div>
  )
}