import React, {useState} from 'react';


const DeleteItem = ({onClick, item, removeFromTodo, handleDone  }) => {
console.log(item)
    return (
    <div key={item.id} className="list-group-item d-flex justify-content-between  rounded w-100% ">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => handleDone(e)}/>
                 <span className={`${item.completed ? "text-decoration-line-through" : "" }`}>{item.text}</span>
            </div>
                <div onClick={() => removeFromTodo(item.id)} className="btn btn-outline-danger mt-auto "> Delete</div>
    </div>


    );
};

export default DeleteItem;




// <span className= {`${item.completed ?  "text-decoration-line-through" : ""}`}>{item.text}</span>