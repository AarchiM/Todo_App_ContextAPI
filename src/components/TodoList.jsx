import React, { useState } from 'react'
import { useTodo } from '../context'
import { MdEditDocument, MdDeleteForever,MdOutlineDataSaverOn } from "react-icons/md";

const TodoList = ({todo}) =>{
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [isEditiable, setIsEditable] = useState(false);
    const { updateTodo, todoCompleted , deleteTodo} = useTodo();

    const editTodo = () =>
    {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsEditable(false);
    }

    const todoCompletedHandler = () =>
    {
        todoCompleted(todo.id)
    }

    return (
        <div>
            <div className={`flex m-2 ${todo.completion_status? "bg-green-100" : "bg-red-50"} px-2`}>
                <input
                    type="checkbox"
                    onChange={todoCompletedHandler}
                    checked={todo.completion_status} />
                <input
                    type="text"
                    className={`flex-grow bg-transparent focus:outline-none ml-4 ${ todo.completion_status ? "line-through" : "" }`}
                    readOnly={!isEditiable}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)} /> 
                <button
                    className='bg-gray-100 rounded-md p-2 m-1' onClick={() =>{

                        if (todo.completion_status) return;
                        
                        if (isEditiable)
                        {
                            editTodo();
                        }
                        else
                        {
                            setIsEditable((prev)=>!prev)
                        }
                    }
                    }
                disabled={todo.completion_status}
                >
                    
                        {(!isEditiable) ?
                    <MdEditDocument color='blue' fontSize={20} /> :
                    <MdOutlineDataSaverOn color='green' fontSize={20} />}
                </button>
                    
                <button
                    className='bg-gray-100 rounded-md p-2 m-1 '
                    onClick={()=>deleteTodo(todo.id)}
                >
                    <MdDeleteForever color='red' fontSize={20} />
                </button>
            </div>
            <hr />
        </div>
    );
}

export default TodoList