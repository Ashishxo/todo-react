import { useState } from 'react'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h2 className='text-center font-["roboto"] font-bold text-[#5e5e5e] text-5xl my-12'>ToDo List</h2>
      <TodoForm/>
      <Todos/>
    </>
  )
}

export default App
