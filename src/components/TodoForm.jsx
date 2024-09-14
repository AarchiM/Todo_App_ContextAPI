import { useState } from "react"
import { useTodo } from "../context"

const TodoForm = () =>
{
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo()
    
    const add = (e) =>
    {
        e.preventDefault();
        if (!todo) return
        
        addTodo({todo, completion_status:false});
        
        setTodo("");
        
    }
  return (
      <form className="flex space-x-2" onSubmit={add}>
          <input
              type="text"
              className="rounded-lg flex-grow text-blue-950 focus:outline-none p-1"
              placeholder="Enter Your Todo Here.."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button
              type="submit"
              className="p-2 right-2 text-white rounded-lg bg-blue-600"
          >
              Add Todo
          </button>
      </form>
  )
}

export default TodoForm