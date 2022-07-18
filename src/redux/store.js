import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const initialValue = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
}
const storeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "ADD_TODO" :
         localStorage.setItem("todos", JSON.stringify([...state.todos, action.payload]))
            return {...state, todos: action.payload}
        case "REMOVE_FROM_TODO" :
            localStorage.setItem("todos", JSON.stringify([state.todos.filter((item) => item.id !== action.id)]))
            return {...state, todos: action.payload}
        case "COMPLETE_ITEM" :
            localStorage.setItem("todos", JSON.stringify([state.todos.map((item) => item.id === action.id)
            ]))
            return {...state,todos:action.payload}
        default:
            return state
    }
}

export const store = createStore(storeReducer, composeWithDevTools(
    applyMiddleware(thunk),

));
