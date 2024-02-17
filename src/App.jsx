import { useState } from 'react'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h2 className='text-center font-["roboto"] font-bold text-[#444] text-5xl my-12'>ToDo List</h2>
      <TodoForm/>
      <hr />
      <Todos/>
    </>
  )
}

export default App
