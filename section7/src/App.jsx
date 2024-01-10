import { useState, useRef, useReducer, useCallback, useMemo } from 'react'
import Header from './components/Header'
import './App.css'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import { TodoStateContext, TodoDispatchContext } from './TodoContext'

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

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        createDate: new Date().getTime(),
    }});
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      data: targetId
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      data: targetId
    });
  }, []);

  const memoizedDispatches = useMemo(()=>{
    return {
      onCreate,
      onUpdate,
      onDelete
    }
  },[])

  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
