import { createSlice, nanoid  } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo)=> todo.id !== action.payload )
        },

        toggleTodo: (state, action) => {
            state.todos = state.todos.map((prevTodo) => prevTodo.id == action.payload ? {...prevTodo, completed: !prevTodo.completed}: prevTodo)
        }
        

    } 
})


export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions

export default todoSlice.reducer