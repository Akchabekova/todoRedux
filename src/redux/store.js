import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialValue = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
}
const storeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "ADD_TODO" :
         localStorage.setItem("todos", JSON.stringify([...state.todos, action.payload]))
            return {...state, todos: [...state.todos, action.payload]}
        case "REMOVE_FROM_TODO" :
            return {...state, todos: state.todos.filter((item) => item.id !== action.id)}
        case "COMPLETE_ITEM" :
            return {...state,todos: state.todos.map((item) => {
                if( item.id === action.id ){
                    return {...item, completed : !item.completed}
                }
                return item
                })}
        default:
            return state
    }
}

export const store = createStore(storeReducer, composeWithDevTools(
    applyMiddleware(),

));
