import { TodoStateContext } from '../TodoContext';
import TodoItem from './TodoItem';
import './TodoList.css';
import { useState, useMemo, memo, useContext } from 'react';

function TodoList() {
    const todos = useContext(TodoStateContext)
    const [search, setSearch] = useState('');
    
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const filterTodos = () => {
        if (search === '') {
            return todos;
        }

        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        console.log('getAnalyzedTodoData');
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {totalCount, doneCount, notDoneCount};
    }, [todos]);

    return (
        <div className="TodoList">
            <h4>Todos</h4>
            <div>
                <div>전체 투두: {totalCount}</div>
                <div>완료 투두: {doneCount}</div>
                <div>미완 투두: {notDoneCount}</div>
            </div>
            <input placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch}/>
            <div className='todos_wrapper'>
                {
                    filterTodos().map((todo) => (
                        <TodoItem key={todo.id} {...todo}/>
                    ))
                }
            </div>
        </div>
    );
}

export default memo(TodoList);