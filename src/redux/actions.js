import {nanoid} from "nanoid";

export const addNewTodo = (todo) => {
    return (dispatch, getState) =>{
        return dispatch( {
            type : "ADD_TODO" ,
            payload :[...getState().todos,{
                id : nanoid() ,
                text : todo ,
                completed : false
            }]
    })

    }
}

export const deleteTodo = (id) => {
    return (dispatch, getState) => {
        return  dispatch( {
            type : "REMOVE_FROM_TODO" ,
           payload : getState().todos.filter((item) => item.id !== id)
  })
    }
}

export const completeItem = (id) => {
    return (dispatch, getState) => {
        return dispatch({
            type: "COMPLETE_ITEM",
            payload : getState().todos.map((item) => {
                if( item.id === id ){
                    return {...item, completed : !item.completed}
                }
                return item
            })
         })
    }
   }
