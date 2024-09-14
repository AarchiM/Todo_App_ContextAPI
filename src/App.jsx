import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm, TodoList } from './components'
import { TodoProvider } from './context'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>
  {
    setTodos((prev)=> [{id:Date.now(), ...todo}, ...prev])
  }
  const deleteTodo = (id) =>
  {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }
  const updateTodo = (id,todo) =>
  {
    setTodos((prev)=> prev.map((newtodo)=> (newtodo.id===id ? todo: newtodo) ))
  }
  const todoCompleted = (id) =>
  {
    setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completion_status: !todo.completion_status } : todo));
    
  }

  useEffect(() =>
  {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length>0)
    {
      setTodos(todos)
    }
  }, [])
  
  useEffect(() =>
  {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, todoCompleted}}>
      <div className='h-screen w-full flex bg-gray-50'>
        <div className='m-auto justify-center w-2/3 bg-gray-100 shadow-lg p-5 rounded-md '>
          <div className='bg-white w-full p-2 mb-1'>
            <TodoForm/>
          </div>
          <div className='bg-white rounded-lg  w-full p-2'>
            {
              (todos.length < 1)
                ?
                <div className='text-blue-700 text-center font-bold'>
                Please Enter Some Todos....
              </div>
                :
              todos.map((todo) => <div key={todo.id}>
                <TodoList todo={todo} />
              </div>)
              
            }  
                
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
