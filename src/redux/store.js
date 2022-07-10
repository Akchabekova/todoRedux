import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialValue = {
    todos: []
}
const storeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "ADD_TODO" :
            return {...state, todos: [...state.todos, action.payload]}
        case "REMOVE_FROM_TODO" :
            return {...state, todos: state.todos.filter((item) => item.id !== action.payload)}
        default:
            return state
    }
}

export const store = createStore(storeReducer, composeWithDevTools(
    applyMiddleware(),

));
