import style from './Searchbar.module.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Searchbar({q}) {
    const nav = useNavigate();
    const [search, setSearch] = useState('');

    useEffect(() => {
        setSearch(q);
    },[q]);

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const onClickSearch = () => {
        if (search !== '') {
            nav(`/search?q=${search}`);
        }
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onClickSearch();
        }
    }

    return (
        <div className={style.container}>
            <input placeholder='검색어를 입력하세요...' onKeyDown={onKeyDown} onChange={onChangeSearch} value={search}/>
            <button onClick={onClickSearch}>검색</button>
        </div>
    )
}