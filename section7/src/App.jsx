import { useState, useRef } from 'react'
import Header from './components/Header'
import './App.css'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'react 공부',
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: '설거지하기',
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: '놀기',
    createDate: new Date().getTime(),
  },
]

function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    }
    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => 
        todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
      )
    )
  }

  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => todo.id !== targetId)
    )
  }

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
