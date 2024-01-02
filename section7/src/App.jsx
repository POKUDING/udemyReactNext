import { useState, useRef, useReducer } from 'react'
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

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((it) => 
        it.id === action.data ? {...it, isDone: !it.isDone} : it
      );
    case 'DELETE':
      return state.filter((it) => it.id !== action.data);
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        createDate: new Date().getTime(),
    }});
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      data: targetId
    });
  }

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      data: targetId
    });
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
