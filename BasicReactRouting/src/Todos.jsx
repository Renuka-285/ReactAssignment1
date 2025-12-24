

import { useEffect,useState } from "react";
function Todos(){
    const[todo,setTodo]=useState([]);
    useEffect(()=>{
        const res=fetch("https://jsonplaceholder.typicode.com/todos");
        const data=res.json();
        setTodo(data.slice(0,10));
    },[]);
    return(
        <>
        <div className="todo-grid">
            {todo.map((tod)=>(
                <div><h4>{tod.title}</h4>
                <p>{tod.completed ? "completed":"NotCompleted"}</p>
                </div>
            ))}
        </div>
        </>

    )

}
export default Todos;