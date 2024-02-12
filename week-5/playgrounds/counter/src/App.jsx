import { useState } from "react";

function App() {

  // const[count,setCount] = useState(0);

  const [title,setTitle] = useState('');
  const [des, setDes] = useState('');


  const[todos,setTodos] = useState([{
    title:"Go to gym",
    description:"Go to gym and try the new biep curls",
    completed: false
  },
  {
  title:"Study WebDev",
  description:"Try to solve some Web Related stuff",
  completed: false

  }])

  function addTodo(){

    // For react to Rerender use this function
    setTodos([...todos,{
      title: title,
      description:des,
      completed:false
    } ])

  }
  function idChange(){
    const nitle = document.getElementById("title").value;
    setTitle(nitle);

  }
  function desChange(){
    const descr = document.getElementById("description").value;
    setTitle(descr);


  }



  return(

    <div>
      {/* <CustomButton count={count} setCount={setCount} /> */}
      <div>
      <input id="title" onChange={idChange} type="text" placeholder="Add Title"/>
      </div>
      
      <div>
      <input id="description" onChange={desChange} type="text" placeholder="Add description"/>
      </div>
      
      
      
      <button onClick={addTodo} type="submit">
        Add To Do Button
      </button>
      
      {
      todos.map(
        (todo) =>
        <ToDo title={todo.title} description={todo.description}/>
      )

      }

    </div>

  )
}



// function CustomButton(props){
//   function handler(){
//     props.setCount(props.count+1);
//   }
//   return(
//     <button onClick={handler}>Count {props.count}</button>
//   )
// }


function ToDo(props){

  return(
  <div>
    <h1>
      {props.title}
    </h1>
    <h3>
      {props.description}
    </h3>
    <button onClick={props.setTodos}>Mark as Complete</button>
  </div>
  )

}








export default App
