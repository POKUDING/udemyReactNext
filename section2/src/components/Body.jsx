import { useRef, useState } from "react";

export default function Body() {
    const [state, setState] = useState({
        name: "",
        gender: "",
        area: ""
    });
    const nameRef = useRef()
;
    const onChange = (e) => {
        console.log(e);
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        console.log(nameRef);
        if (state.name.length === 0) {
            nameRef.current.focus();
        }
        else
            alert(`${state.name}님 회원가입을 축하드립니다.`)
    }

    return (
    <div className="body">
        <div>
            <input ref={nameRef} name={"name"} value={state.name} onChange={onChange}/>
            {state.name.length}/600
        </div>
        <div>
            <select name={"gender"} value={state.gender} onChange={onChange}>
                <option value="">밝히지 않음</option>
                <option value="female">여성</option>
                <option value="male">남성</option>
            </select>
        </div>
        <div>
            <textarea name={"area"} value={state.area} onChange={onChange}/>
        </div>
        <div>
            <button onClick={onSubmit}>회원가입</button>
        </div>
    </div>
    );
}