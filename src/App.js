import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { nanoid } from 'nanoid';
import DeleteItem from "./components/deleteItem";
import {addNewTodo, completeItem, deleteTodo} from "./redux/actions";





const App = () => {
const dispatch = useDispatch()
const [  todo, setTodo ] = useState("")
const {todos} = useSelector((s)=> s )
// console.log(todos)


 const handleClick = () => {
     setTodo("")
     dispatch(addNewTodo(todo))
 }
 const removeFromTodo = (id) => {
            dispatch(deleteTodo(id))
    }
 const handleDone = (id) =>{
    dispatch(completeItem(id))
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
                             <DeleteItem item = {item}  removeFromTodo={removeFromTodo} handleDone = {handleDone}/>
                         )
                     }
                 </ul>
             </div>
          </div>
     </div>
  );

};

export default App;
