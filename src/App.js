import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { nanoid } from 'nanoid'



const App = () => {
const dispatch = useDispatch()
const [  todo, setTodo ] = useState("")
const {todos} = useSelector((s)=> s )
    console.log(todos)

 const handleClick = () =>{
     console.log(todo)
     setTodo("")
     dispatch({
         type : "ADD_TODO" ,
         payload : {
             id : nanoid() ,
             text : todo ,
             completed : false
         }
     })
 }

 const handleChange = (e) => {
     setTodo(e.target.value)
 }
  return (
      <div className="container mt-5">
          <div className="row">
             <div className="col-6 offset-3">
                 <div className="input-group mb-3">
                     <input onChange={handleChange}  value={todo} type="text" className="form-control" placeholder="Enter your todo" />
                         <button onClick={handleClick} className="btn btn-outline-secondary" type="button">Add</button>
                 </div>
                 <ul className="list-group">
                     {
                         todos.map((item)=>
                             <li  key = {item.id} className="list-group-item">{item.text}</li>
                         )
                     }
                 </ul>
             </div>
          </div>

      </div>
  );

};

export default App;
