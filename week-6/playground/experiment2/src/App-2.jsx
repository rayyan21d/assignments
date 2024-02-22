import React, {useEffect, useState} from 'react'
import axios from 'axios'
function App() {
    
    const[iD, setId]=useState(1); 
    const list = [1,2,3,4,5];
  return<>
  {
  list.map(function (element){ 
    return(
    <button key={element} 
    style={{margin:"3px"}}
    onClick={()=>{setId(element)}}>
        {element}
    </button>)
  })
  }
    <Todo id={iD} />
    </>
  
}




function Todo({id}){

    const [todo, setTodo] = useState({
"id": 1,
"title": "Go to gym",
"description": "This is custom todo",
"completed": false
});

    // fetch here
    useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(
        function(response){
            const newTodo = response.data.todo;
            console.log(newTodo);
            setTodo(newTodo);

        }
    )

    }, [id])


  return <div>
    ID: {id}
    <h1>{todo.title}</h1>
    <h3>{todo.description}</h3>
  </div>

}
export default App
