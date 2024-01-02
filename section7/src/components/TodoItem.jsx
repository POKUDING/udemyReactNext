import './TodoItem.css'
import {memo} from 'react'

function TodoItem(
    {id, isDone, createDate, content, onUpdate, onDelete}
) {
    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDelete = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={isDone} onChange={onChangeCheckbox}/>
            <div className='content'>{content}</div>
            <div className='date'>{new Date(createDate).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}

export default memo(TodoItem);