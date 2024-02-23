import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo, toggleEdit, updateTodo } from "../features/todo/todoSlice";

function Todos(){
    

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    
    return(
        <>
            <div className="flex flex-col items-center gap-2">
          
              {todos.map((todo) =>(
                <form key={todo.id} className="bg-[#efefef] w-full md:w-5/6 flex mt-4 py-4 px-3 rounded-3xl justify-between">

                    
                        <div className="flex gap-6 items-center ml-3 w-full">
                            <input type="checkbox" name="" id="" className="size-4" value={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))}/>
                            {/* <h2 className={`font-['Quicksand'] text-xl ${todo.completed ? `line-through` : ``}`}>{todo.text}</h2> */}
                            <input type="text" value={todo.text} onChange={(e) => dispatch(updateTodo({id: todo.id, text: e.target.value}))} disabled={!todo.isEditable} className={`w-full block font-['Quicksand'] rounded-lg px-2 md:text-xl ${todo.completed ? `line-through` : ``} text-ellipsis bg-inherit ${todo.isEditable ? `border-solid border-2 border-gray-500`:``} ${todo.id}`}/>
                        </div>

                        <div className="px-1 flex gap-3">

                            <button className="w-9 rounded-lg bg-white p-[6px] hover:bg-[#cfcfcf]" onClick={(e)=> {e.preventDefault();  return(dispatch(toggleEdit(todo.id)))}}>
                                <img className="" src={`${todo.isEditable ? `https://cdn-icons-png.flaticon.com/512/3767/3767084.png` : `https://cdn-icons-png.flaticon.com/512/200/200389.png`}`}   />
                            </button>  

                            <button className="w-9 rounded-lg bg-white p-[6px] hover:bg-[#cfcfcf]" onClick={() => dispatch(removeTodo(todo.id))}>
                                <img className="" src="https://www.svgrepo.com/show/502608/delete-2.svg"  />
                            </button>  

                        </div>
                    

                </form>
            
            ))}

            </div>

            
            
        </>
    )
}


export default Todos;

