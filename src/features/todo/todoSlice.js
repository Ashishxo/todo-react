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
                completed: false,
                isEditable: false,
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo)=> todo.id !== action.payload )
        },

        toggleTodo: (state, action) => {
            state.todos = state.todos.map((prevTodo) => prevTodo.id === action.payload ? {...prevTodo, completed: !prevTodo.completed}: prevTodo)
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((prevTodo => prevTodo.id === action.payload.id ? {...prevTodo, text: action.payload.text} : prevTodo))
        },

        toggleEdit: (state, action) => {
            state.todos = state.todos.map((prevTodo) => prevTodo.id === action.payload ? {...prevTodo, isEditable: !prevTodo.isEditable}: prevTodo);
        },
        

    } 
})


export const {addTodo, removeTodo, toggleTodo, toggleEdit, updateTodo} = todoSlice.actions

export default todoSlice.reducer