import React, { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function TodoForm(){
    const [input, setInput] = useState()
    const dispatch = useDispatch();

    function addTodoHandler(e){
        e.preventDefault()

        if(input === ""){}
        else
        {dispatch(addTodo(input));
        setInput('');}
    }

    return(
        <form onSubmit={addTodoHandler} >
            <input type="text" name="" id="" placeholder="Enter Your Todo..." className="rounded-l-3xl py-4 px-5 w-9/12 md:w-5/6 my-8 outline-none bg-[#efefef]" value={input}
            onChange={(e)=> setInput(e.target.value)}/>

            <button className="w-3/12 md:w-1/6 translate-y-px md:translate-y-0 bg-indigo-400 pt-[17px] pb-[15px] rounded-r-3xl text-white font-['Quicksand'] font-bold" type="submit">Add
            </button>
        </form>
    )
}


export default TodoForm;


