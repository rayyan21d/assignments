import { useState } from "react"

export function CreateTodo(){

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');



    return <div>
        <input type="text" placeholder="Title" onChange={function(e){const title= e.target.value; setTitle(title)}}/> <br />
        <input type="text" placeholder="Description" onChange={function(e){const desc= e.target.value; setDescription(desc)}}/> <br />
        <button onClick={()=>{
            fetch('http://localhost:3000/todos',
            {

                method:"POST",
                body:JSON.stringify({

                    title: title,
                    description: description,
                    completed: false

                }),
                headers:{
                "Content-type":"application/json"
                }
            }
            ).then(
                async function(res){
                    const json = await res.json();
                    alert("ToDo Added")
                    alert(json)
                }
            )




        }}>Add a Todo</button>        
    </div>
}

