import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='App'>
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  )
}

export default App
