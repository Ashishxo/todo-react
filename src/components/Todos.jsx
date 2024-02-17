import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos(){
    const todos = useSelector((state) => state.todos)

    const dispatch = useDispatch()

    
    return(
        <>
            <div className="flex flex-col items-center gap-2">
          
              {todos.map((todo) =>(
                <div key={todo.id} className="bg-[#efefef] w-5/6 flex mt-2 py-4 px-3 rounded-3xl justify-between">

                  
                  <div className="flex gap-6 items-center ml-3">
                      <h2 className="inline-block font-['Quicksand'] text-lg">{todo.text}</h2>
                  </div>

                  <div className="px-1">

                      <button className="w-9 rounded-lg bg-white p-[6px] hover:bg-[#cfcfcf]">
                          <img className="" src="./src/assets/delete.png" onClick={() => dispatch(removeTodo(todo.id))} />
                      </button>  

                  </div>

                </div>
            
            ))}

            </div>

            
            
        </>
    )
}


export default Todos;
