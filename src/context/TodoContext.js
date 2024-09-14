import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "",
        completion_status: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    todoCompleted: (id) => { },
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;