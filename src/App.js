import { useState, useEffect } from 'react'


export default function App(){
    const [todos, setTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])
    const [newTodo, setNewTodo] = useState({
        title: '',
        completed: false
    })

    // createTodos
    const createTodo = async () => {
        try {
            const response = await fetch('/api/todos')
            const createdTodo = await response.json()
            
        } catch (error) {
            
        }
    }
    // deleteTodos
    // moveToCompleted

    return(<>
        <h1>Hello World</h1>
    </>)
}